import {
  Badge,
  HStack,
  Icon,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { EyeIcon, ScrollTextIcon } from "lucide-react";
import { Vehicle } from "../../types";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router.tsx";

type VehicleListProps = {
  vehicles: Vehicle[];
};

export default function VehicleList({ vehicles }: VehicleListProps) {
  const navigate = useNavigate();

  return (
    <TableContainer>
      <Table size={"sm"}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Model</Th>
            <Th>Type</Th>
            <Th>Status</Th>
            <Th>Created At</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {vehicles.map((vehicle) => (
            <Tr key={vehicle.vin}>
              <Td>
                <Text fontWeight={"bold"}>{vehicle.vin}</Text>
              </Td>
              <Td>{vehicle.model}</Td>
              <Td>
                <Badge colorScheme={"blue"}>{vehicle.type}</Badge>
              </Td>
              <Td>
                <Badge
                  colorScheme={vehicle.status === "active" ? "green" : "red"}
                >
                  {vehicle.status}
                </Badge>
              </Td>
              <Td>{new Date(vehicle.createdAt).toDateString()}</Td>
              <Td>
                <HStack>
                  <Tooltip label={"View Information"}>
                    <IconButton size={"xs"} aria-label={"View Information"}>
                      <Icon as={EyeIcon} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip label={"Create Maintenance Log"}>
                    <IconButton
                      onClick={() => {
                        navigate(
                          routes.CreateMaintenanceLog.replace(
                            ":vehicleId",
                            vehicle._id,
                          ),
                        );
                      }}
                      size={"xs"}
                      aria-label={"Create Maintenance Log"}
                    >
                      <Icon as={ScrollTextIcon} />
                    </IconButton>
                  </Tooltip>
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
