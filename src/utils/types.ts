import { z } from "zod";

export interface HTTPError extends Error {
  message: string;
  status: number;
  details?: z.core.$ZodFormattedError<string, string>;
}
