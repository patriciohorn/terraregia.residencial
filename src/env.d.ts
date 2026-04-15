/// <reference path="../.astro/types.d.ts" />

declare module "@storyblok/astro" {
  export function useStoryblokApi(): any;
  export function storyblokEditable(blok: any): Record<string, any>;
  export function renderRichText(doc: any): string;
}

declare module "@storyblok/astro/StoryblokComponent.astro" {
  const component: any;
  export default component;
}

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void;
  }
}

export {};
