import manifest from "./photos-manifest.json";

export function getPhotos() {
  return manifest;
}

export function sampleEven<T>(items: T[], count: number): T[] {
  if (items.length <= count) return items;
  const step = items.length / count;
  return Array.from({ length: count }, (_, i) => items[Math.floor(i * step)]);
}
