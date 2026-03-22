const modules = import.meta.glob('../../../static/images/*.webp', { eager: true, query: '?url', import: 'default' });

export const images = Object.entries(modules).map(([path, url]) => {
  const filename = path.split('/').pop() || '';
  return {
    src: `/images/${filename}`,
    title: filename.replace('.webp', '') || '',
    category: filename.includes('mat-bang')
      ? 'mat-bang'
      : filename.includes('vi-tri')
      ? 'vi-tri'
      : filename.includes('tien-ich')
      ? 'tien-ich'
      : 'can-ho',
  };
});

const modulesLaw = import.meta.glob('../../../static/laws/*.webp', { eager: true, query: '?url', import: 'default' });

export const imageLaws = Object.entries(modulesLaw).map(([path, url]) => {
  const filename = path.split('/').pop() || '';
  return {
    src: `/laws/${filename}`,
    title: filename.replace('.webp', '') || '',
  };
});

export type ImageItem = {
  src: string;
  title: string;
  category: "can-ho" | "mat-bang" | "tien-ich" | "vi-tri";
};
