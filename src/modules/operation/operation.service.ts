export class OperationService {
  adition(a: number, b: number): number {
    return a + b;
  }

  substraction(a: number, b: number): number {
    return a - b;
  }

  product(a: number, b: number): number {
    return a * b;
  }

  division(a: number, b: number): number {
    if (b === 0) {
      throw new Error("El segundo numero debe ser diferente a 0");
    }

    return a / b;
  }
}