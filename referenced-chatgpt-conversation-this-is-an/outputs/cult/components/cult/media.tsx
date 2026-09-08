'use client';
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { usePathname } from 'next/navigation';
import { worlds } from '@/lib/content';
import { shouldAutoplay } from '@/lib/enquiry';
type MotionState = {
  playing: boolean;
  mobile: boolean;
  hidden: boolean;
  toggle: () => void;
};
const MotionContext = createContext<MotionState>({
  playing: false,
  mobile: false,
  hidden: false,
  toggle: () => {},
});
export function MotionProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [hidden, setHidden] = useState(false);
  const userChoice = useRef(false);
  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const narrow = matchMedia('(max-width: 768px)');
    const connection = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
          effectiveType?: string;
          addEventListener?: (event: string, fn: () => void) => void;
          removeEventListener?: (event: string, fn: () => void) => void;
        };
      }
    ).connection;
    const sync = () => {
      setMobile(narrow.matches);
      const allowed = shouldAutoplay({
        reducedMotion: motion.matches,
        mobile: narrow.matches,
        saveData: !!connection?.saveData,
        slow: ['slow-2g', '2g', '3g'].includes(connection?.effectiveType ?? ''),
      });
      if (!userChoice.current || motion.matches) setPlaying(allowed);
    };
    const visibility = () => setHidden(document.hidden);
    sync();
    visibility();
    motion.addEventListener('change', sync);
    narrow.addEventListener('change', sync);
    connection?.addEventListener?.('change', sync);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      motion.removeEventListener('change', sync);
      narrow.removeEventListener('change', sync);
      connection?.removeEventListener?.('change', sync);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);
  return (
    <MotionContext.Provider
      value={{
        playing,
        mobile,
        hidden,
        toggle: () => {
          userChoice.current = true;
          setPlaying((v) => !v);
        },
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}
export function FilmControl({ className = '' }: { className?: string }) {
  const { playing, toggle } = useContext(MotionContext);
  const [hasFilms, setHasFilms] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasFilms(!!document.querySelector('.media')));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  if (!hasFilms) return null;
  return (
    <button
      type="button"
      className={`film-control ${className}`}
      onClick={toggle}
      aria-label={playing ? 'Pause all films' : 'Play films'}
      aria-pressed={playing}
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        {playing ? (
          <>
            <rect x="3" y="2" width="3" height="12" />
            <rect x="10" y="2" width="3" height="12" />
          </>
        ) : (
          <path d="M4 2v12l10-6z" />
        )}
      </svg>
      <span>{playing ? 'Pause films' : 'Play films'}</span>
    </button>
  );
}
export function Media({
  poster,
  film,
  priority = false,
  position = 'center',
  className = '',
}: {
  poster: string;
  film?: string;
  priority?: boolean;
  position?: string;
  className?: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const { playing, mobile, hidden } = useContext(MotionContext);
  const source = film
    ? `/media/${film}${mobile ? '-mobile' : ''}.mp4`
    : undefined;
  const shouldLoad = !!film && inView && playing && !hidden && !failed;
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    // A changed browser media source invalidates its previous readiness/error.
    // oxlint-disable-next-line react/react-compiler
    setReady(false);
    // oxlint-disable-next-line react/react-compiler
    setFailed(false);
  }, [source]);
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    if (shouldLoad) {
      const promise = el.play();
      promise?.catch(() => setReady(false));
    } else {
      el.pause();
      // Synchronize the poster state with the paused external video element.
      // oxlint-disable-next-line react/react-compiler
      setReady(false);
    }
  }, [shouldLoad, source]);
  return (
    <div
      ref={host}
      className={`media ${className}`}
      style={{ '--subject-position': position } as CSSProperties}
      aria-hidden="true"
    >
      <picture>
        <source
          media="(max-width:768px)"
          srcSet={`/media/${poster}-mobile.webp`}
        />
        <img
          src={`/media/${poster}.webp`}
          alt=""
          width="1440"
          height="810"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </picture>
      {shouldLoad && (
        <video
          ref={video}
          src={source}
          className={ready ? 'is-ready' : ''}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          disablePictureInPicture
          tabIndex={-1}
          onPlaying={() => setReady(true)}
          onError={() => {
            setFailed(true);
            setReady(false);
          }}
        />
      )}
    </div>
  );
}

// The outgoing layer remains opaque until the incoming layer has completed its
// dissolve. Adjacent films stay paused and buffered; only the visible film plays.
export function HeroFilms({ active }: { active: string }) {
  const { playing, mobile, hidden } = useContext(MotionContext);
  const host = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [displayed, setDisplayed] = useState('creative');
  const [outgoing, setOutgoing] = useState<string | null>(null);
  const images = useRef(new Map<string, HTMLImageElement>());
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    if (host.current) observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (active === displayed) return;
    let cancelled = false;
    const image = images.current.get(active);
    const ready = async () => {
      try {
        await image?.decode();
      } catch {
        return;
      }
      if (!cancelled) {
        setOutgoing(displayed);
        setDisplayed(active);
      }
    };
    void ready();
    return () => {
      cancelled = true;
    };
  }, [active, displayed, mobile]);
  useEffect(() => {
    if (!outgoing) return;
    const timer = setTimeout(() => setOutgoing(null), 950);
    return () => clearTimeout(timer);
  }, [outgoing, displayed]);
  const index = worlds.findIndex((world) => world.id === active);
  const buffer = new Set([
    active,
    worlds[(index + 1) % worlds.length].id,
    worlds[(index + worlds.length - 1) % worlds.length].id,
    outgoing,
  ]);
  const enabled = playing && !hidden && inView;
  return (
    <div className="hero-backdrop" ref={host} aria-hidden="true">
      {worlds.map((world) => (
        <div
          key={world.id}
          data-world={world.id}
          className={`hero-film-layer ${displayed === world.id ? 'is-displayed' : outgoing === world.id ? 'is-outgoing' : ''}`}
        >
          <div
            className="media"
            style={{ '--subject-position': world.position } as CSSProperties}
          >
            <picture>
              <source
                media="(max-width:768px)"
                srcSet={`/media/${world.poster}-mobile.webp`}
              />
              <img
                ref={(el) => {
                  if (el) images.current.set(world.id, el);
                }}
                src={`/media/${world.poster}.webp`}
                width="1440"
                height="810"
                alt=""
                fetchPriority={world.id === 'creative' ? 'high' : 'low'}
              />
            </picture>
            {enabled && buffer.has(world.id) && (
              <BufferedFilm
                key={`${world.id}-${mobile}`}
                source={`/media/${world.film}${mobile ? '-mobile' : ''}.mp4`}
                playing={displayed === world.id}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
function BufferedFilm({
  source,
  playing,
}: {
  source: string;
  playing: boolean;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (playing) void element.play().catch(() => {});
    else element.pause();
  }, [playing, source]);
  return (
    <video
      key={source}
      ref={video}
      src={source}
      preload="auto"
      muted
      loop
      playsInline
      disablePictureInPicture
      tabIndex={-1}
      className={ready ? 'is-ready' : ''}
      onLoadedData={() => setReady(true)}
      onError={() => setReady(false)}
    />
  );
}
