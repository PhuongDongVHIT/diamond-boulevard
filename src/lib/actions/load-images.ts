const modules = import.meta.glob('/static/images/*.webp', { eager: true });

export const images = Object.entries(modules).map(([path]) => {
  return {
    src: path.replace('/static', ''),
    title: path.split('/').pop()?.replace('.webp', '') || '',
    category: path.includes('mat-bang')
      ? 'mat-bang'
      : path.includes('vi-tri')
      ? 'vi-tri'
      : path.includes('tien-ich')
      ? 'tien-ich'
      : 'can-ho',
  };
});

const modulesLaw = import.meta.glob('/static/laws/*.webp', { eager: true });

export const imageLaws = Object.entries(modulesLaw).map(([path]) => {
  return {
    src: path.replace('/static', ''),
    title: path.split('/').pop()?.replace('.webp', '') || '',
  };
});

export type ImageItem = {
  src: string;
  title: string;
  category: "can-ho" | "mat-bang" | "tien-ich" | "vi-tri";
};
