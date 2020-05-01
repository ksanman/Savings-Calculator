export class Saving {
  constructor(savingPercentage: number) {
    this.value = savingPercentage / 100;
  }

  get name(): string {
    return (this.value * 100).toFixed(0) + '%';
  }

  private value: number;

  getSaved(amount: number): number {
    return amount * this.value;
  }

  getLeftOver(amount: number): number {
    return amount * (1 - this.value);
  }
}