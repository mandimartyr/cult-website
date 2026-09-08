from pathlib import Path
p=Path('outputs/cult/components/cult/sections.tsx');s=p.read_text()
s=s.replace('Scattered <br />\n        channels are <br />\n        <Period text="not a strategy." />','<span>Scattered channels</span> <span>are</span> <strong><Period text="not a strategy." /></strong>')
s=s.replace('<div className="story-media">\n            <Media poster={w.poster} film={w.film} position={w.position} />\n          </div>','''<div className="story-media">
            {w.id === 'creative' && <Media poster="creative-study-a" position="75% center" />}
            <Media poster={w.poster} film={w.film} position={w.position} />
            {w.id === 'creative' && <Media poster="creative-study-b" position="80% center" />}
          </div>''')
s=s.replace('<article className="engagement" key={e.name}>','<article className={`engagement engagement-${e.image}`} key={e.name}>')
s=s.replace("film={e.name === 'Partner' ? 'partner' : undefined}", 'film={e.image} position="70% center"')
s=s.replace('<p className="engagement-number">{e.number}</p>\n            <h3>', '<div className="engagement-title"><p className="engagement-number">{e.number}</p>\n            <h3>')
s=s.replace('</h3>\n            <p className="engagement-lead">', '</h3></div>\n            <div className="engagement-decision"><p className="engagement-lead">')
s=s.replace('{e.cta}\n            </Action>', '{e.cta}\n            </Action></div>')
s=s.replace('<span className="project-corner corner-one" aria-hidden="true" />\n              <span className="project-corner corner-two" aria-hidden="true" />','')
s=s.replace('<Period text="Senior thinking stays close to the work." />','<strong>Senior thinking</strong> <span><Period text="stays close to the work." /></span>')
s=s.replace('<Period text="Make your marketing work like one business." />','<span>Make your marketing work</span> <span><Period text="like one business." /></span>')
p.write_text(s)
p=Path('outputs/cult/lib/content.ts');s=p.read_text()
for name in ['strategy','search','measurement']:s=s.replace(f"poster: '{name}',",f"poster: '{name}',\n    film: '{name}',")
s=s.replace("position: 'center',\n  },\n];", "position: '15% center',\n  },\n];")
p.write_text(s)
for name in ['services','about']:
 p=Path(f'outputs/cult/app/{name}/page.tsx');s=p.read_text().replace('className="inner-page"',f'className="inner-page {name}-page"')
 if name=='services':s=s.replace('One strategy.\n            <br />','<strong>One strategy.</strong>').replace('<Period text="The right channels." />','<span><Period text="The right channels." /></span>')
 else:s=s.replace('Founder-led\n            <br />','<strong>Founder-led</strong>').replace('<Period text="by design." />','<span><Period text="by design." /></span>')
 p.write_text(s)
p=Path('outputs/cult/app/contact/page.tsx');s=p.read_text().replace('className="inner-page"','className="inner-page contact-page"');p.write_text(s)
p=Path('outputs/cult/components/cult/hero.tsx');s=p.read_text().replace("import { useState } from 'react';","import { useEffect, useRef, useState } from 'react';")
s=s.replace("  const [active, setActive]", "  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);\n  const cancelHover = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); };\n  useEffect(() => () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); }, []);\n  const [active, setActive]")
s=s.replace("if (matchMedia('(hover: hover)').matches) select(w.id);", "cancelHover();\n                if (matchMedia('(hover: hover)').matches) hoverTimer.current = setTimeout(() => select(w.id), 160);")
s=s.replace('onMouseEnter={() => {', 'onMouseLeave={cancelHover}\n              onPointerDown={cancelHover}\n              onMouseEnter={() => {')
p.write_text(s)
