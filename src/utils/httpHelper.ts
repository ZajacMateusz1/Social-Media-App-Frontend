import type { HTTPError } from "./types";

type HttpSuccess<T> = {
  data: T;
  ok: true;
};
type HTTPNotSuccess = {
  data: HTTPError;
  ok: false;
};

type HTTPResult<T> = HttpSuccess<T> | HTTPNotSuccess;

export default async function http<T>(
  url: string,
  options: RequestInit = {},
): Promise<HTTPResult<T>> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const data: HTTPError = await response.json();
      return {
        data,
        ok: false,
      };
    }
    const data: T = await response.json();
    return { data, ok: true };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Network error");
  }
}
