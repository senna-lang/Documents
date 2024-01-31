import { atom } from 'recoil';

export const isMutatingState = atom({
  key: 'isMutatingState',
  default: true,
});