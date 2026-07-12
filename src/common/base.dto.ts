import { z } from "zod";

export default class BaseDto {
  static validate<T extends z.ZodTypeAny>(
    schema: T,
    data: unknown,
  ): z.infer<T> {
    return schema.parse(data);
  }
}
