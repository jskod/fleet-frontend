import { useQuery } from "@tanstack/react-query";
import axios from "../../clients/axios.ts";
import { Vehicle } from "../../types";

export const useFetchVehicles = () => {
  return useQuery({
    queryKey: ["vehicles"],
    queryFn: () => {
      return axios.get<Vehicle[]>("/api/v1/vehicle/list");
    },
  });
};
