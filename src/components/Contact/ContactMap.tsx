"use client";

import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

interface ContactMapProps {
  apiKey?: string;
  center?: { lat: number; lng: number };
}

export const ContactMap: React.FC<ContactMapProps> = ({ apiKey, center }) => {
  const apiKeyToUse = apiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const { isLoaded, loadError } = useJsApiLoader({ googleMapsApiKey: apiKeyToUse });

  if (loadError) return <div className="text-sm text-red-600">Map failed to load</div>;
  if (!isLoaded) return <div className="text-sm">Loading map...</div>;

  const mapCenter = center || { lat: 12.9716, lng: 77.5946 };
  // responsive aspect ratio: 16:9 on desktop, 4:8 on mobile


  return (
    <div className="border border-2 border-[#885739] w-full rounded-2xl overflow-hidden mb-5 h-[400px]">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={mapCenter}
        zoom={13}
      >
        <Marker position={mapCenter} />
      </GoogleMap>
    </div>
  );
};

export default ContactMap;
