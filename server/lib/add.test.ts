import { it, expect, describe } from 'vitest';
import { add } from './add';

describe('yeet', () => {
  it('add', () => {
    const numberOne = 1;
    const numbeTwo = 1;
    expect(add(numberOne, numbeTwo)).toBe(2);
  });
  it('add2', () => {
    const numberOne = 1;
    const numbeTwo = 1;
    expect(add(numberOne, numbeTwo)).toBe(3);
  });
});
