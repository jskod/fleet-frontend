import { useQuery } from "@tanstack/react-query";
import axios from "../../clients/axios.ts";
import { MaintenanceLog } from "../../types";

type FetchMaintenanceLogs = {
  vehicleId: string;
};

export const useFetchMaintenanceLogs = ({
  vehicleId,
}: FetchMaintenanceLogs) => {
  return useQuery({
    queryKey: ["vehicleMaintenanceLogs", vehicleId],
    queryFn: () => {
      return axios.get<MaintenanceLog[]>(`/api/v1/vehicle/log/${vehicleId}`);
    },
  });
};
