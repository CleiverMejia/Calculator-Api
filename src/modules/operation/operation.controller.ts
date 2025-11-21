import type { Request, Response } from "express";
import { OperationService } from "./operation.service";

export class OperationController {
  constructor(private operationService = new OperationService()) {}

  adition = (req: Request, res: Response): void => {
    if (!req.body || !req.body.a || !req.body.b) {
      res.status(400).json({
        success: false,
        error: "Bad request",
      });

      return;
    }

    const { a, b } = req.body;
    const result = this.operationService.adition(+a, +b);

    res.status(200).json({
      success: true,
      result: result,
    });
  };

  substraction = (req: Request, res: Response): void => {
    if (!req.body || !req.body.a || !req.body.b) {
      res.status(400).json({
        success: false,
        error: "Bad request",
      });

      return;
    }

    const { a, b } = req.body;
    const result = this.operationService.substraction(+a, +b);

    res.status(200).json({
      success: true,
      result: result,
    });
  };

  product = (req: Request, res: Response): void => {
    if (!req.body || !req.body.a || !req.body.b) {
      res.status(400).json({
        success: false,
        error: "Bad request",
      });

      return;
    }

    const { a, b } = req.body;
    const result = this.operationService.product(+a, +b);

    res.status(200).json({
      success: true,
      result: result,
    });
  };

  division = (req: Request, res: Response): void => {
    if (!req.body || !req.body.a || !req.body.b) {
      res.status(400).json({
        success: false,
        error: "Bad request",
      });

      return;
    }

    try {
      const { a, b } = req.body;
      const result = this.operationService.division(+a, +b);

      res.status(200).json({
        success: true,
        result: result,
      });
    } catch {
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  };
}
