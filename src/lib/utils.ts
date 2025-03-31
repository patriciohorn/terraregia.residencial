import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sluglify(text: string) {
  return text.replace(/\s+/g, '-');
}

export function unslugify(text: string) {
  return text.replace(/-/g, '');
}

export function formatCurrency(text: string) {
  return text.replace(/[$,]/g, '');
}

export function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function isPreview() {
  return import.meta.env.STORYBLOK_IS_PREVIEW === 'yes';
}
