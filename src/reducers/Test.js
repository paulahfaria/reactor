import { TEST } from '../constants';

export default function (state = 0, action) {
  switch (action.type) {
    case TEST:
      return state + action.payload;
    default:
      return state;
  }
}
