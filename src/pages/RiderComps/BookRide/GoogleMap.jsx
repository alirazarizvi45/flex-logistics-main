import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({
  pickupLocation,
  dropOffLocation,
  onCurrentLocationFound,
  onRouteCalculated,
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [googleLibraries, setGoogleLibraries] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  useEffect(() => {
    const initMap = async () => {
      if (!mapInstanceRef.current) {
        const loader = new Loader({
          apiKey: "AIzaSyC9ExKVrq6j2bhaNnIGzahM9_0i0dGphXQ",
          version: "weekly",
          libraries: ["places", "geometry", "drawing"],
        });

        try {
          const google = await loader.load();
          const { Map } = await google.maps.importLibrary("maps");
          const geocoder = new google.maps.Geocoder();
          const directionsService = new google.maps.DirectionsService();
          const directionsRenderer = new google.maps.DirectionsRenderer();

          mapInstanceRef.current = new Map(mapRef.current, {
            center: { lat: -1.2921, lng: 36.8219 }, // Nairobi coordinates
            zoom: 12,
          });

          setGoogleLibraries({
            google,
            geocoder,
            directionsService,
            directionsRenderer,
          });
          setMapLoaded(true);

          getUserLocation(
            mapInstanceRef.current,
            google.maps.Marker,
            geocoder,
            onCurrentLocationFound
          );
        } catch (error) {
          console.error("Error loading Google Maps:", error);
        }
      }
    };

    initMap();
  }, [onCurrentLocationFound]);

  useEffect(() => {
    if (mapLoaded && googleLibraries) {
      updateMap();
    }
  }, [mapLoaded, googleLibraries, pickupLocation, dropOffLocation]);

  const updateMap = async () => {
    if (!googleLibraries) return;

    const { google, geocoder, directionsService, directionsRenderer } =
      googleLibraries;
    const map = mapInstanceRef.current;

    map.setOptions({ center: { lat: -1.2921, lng: 36.8219 }, zoom: 12 });
    directionsRenderer.setMap(map);
    directionsRenderer.setDirections({ routes: [] });

    if (!pickupLocation && !dropOffLocation) {
      getUserLocation(
        map,
        google.maps.Marker,
        geocoder,
        onCurrentLocationFound
      );
    }

    if (pickupLocation) {
      await geocodeAddress(
        geocoder,
        map,
        pickupLocation,
        "PICKUP",
        google.maps.Marker
      );
    }

    if (dropOffLocation) {
      await geocodeAddress(
        geocoder,
        map,
        dropOffLocation,
        "DROPOFF",
        google.maps.Marker
      );
    }

    if (pickupLocation && dropOffLocation) {
      await calculateAndDisplayRoute(
        directionsService,
        directionsRenderer,
        pickupLocation,
        dropOffLocation
      );
    }
  };
  const getUserLocation = (map, Marker, geocoder, callback) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(userLocation);
          map.setZoom(15);
          new Marker({
            position: userLocation,
            map: map,
            title: "Your Location",
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            },
          });

          geocoder.geocode({ location: userLocation }, (results, status) => {
            if (status === "OK") {
              if (results[0]) {
                if (typeof callback === "function") {
                  callback(results[0].formatted_address);
                } else {
                  console.log("onCurrentLocationFound is not a function");
                }
              } else {
                console.log("No results found for geocoding");
              }
            } else {
              console.log("Geocoder failed due to: " + status);
            }
          });
        },
        (error) => {
          console.log("Error getting user location:", error);
        }
      );
    } else {
      console.log("Geolocation not supported by this browser.");
    }
  };
  const geocodeAddress = (geocoder, map, address, type, Marker) => {
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const location = results[0].geometry.location;
          new Marker({
            map: map,
            position: location,
            label: type,
          });
          map.setCenter(location);
          map.setZoom(15);
          resolve(location);
        } else {
          console.log(
            "Geocode was not successful for the following reason: " + status
          );
          reject(status);
        }
      });
    });
  };

  // const calculateAndDisplayRoute = (
  //   directionsService,
  //   directionsRenderer,
  //   pickupLocation,
  //   dropOffLocation
  // ) => {
  //   return new Promise((resolve, reject) => {
  //     directionsService.route(
  //       {
  //         origin: pickupLocation,
  //         destination: dropOffLocation,
  //         travelMode: google.maps.TravelMode.DRIVING,
  //       },
  //       (response, status) => {
  //         if (status === "OK") {
  //           directionsRenderer.setDirections(response);
  //           resolve();
  //         } else {
  //           console.log("Directions request failed due to " + status);
  //           reject(status);
  //         }
  //       }
  //     );
  //   });

  // };

  const calculateAndDisplayRoute = (
    directionsService,
    directionsRenderer,
    pickupLocation,
    dropOffLocation
  ) => {
    return new Promise((resolve, reject) => {
      directionsService.route(
        {
          origin: pickupLocation,
          destination: dropOffLocation,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(response);
            const route = response.routes[0];
            const distance = route.legs[0].distance.text;
            const duration = route.legs[0].duration.text;
            setDistance(distance);
            setDuration(duration);
            if (onRouteCalculated) {
              onRouteCalculated(distance, duration);
            }
            resolve();
          } else {
            console.log("Directions request failed due to " + status);
            setDistance("");
            setDuration("");
            if (onRouteCalculated) {
              onRouteCalculated("", "");
            }
            reject(status);
          }
        }
      );
    });
  };
  return <div ref={mapRef} style={{ height: "100%", width: "100%" }}></div>;
};

