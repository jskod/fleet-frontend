import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { Vehicle } from "../../types";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../clients/axios.ts";

type RegisterVehicleMutation = Omit<Vehicle, "createdAt" | "_id">;

type RegisterVehicleOptions = UseMutationOptions<
  AxiosResponse<Vehicle>,
  AxiosError,
  RegisterVehicleMutation
>;

export const useRegisterVehicle = (options?: RegisterVehicleOptions) => {
  return useMutation({
    mutationKey: ["registerVehicle"],
    mutationFn: (data: RegisterVehicleMutation) => {
      return axiosInstance.post<Vehicle>("/api/v1/vehicle", data);
    },
    ...options,
  });
};
