import {
  Badge,
  Icon,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { EditIcon } from "lucide-react";
import { Vehicle } from "../../types";

type VehicleListProps = {
  vehicles: Vehicle[];
};

export default function VehicleList({ vehicles }: VehicleListProps) {
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
                <IconButton size={"xs"} aria-label={"Edit project"}>
                  <Icon as={EditIcon} />
                </IconButton>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
