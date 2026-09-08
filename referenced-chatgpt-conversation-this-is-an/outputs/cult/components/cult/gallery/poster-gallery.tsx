'use client';

import { ElasticGallery } from '@/components/ui/elastic-gallery';

const collections = [
  {
    name: 'Giallo / In full colour',
    file: 'giallo',
    description: 'Sharp cuts. Loud colour. Nothing accidental.',
    titles: ['Cut through the noise.', 'All eyes on you.', 'Leave a mark.'],
  },
  {
    name: 'Grindhouse / No ordinary ideas',
    file: 'grindhouse',
    description: 'Pulp horror meets independent thinking.',
    titles: ['Kill the ordinary.', 'Make a scene.', 'Dead boring? Not here.'],
  },
  {
    name: 'Brutalist giallo / Under observation',
    file: 'giallo-new',
    description: 'Sharp type. Cut paper. A closer look.',
    titles: ['Watch closely.', 'Cut through.', 'Leave a trace.'],
  },
  {
    name: 'New perspectives / Look again',
    file: 'look-again',
    description: 'A different point of view. Original by design.',
    titles: ['Look again.', 'Break the pattern.', 'Stay strange.'],
  },
];

const posterItems = collections.flatMap((collection, c) =>
  collection.titles.map((title, panel) => ({
    id: `${collection.file}-${panel}`,
    title,
    category: collection.name,
    src: `/artwork/cult/${collection.file}.png`,
    alt: `${title} — CULT. original poster concept`,
    panel,
  })),
);

export function PosterGallery() {
  return (
    <ElasticGallery
      items={posterItems}
      className="cg-elastic elastic-gallery--posters"
      defaultActiveId={posterItems[0]?.id}
      ctaLabel="Print study"
    />
  );
}
