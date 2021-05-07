import { Request, Response } from "express";

import { ImporteCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImporteCategoryUseCase) {}
  handle(resquest: Request, response: Response): Response {
    const { file } = resquest;
    this.importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
