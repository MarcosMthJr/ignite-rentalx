import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImporteCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  async handle(resquest: Request, response: Response): Promise<Response> {
    const { file } = resquest;
    const importCategoryUseCase = container.resolve(ImporteCategoryUseCase);
    await importCategoryUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
