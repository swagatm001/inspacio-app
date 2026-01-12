import { useEffect, useRef } from "react";

type Props = {
  map: google.maps.Map | null;
  content?: HTMLElement;
};

export default function AdvancedMarker({
  map,
  content,
}: Props): null {
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  useEffect(() => {
    if (!map || !window.google) return;

    const service = new window.google.maps.places.PlacesService(
    map
  );

     service.getDetails(
    {
      placeId: "ChIJD161zZcXrjsRu2_IdCjZctY",
      fields: ["name", "geometry"],
    },
    (
      place: google.maps.places.PlaceResult | null,
      status: google.maps.places.PlacesServiceStatus
    ) => {
        
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        place?.geometry?.location
      ) {
        markerRef.current =
          new window.google.maps.marker.AdvancedMarkerElement({
            map: map,
            position: place.geometry.location,
            title: place.name,
          });
        map?.setCenter(place.geometry.location);
      }
    }
  );

    return () => {
      markerRef.current = null; // ✅ cleanup
    };
  }, [map, content]);

  return null; // 👈 markers don’t render JSX
}
