import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import ErrorPage from "./ErrorPage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFatching, setIsFatching] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchPlaces() {
      setIsFatching(true);
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFatching(false);
        });
      } catch (error) {
        setError(error);
        setIsFatching(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title={"An error occurred!!"} message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      isLoading={isFatching}
      isLoadingText="Places are being loaded..."
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
