import NearMeIcon from "@mui/icons-material/NearMe";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Input,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

const libraries = ["places"];

function GoogleMapsNew({ onRouteCalculated }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC9ExKVrq6j2bhaNnIGzahM9_0i0dGphXQ", // Replace with your API key
    libraries,
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [pickupLocation, setPickupLocation] = useState({
    lat: null,
    lng: null,
  });

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  // Fetch user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPickupLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          if (originRef.current) {
            originRef.current.value = `${position.coords.latitude}, ${position.coords.longitude}`;
          }
        },
        () => {
          console.error("Error fetching the location");
        }
      );
    }
  }, []);

  if (!isLoaded) {
    return <Skeleton />;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);

    // Trigger the callback with the calculated distance and duration
    if (onRouteCalculated) {
      onRouteCalculated(
        results.routes[0].legs[0].distance.text,
        results.routes[0].legs[0].duration.text
      );
    }
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <Container
      position="relative"
      style={{ height: "100vh", width: "100vw" }}
      alignItems="center"
    >
      <Box position="absolute" left={0} top={0} height="100%" width="100%">
        {/* Google Map Box */}
        <GoogleMap
          center={pickupLocation}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => {
            setMap(map);
            console.log("Map loaded", map);
          }}
        >
          <Marker position={pickupLocation} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minWidth="container.md"
        zIndex="1"
      >
        <Stack spacing={2} justifyContent="space-between">
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type="text"
                placeholder="Pickup Location"
                ref={originRef}
              />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type="text"
                placeholder="Drop Off Location"
                ref={destinationRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label="center back"
              icon={<AccessTimeIcon />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </Stack>
        <Stack spacing={4} mt={4} justifyContent="space-between">
          <Typography sx={{ color: "red" }}>Distance: {distance} </Typography>
          <Typography sx={{ color: "red" }}>Duration: {duration} </Typography>
          <IconButton
            aria-label="center back"
            icon={<NearMeIcon />}
            isRound
            onClick={() => {
              map.panTo(pickupLocation);
              map.setZoom(15);
            }}
          />
        </Stack>
      </Box>
    </Container>
  );
}

export default GoogleMapsNew;