export default GoogleMap;

// import React, { useEffect, useRef, useState } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// const GoogleMap = ({ pickupLocation, dropOffLocation }) => {
//   const mapRef = useRef(null);
//   const mapInstanceRef = useRef(null);
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [googleLibraries, setGoogleLibraries] = useState(null);

//   useEffect(() => {
//     const initMap = async () => {
//       if (!mapInstanceRef.current) {
//         const loader = new Loader({
//           apiKey: "AIzaSyAY14ZGz_5Ojhh50NP8htvFDkyh6Gi7hSw", // Replace with your actual API key
//           version: "weekly",
//           libraries: ["places", "geometry", "drawing"],
//         });

//         try {
//           const google = await loader.load();
//           const { Map } = await google.maps.importLibrary("maps");
//           const geocoder = new google.maps.Geocoder();
//           const directionsService = new google.maps.DirectionsService();
//           const directionsRenderer = new google.maps.DirectionsRenderer();

//           mapInstanceRef.current = new Map(mapRef.current, {
//             center: { lat: -1.2921, lng: 36.8219 }, // Nairobi coordinates
//             zoom: 12,
//           });

//           setGoogleLibraries({
//             google,
//             geocoder,
//             directionsService,
//             directionsRenderer,
//           });
//           setMapLoaded(true);
//         } catch (error) {
//           console.error("Error loading Google Maps:", error);
//         }
//       }
//     };

//     initMap();
//   }, []);

//   useEffect(() => {
//     if (mapLoaded && googleLibraries) {
//       updateMap();
//     }
//   }, [mapLoaded, googleLibraries, pickupLocation, dropOffLocation]);

//   const updateMap = async () => {
//     if (!googleLibraries) return;

//     const { google, geocoder, directionsService, directionsRenderer } =
//       googleLibraries;
//     const map = mapInstanceRef.current;

//     // Clear previous markers and directions
//     map.setOptions({ center: { lat: -1.2921, lng: 36.8219 }, zoom: 12 });
//     directionsRenderer.setMap(map);
//     directionsRenderer.setDirections({ routes: [] });

//     if (!pickupLocation && !dropOffLocation) {
//       getUserLocation(map, google.maps.Marker);
//     }

//     if (pickupLocation) {
//       await geocodeAddress(
//         geocoder,
//         map,
//         pickupLocation,
//         "PICKUP",
//         google.maps.Marker
//       );
//     }

//     if (dropOffLocation) {
//       await geocodeAddress(
//         geocoder,
//         map,
//         dropOffLocation,
//         "DROPOFF",
//         google.maps.Marker
//       );
//     }

//     if (pickupLocation && dropOffLocation) {
//       await calculateAndDisplayRoute(
//         directionsService,
//         directionsRenderer,
//         pickupLocation,
//         dropOffLocation
//       );
//     }
//   };

//   const getUserLocation = (map, Marker) => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           map.setCenter(userLocation);
//           map.setZoom(15);
//           new Marker({
//             position: userLocation,
//             map: map,
//             title: "Your Location",
//           });
//         },
//         () => {
//           console.log("Error getting user location.");
//         }
//       );
//     } else {
//       console.log("Geolocation not supported by this browser.");
//     }
//   };

//   const geocodeAddress = (geocoder, map, address, type, Marker) => {
//     return new Promise((resolve, reject) => {
//       geocoder.geocode({ address: address }, (results, status) => {
//         if (status === "OK") {
//           const location = results[0].geometry.location;
//           new Marker({
//             map: map,
//             position: location,
//             label: type,
//           });
//           map.setCenter(location);
//           map.setZoom(15);
//           resolve(location);
//         } else {
//           console.log(
//             "Geocode was not successful for the following reason: " + status
//           );
//           reject(status);
//         }
//       });
//     });
//   };

//   const calculateAndDisplayRoute = (
//     directionsService,
//     directionsRenderer,
//     pickupLocation,
//     dropOffLocation
//   ) => {
//     return new Promise((resolve, reject) => {
//       directionsService.route(
//         {
//           origin: pickupLocation,
//           destination: dropOffLocation,
//           travelMode: google.maps.TravelMode.DRIVING,
//         },
//         (response, status) => {
//           if (status === "OK") {
//             directionsRenderer.setDirections(response);
//             resolve();
//           } else {
//             console.log("Directions request failed due to " + status);
//             reject(status);
//           }
//         }
//       );
//     });
//   };

//   return <div ref={mapRef} style={{ height: "100%", width: "100%" }}></div>;
// };

// export default GoogleMap;
