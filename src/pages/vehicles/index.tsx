import React from "react";
import { Box } from "@chakra-ui/react";
import PageTitle from "../../components/PageTitle.tsx";
import { useFetchVehicles } from "../../hooks/queries/useFetchVehicles.ts";
import VehicleList from "./VehicleList.tsx";
import Loading from "../../components/Loading.tsx";

export default function Vehicles(): React.ReactElement {
  const { data, isLoading } = useFetchVehicles();

  return (
    <Box p={4}>
      <PageTitle mb={4}>Vehicles</PageTitle>

      {isLoading ? <Loading /> : <VehicleList vehicles={data?.data ?? []} />}
    </Box>
  );
}
