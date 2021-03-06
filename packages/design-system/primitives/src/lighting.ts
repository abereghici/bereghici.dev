export const lighting = {
  shadow400: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
  shadow500: '0 2px 8px hsla(0, 0%, 0%, 0.16)',
  shadow600: '0 4px 16px hsla(0, 0%, 0%, 0.16)',
  shadow700: '0 8px 24px hsla(0, 0%, 0%, 0.16)',
  overlay0: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0)',
  overlay100: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)',
  overlay200: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)',
  overlay300: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)',
  overlay400: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)',
  overlay500: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.2)',
  overlay600: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)',
} as const;

export type Lighting = typeof lighting;
