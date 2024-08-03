import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { MaintenanceLog } from "../../types";
import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../clients/axios.ts";

type CreateMaintenanceLogMutation = Omit<MaintenanceLog, "_id">;

type CreateMaintenanceLogOptions = UseMutationOptions<
  AxiosResponse<MaintenanceLog>,
  AxiosError,
  CreateMaintenanceLogMutation
>;

export const useCreateMaintenanceLog = (
  options?: CreateMaintenanceLogOptions,
) => {
  return useMutation({
    mutationKey: ["registerVehicle"],
    mutationFn: (data: CreateMaintenanceLogMutation) => {
      return axiosInstance.post<MaintenanceLog>("/api/v1/vehicle/log", data);
    },
    ...options,
  });
};
