import { Lesson } from '../types';
import { LESSONS_ZERO } from './lessons/lessonsZero';
import { LESSONS_LARAVEL } from './lessons/lessonsLaravel';
import { LESSONS_REACT } from './lessons/lessonsReact';
import { LESSONS_INERTIA } from './lessons/lessonsInertia';
import { LESSONS_NEST } from './lessons/lessonsNest';
import { LESSONS_FULLSTACK_OTHER } from './lessons/lessonsFullstackOther';

export const LESSONS_DATA: Record<string, Lesson> = {
  ...LESSONS_ZERO,
  ...LESSONS_LARAVEL,
  ...LESSONS_REACT,
  ...LESSONS_INERTIA,
  ...LESSONS_NEST,
  ...LESSONS_FULLSTACK_OTHER
};
