import { useQuery } from "@tanstack/react-query";
import axios from "../../clients/axios.ts";
import { TrackingReport } from "../../types";

type FetchVehicleReportOptions = {
  vehicleId: string;
};

export const useFetchVehicleReport = ({
  vehicleId,
}: FetchVehicleReportOptions) => {
  return useQuery({
    queryKey: ["vehiclesReport", vehicleId],
    queryFn: () => {
      return axios.get<TrackingReport>(`/api/v1/tracking/report/${vehicleId}`);
    },
  });
};
