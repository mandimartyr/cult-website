"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./elastic-gallery.css";

export type ElasticItemProps = {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  href?: string;
  /** Triptych panel index (0–2) — crops vertical poster from CULT. sheets */
  panel?: number;
};

export type ElasticGalleryProps = {
  items: ElasticItemProps[];
  className?: string;
  defaultActiveId?: string;
  ctaLabel?: string;
};

export function ElasticGallery({
  items,
  className,
  defaultActiveId,
  ctaLabel = "Explore study",
}: ElasticGalleryProps) {
  const [activeId, setActiveId] = useState(
    () => defaultActiveId ?? items[0]?.id ?? "",
  );

  if (!items.length) return null;

  return (
    <div
      className={cn("elastic-gallery", className)}
      role="list"
      aria-label="Gallery"
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        const isPanel = typeof item.panel === "number";

        const activeBody = (
          <>
            <p className="elastic-gallery__category">{item.category}</p>
            <h3 className="elastic-gallery__title">{item.title}</h3>
            
            {item.href && (
              <span className="elastic-gallery__cta">
                {ctaLabel}
                <ArrowUpRight
                  aria-hidden="true"
                  className="elastic-gallery__cta-icon"
                />
              </span>
            )}
          </>
        );

        return (
          <article
            key={item.id}
            role="listitem"
            className={cn(
              "elastic-gallery__card rounded-none",
              isActive ? "is-active flex-[4]" : "flex-[1]",
              isPanel && "elastic-gallery__card--panel",
            )}
            style={{ flexGrow: isActive ? 4 : 1, flexShrink: 1, flexBasis: 0 }}
            onMouseEnter={() => setActiveId(item.id)}
            onFocus={() => setActiveId(item.id)}
            onClick={() => setActiveId(item.id)}
            tabIndex={0}
            aria-current={isActive ? "true" : undefined}
          >
            {isPanel ? (
              <span
                className="elastic-gallery__panel"
                style={
                  { "--panel": item.panel } as React.CSSProperties
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1536}
                  height={1024}
                  className={cn(
                    "elastic-gallery__panel-img",
                    isActive ? "is-lit" : "is-dim",
                  )}
                  loading={item.id === items[0]?.id ? "eager" : "lazy"}
                />
              </span>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                sizes={
                  isActive
                    ? "(max-width: 768px) 100vw, 55vw"
                    : "(max-width: 768px) 100vw, 12vw"
                }
                className={cn(
                  "elastic-gallery__image object-cover",
                  isActive ? "brightness-100" : "brightness-50",
                )}
                priority={item.id === items[0]?.id}
              />
            )}
            <div className="elastic-gallery__scrim" aria-hidden="true" />

            {isActive ? (
              item.href ? (
                <Link
                  href={item.href}
                  className="elastic-gallery__active"
                  aria-label={`${ctaLabel} ${item.title}`}
                >
                  {activeBody}
                </Link>
              ) : (
                <div className="elastic-gallery__active">{activeBody}</div>
              )
            ) : (
              <p className="elastic-gallery__rail" aria-hidden="true">
                {item.title}
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}
