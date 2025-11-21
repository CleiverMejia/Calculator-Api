import { OperationService } from "../operation.service";

describe("OperationService", () => {
  let operationService: OperationService;

  beforeEach(() => {
    operationService = new OperationService();
  });

  describe("adition", () => {
    it("should return the sum of two numbers", () => {
      const result = operationService.adition(2, 3);
      expect(result).toBe(5);
    });
  });

  describe("substraction", () => {
    it("should return the difference of two numbers", () => {
      const result = operationService.substraction(5, 3);
      expect(result).toBe(2);
    });
  });

  describe("product", () => {
    it("should return the product of two numbers", () => {
      const result = operationService.product(4, 3);
      expect(result).toBe(12);
    });
  });

  describe("division", () => {
    it("should return the quotient of two numbers", () => {
      const result = operationService.division(10, 2);
      expect(result).toBe(5);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => operationService.division(10, 0)).toThrow(
        "El segundo numero debe ser diferente a 0"
      );
    });
  });
});