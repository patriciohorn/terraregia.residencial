import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getCollection } from 'astro:content';
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

export const getTipos = async () => {
  const projects = await getCollection('project');
  const tipos = new Set(projects.map((project: any) => project.data.tipo));
  return Array.from(tipos);
};

export const getUbicaciones = async () => {
  const projects = await getCollection('project');
  const ubicaciones = new Set(projects.map((project) => project.data.location));
  return Array.from(ubicaciones);
};

export const getCostos = async () => {
  const projects = await getCollection('project');
  const costos = new Set(projects.map((project) => project.data.presupuesto));
  return Array.from(costos);
};

export const getProjects = async () => {
  const projects = await getCollection('project');
  return projects;
};
