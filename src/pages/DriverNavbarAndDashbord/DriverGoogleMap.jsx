import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const DriverGoogleMap = ({ pickupLocation }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const [driverLocation, setDriverLocation] = useState(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyAY14ZGz_5Ojhh50NP8htvFDkyh6Gi7hSw",
        version: "weekly",
        libraries: ["places"],
      });

      try {
        const google = await loader.load();
        const { Map, Marker } = await google.maps.importLibrary("maps");

        mapInstanceRef.current = new Map(mapRef.current, {
          center: { lat: -1.2921, lng: 36.8219 }, // Default to Nairobi
          zoom: 12,
        });

        // Get driver's current location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const driverPos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              setDriverLocation(driverPos);
              mapInstanceRef.current.setCenter(driverPos);
              mapInstanceRef.current.setZoom(15);

              // Create a marker for the driver's location
              markerRef.current = new Marker({
                position: driverPos,
                map: mapInstanceRef.current,
                title: "Your Location",
                icon: {
                  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                },
              });
            },
            (error) => {
              console.error("Error getting driver's location:", error);
            }
          );
        } else {
          console.warn("Geolocation is not supported by this browser.");
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, []);

  useEffect(() => {
    if (mapInstanceRef.current && pickupLocation) {
      // Update map to show rider's pickup location
      const pickup = new google.maps.LatLng(
        pickupLocation.lat,
        pickupLocation.lng
      );

      // Create or update marker for rider's pickup location
      if (markerRef.current) {
        markerRef.current.setPosition(pickup);
      } else {
        markerRef.current = new google.maps.Marker({
          position: pickup,
          map: mapInstanceRef.current,
          title: "Rider Pickup Location",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
          },
        });
      }

      // Fit bounds to include both driver and rider locations
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(pickup);
      if (driverLocation) {
        bounds.extend(
          new google.maps.LatLng(driverLocation.lat, driverLocation.lng)
        );
      }
      mapInstanceRef.current.fitBounds(bounds);
    }
  }, [pickupLocation, driverLocation]);

  return <div ref={mapRef} style={{ height: "100%", width: "100%" }}></div>;
};

export default DriverGoogleMap;
