import React from "react";
import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import PageTitle from "../../components/PageTitle.tsx";
import { NavLink, useParams } from "react-router-dom";
import { useFetchVehicleReport } from "../../hooks/queries/useFetchVehicleReport.ts";
import VehicleReportDisplay from "./VehicleReportDisplay.tsx";
import { useFetchMaintenanceLogs } from "../../hooks/queries/useFetchMaintenanceLogs.ts";
import MaintenanceLogsList from "./MaintenanceLogsList.tsx";
import { routes } from "../../router.tsx";
import { PlusIcon } from "lucide-react";

export default function ViewVehicleDetail(): React.ReactElement {
  const { vehicleId } = useParams();

  const { data: report, isLoading: isLoadingReport } = useFetchVehicleReport({
    vehicleId: vehicleId as string,
  });

  const { data: logs, isLoading: isLoadingLogs } = useFetchMaintenanceLogs({
    vehicleId: vehicleId as string,
  });

  return (
    <Box p={4}>
      <PageTitle mb={4}>Vehicle Details</PageTitle>

      <Box
        p={4}
        boxShadow={"sm"}
        borderRadius={4}
        borderColor={"gray.200"}
        borderWidth={1}
      >
        <Text mb={4} fontWeight={"bold"}>
          Tracking Report
        </Text>
        {report?.data ? (
          <VehicleReportDisplay {...report?.data} />
        ) : isLoadingReport ? (
          <Text>Loading Report</Text>
        ) : (
          <Text>No Report Available</Text>
        )}
      </Box>

      <Box
        p={4}
        mt={8}
        boxShadow={"sm"}
        borderRadius={4}
        borderColor={"gray.200"}
        borderWidth={1}
      >
        <Flex justifyContent={"space-between"}>
          <Text mb={4} fontWeight={"bold"}>
            Maintenance Logs
          </Text>
          <Box>
            <NavLink
              to={routes.CreateMaintenanceLog.replace(
                ":vehicleId",
                vehicleId as string,
              )}
            >
              <Button size={"xs"} aria-label={"Create Maintenance Log"}>
                <HStack>
                  <Icon as={PlusIcon} />
                  <Text>Add new log</Text>
                </HStack>
              </Button>
            </NavLink>
          </Box>
        </Flex>
        {logs?.data ? (
          <MaintenanceLogsList logs={logs?.data} />
        ) : isLoadingLogs ? (
          <Text>Loading Logs</Text>
        ) : (
          <Text>No Logs Available</Text>
        )}
      </Box>
    </Box>
  );
}
