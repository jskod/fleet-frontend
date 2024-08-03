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
    <Box maxW="3xl">
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        <Card>
          <CardHeader>
            <Heading as="h4" size="md">
              General Information
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <HStack>
                <Stat>
                  <StatLabel>Hours Operated</StatLabel>
                  <StatNumber>{hoursOperated.toFixed(2)} hrs</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Total Distance</StatLabel>
                  <StatNumber>{totalDistance.toFixed(2)} km</StatNumber>
                </Stat>
              </HStack>
              <HStack>
                <Stat>
                  <StatLabel>Average Speed</StatLabel>
                  <StatNumber>{averageSpeed.toFixed(2)} km/h</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Max Speed</StatLabel>
                  <StatNumber>{maxSpeed} km/h</StatNumber>
                </Stat>
              </HStack>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading as="h4" size="md">
              Tire Pressure
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <HStack>
                <Stat>
                  <StatLabel>Front Left</StatLabel>
                  <StatNumber>
                    {averageTirePressure.frontLeft.toFixed(2)} PSI
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Front Right</StatLabel>
                  <StatNumber>
                    {averageTirePressure.frontRight.toFixed(2)} PSI
                  </StatNumber>
                </Stat>
              </HStack>
              <HStack>
                <Stat>
                  <StatLabel>Rear Left</StatLabel>
                  <StatNumber>
                    {averageTirePressure.rearLeft.toFixed(2)} PSI
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Rear Right</StatLabel>
                  <StatNumber>
                    {averageTirePressure.rearRight.toFixed(2)} PSI
                  </StatNumber>
                </Stat>
              </HStack>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading as="h4" size="md">
              Battery Information
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Stat>
                <StatLabel>Average Battery Voltage</StatLabel>
                <StatNumber>{averageBatteryVoltage.toFixed(2)} V</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Min Battery Voltage</StatLabel>
                <StatNumber>{minBatteryVoltage.toFixed(2)} V</StatNumber>
              </Stat>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading as="h4" size="md">
              Alerts
            </Heading>
          </CardHeader>
          <CardBody>
            <Stat>
              <StatLabel>Alert Count</StatLabel>
              <StatNumber>{alertCount}</StatNumber>
            </Stat>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
};

export default VehicleReportDisplay;
