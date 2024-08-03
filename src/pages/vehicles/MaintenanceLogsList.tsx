import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { MaintenanceLog } from "../../types";

type MaintenanceLogsListProps = {
  logs: MaintenanceLog[];
};

const MaintenanceLogsList = ({ logs }: MaintenanceLogsListProps) => {
  return (
    <TableContainer overflowX={"scroll"}>
      <Table size={"sm"}>
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Date</Th>
            <Th>Cost ($)</Th>
            <Th>Mileage at Service</Th>
            <Th>Performed By</Th>
          </Tr>
        </Thead>
        <Tbody>
          {logs?.map((log) => (
            <Tr key={log._id}>
              <Td maxW={"md"}>
                <Text>{log.description}</Text>
              </Td>
              <Td>{new Date(log.date).toLocaleDateString()}</Td>
              <Td>{log.cost.toFixed(2)}</Td>
              <Td>{log.mileageAtService}</Td>
              <Td>{log.performedBy}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MaintenanceLogsList;
