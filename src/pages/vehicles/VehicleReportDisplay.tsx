import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  HStack,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { TrackingReport } from "../../types";

const VehicleReportDisplay = ({
  hoursOperated,
  totalDistance,
  averageSpeed,
  maxSpeed,
  averageTirePressure,
  averageBatteryVoltage,
  minBatteryVoltage,
  alertCount,
}: TrackingReport) => {
  return (
    <Box>
      <Grid templateColumns={{ md: "1fr 1fr 1fr 1fr" }} gap={4}>
        <Card>
          <CardHeader pb={0}>
            <Heading as="h4" size="xs">
              General Information
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <HStack>
                <Stat>
                  <StatLabel>Hours Operated</StatLabel>
                  <StatNumber fontSize={"lg"}>
                    {hoursOperated.toFixed(2)} hrs
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Total Distance</StatLabel>
                  <StatNumber fontSize={"lg"}>
                    {totalDistance.toFixed(2)} km
                  </StatNumber>
                </Stat>
              </HStack>
              <HStack>
                <Stat>
                  <StatLabel>Average Speed</StatLabel>
                  <StatNumber fontSize={"lg"}>
                    {averageSpeed.toFixed(2)} km/h
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Max Speed</StatLabel>
                  <StatNumber fontSize={"lg"}>{maxSpeed} km/h</StatNumber>
                </Stat>
              </HStack>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader pb={0}>
            <Heading as="h4" size="xs">
              Tire Pressure
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <HStack>
                <Stat>
                  <StatLabel>Front Left</StatLabel>
                  <StatNumber fontSize={"lg"}>
                    {averageTirePressure.frontLeft.toFixed(2)} PSI
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Front Right</StatLabel>
                  <StatNumber fontSize={"lg"}>
                    {averageTirePressure.frontRight.toFixed(2)} PSI
                  </StatNumber>
                </Stat>
              </HStack>
              <HStack>
                <Stat>
                  <StatLabel>Rear Left</StatLabel>
                  <StatNumber fontSize={"lg"}>
                    {averageTirePressure.rearLeft.toFixed(2)} PSI
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Rear Right</StatLabel>
                  <StatNumber fontSize={"lg"}>
                    {averageTirePressure.rearRight.toFixed(2)} PSI
                  </StatNumber>
                </Stat>
              </HStack>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader pb={0}>
            <Heading as="h4" size="xs">
              Battery Information
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Stat>
                <StatLabel>Average Battery Voltage</StatLabel>
                <StatNumber fontSize={"lg"}>
                  {averageBatteryVoltage.toFixed(2)} V
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Min Battery Voltage</StatLabel>
                <StatNumber fontSize={"lg"}>
                  {minBatteryVoltage.toFixed(2)} V
                </StatNumber>
              </Stat>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader pb={0}>
            <Heading as="h4" size="xs">
              Alerts
            </Heading>
          </CardHeader>
          <CardBody>
            <Stat>
              <StatLabel>Alert Count</StatLabel>
              <StatNumber fontSize={"lg"}>{alertCount}</StatNumber>
            </Stat>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
};

export default VehicleReportDisplay;
