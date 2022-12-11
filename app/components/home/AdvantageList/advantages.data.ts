import { AVAILABLE_COLOR } from '@/utils/color';
import maxPossibility from '../assets/maxPossibility.svg';
import minTime from '../assets/minTime.svg';
import perfectDesign from '../assets/perfectDesign.svg';
import { Advantage } from './AdvantageItem';

export const advantages: Advantage[] = [
  {
    src: minTime,
    title: 'Минимум времени',
    desc: 'Вам не нужно тратить время, чтобы отформатировать документ.',
    color: ''
  },
  {
    src: perfectDesign,
    title: 'Отличный дизайн',
    desc: 'Большой ассортимент шаблонов на любой вкус и цвет!',
    color: AVAILABLE_COLOR.primary
  },
  {
    src: maxPossibility,
    title: 'Максимум возможностей',
    desc: 'Присутствует все то, что необходимо для Вас работодателю.',
    color: ''
  }
];
