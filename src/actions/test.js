import { TEST } from '../constants';

export function add(n) {
  return {
    type: TEST,
    payload: n
  };
}
