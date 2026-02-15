// src/config/map.js
import NodeGeocoder from "node-geocoder";
import { env } from "./env.js";

// Configure geocoder (can use Google Maps, OpenStreetMap, or Mapbox)
const geocoder = NodeGeocoder({
  provider: "openstreetmap", // or "google"
  httpAdapter: "https",
  apiKey: process.env.GOOGLE_MAPS_API_KEY || "", // only for Google
  formatter: null,
});

/**
 * Calculate distance between two points in KM using Haversine formula
 * @param {number} lat1
 * @param {number} lon1
 * @param {number} lat2
 * @param {number} lon2
 */
export const calculateDistanceKM = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;

  const R = 6371; // Earth radius in KM
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Geocode an address into lat/lon
 * @param {string} address
 * @returns {Promise<{latitude: number, longitude: number}>}
 */
export const geocodeAddress = async (address) => {
  try {
    const res = await geocoder.geocode(address);
    if (!res.length) return null;
    return {
      latitude: res[0].latitude,
      longitude: res[0].longitude,
    };
  } catch (error) {
    console.error("❌ Geocoding Error:", error);
    return null;
  }
};

export default geocoder;
