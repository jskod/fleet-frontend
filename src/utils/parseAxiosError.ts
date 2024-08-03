import { AxiosError } from "axios";

export const parseAxiosError = (error: AxiosError | any) => {
  if (error instanceof AxiosError) {
    return (error?.response?.data as any)?.message || error.message;
  }

  return error?.message;
};
