import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

const animationCurves = {
  EASE_BASE_OUT: 'cubic-bezier(0.7, 0.3, 0.1, 1)',
  EASE_BASE_IN: 'cubic-bezier(0.9, 0, 0.3, 0.7)',
  EASE_OUT: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  EASE_IN: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  EASE_IN_OUT: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  EASE_OUT_BACK: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  EASE_IN_BACK: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  EASE_IN_OUT_BACK: 'cubic-bezier(0.71, -0.46, 0.29, 1.46)',
  EASE_OUT_CIRC: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  EASE_IN_CIRC: 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
  EASE_IN_OUT_CIRC: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  EASE_OUT_QUINT: 'cubic-bezier(0.23, 1, 0.32, 1)',
  EASE_IN_QUINT: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  EASE_IN_OUT_QUINT: 'cubic-bezier(0.86, 0, 0.07, 1)'
};

export const collapseMotion: AnimationTriggerMetadata = trigger('collapseMotion', [
  state('expanded', style({ 'max-height': '*' })),
  state('collapsed', style({ 'max-height': 0, overflow: 'hidden' })),
  state('hidden', style({ 'max-height': 0, overflow: 'hidden', borderTopWidth: '0' })),
  transition('expanded => collapsed', animate(`150ms ${animationCurves.EASE_IN_OUT}`)),
  transition('expanded => hidden', animate(`150ms ${animationCurves.EASE_IN_OUT}`)),
  transition('collapsed => expanded', animate(`150ms ${animationCurves.EASE_IN_OUT}`)),
  transition('hidden => expanded', animate(`150ms ${animationCurves.EASE_IN_OUT}`))
]);
