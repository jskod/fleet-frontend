import React from "react";
import { Box, Text } from "@chakra-ui/react";
import PageTitle from "../../components/PageTitle.tsx";
import { useParams } from "react-router-dom";
import { useFetchVehicleReport } from "../../hooks/queries/useFetchVehicleReport.ts";
import VehicleReportDisplay from "./VehicleReportDisplay.tsx";

export default function ViewVehicleDetail(): React.ReactElement {
  const { vehicleId } = useParams();

  const { data, isLoading } = useFetchVehicleReport({
    vehicleId: vehicleId as string,
  });

  return (
    <Box p={4}>
      <PageTitle mb={4}>Vehicle Details</PageTitle>

      <Box>
        {data?.data ? (
          <VehicleReportDisplay {...data?.data} />
        ) : isLoading ? (
          <Text>Loading Report</Text>
        ) : (
          <Text>No Report Available</Text>
        )}
      </Box>
    </Box>
  );
}
