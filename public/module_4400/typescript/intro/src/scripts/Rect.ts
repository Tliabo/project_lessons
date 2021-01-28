class Rect extends Point {
  w: number = 0;
  h: number = 0;

  constructor(pX: number, pY: number, pW: number, pH: number) {
    super(pX, pY);
    this.w = pW;
    this.h = pH;
  }
}