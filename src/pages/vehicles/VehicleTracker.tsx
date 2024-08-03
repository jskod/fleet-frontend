import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useFetchVehicleLiveLocation } from "../../hooks/queries/useFetchVehicleLiveLocation.ts";
import { Box, Text } from "@chakra-ui/react";
import PageTitle from "../../components/PageTitle.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function VehicleTracker() {
  const { vehicleId } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  // just mocking vehicleId; not used as we are using
  const { data } = useFetchVehicleLiveLocation({
    vehicleId: vehicleId as string,
    isVisible,
  });

  if (!data) {
    return null;
  }

  const position: LatLngExpression = [data.data.latitude, data.data.longitude];

  return (
    <Box p={4}>
      <PageTitle mb={4}>Live Tracking - Vehicle ({vehicleId})</PageTitle>
      <Box h={"100dvh"} w={"100%"}>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              <Box>
                <Text>Status: {data.data.status}</Text>
                <Text>
                  Vehicle is here: {data.data.latitude.toFixed(4)},
                  {data.data.longitude.toFixed(4)}
                </Text>
              </Box>
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
}
