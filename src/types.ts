import { z } from "zod";

export interface HTTPError extends Error {
  status: number;
  details?: z.core.$ZodFormattedError<string, string>;
}
