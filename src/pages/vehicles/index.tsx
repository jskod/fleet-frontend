import React from "react";
import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import PageTitle from "../../components/PageTitle.tsx";
import { useFetchVehicles } from "../../hooks/queries/useFetchVehicles.ts";
import VehicleList from "./VehicleList.tsx";
import Loading from "../../components/Loading.tsx";
import { routes } from "../../router.tsx";
import { NavLink } from "react-router-dom";
import { PlusIcon } from "lucide-react";

export default function Vehicles(): React.ReactElement {
  const { data, isLoading } = useFetchVehicles();

  return (
    <Box p={4}>
      <PageTitle mb={4} hideBackButton>
        Vehicles
      </PageTitle>

      <Flex mb={4} justifyContent="flex-end">
        <NavLink to={routes.RegisterVehicle}>
          <Button size={"sm"}>
            <HStack>
              <Icon as={PlusIcon} />
              <Text>Register new vehicle</Text>
            </HStack>
          </Button>
        </NavLink>
      </Flex>

      {isLoading ? <Loading /> : <VehicleList vehicles={data?.data ?? []} />}
    </Box>
  );
}
