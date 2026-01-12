"use client";

import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader, InfoWindow, } from "@react-google-maps/api";
import AdvancedMarker from "./AdvancedMarker";


export const ContactMap: React.FC = () => {

  const apiKeyToUse = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  // Load both the marker and places libraries: AdvancedMarkerElement requires 'marker',
  // PlacesService requires 'places'. Without 'places' the service.getDetails call fails
  // and the advanced marker never gets created.
  const { isLoaded, loadError } = useJsApiLoader({ googleMapsApiKey: apiKeyToUse, libraries: ['marker', 'places'] });
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || undefined;
  const [showInfo, setShowInfo] = React.useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const mapRef = React.useRef<google.maps.Map | null>(null);
  const markerRef = React.useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );


  if (loadError) return <div className="text-sm text-red-600">Map failed to load</div>;
  if (!isLoaded) return <div className="text-sm">Loading map...</div>;

  const mapCenter = { lat: 12.98339723305194, lng: 77.60063810988633 };
  // responsive aspect ratio: 16:9 on desktop, 4:8 on mobile


  return (
    <div className="border border-2 border-[#885739] w-full rounded-2xl overflow-hidden mb-5 h-[400px]">
      <GoogleMap
        onLoad={(m: google.maps.Map) => { mapRef.current = m; setMap(m); }}
        onUnmount={() => { mapRef.current = null; setMap(null); }}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={mapCenter}
        zoom={26}
        // `mapId` enables vector map features that AdvancedMarkerElement relies on.
        // Provide a Map ID via `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` in your .env.local.
        options={{ mapId: 'CONTACT_PAGE' }}
      >
        <AdvancedMarker map={map} />
      </GoogleMap>
    </div>
  );
};

export default ContactMap;
