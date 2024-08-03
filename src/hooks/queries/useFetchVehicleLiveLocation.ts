import { useQuery } from "@tanstack/react-query";
import axios from "../../clients/axios.ts";
import { VehicleLocation } from "../../types";

type FetchVehicleLiveLocation = {
  isVisible: boolean;
  vehicleId: string;
};

export const useFetchVehicleLiveLocation = ({
  isVisible,
  vehicleId,
}: FetchVehicleLiveLocation) => {
  return useQuery({
    queryKey: ["vehicleLiveLocation", vehicleId],
    queryFn: () => {
      return axios.get<VehicleLocation>(`/api/v1/tracking/live/${vehicleId}`);
    },
    enabled: isVisible,
    refetchInterval: isVisible ? 5000 : false,
  });
};
