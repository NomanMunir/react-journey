import { Outlet, useNavigation } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventsLayout() {
  const navigation = useNavigation();
  return (
    <>
      <EventsNavigation />
      {navigation.state === "loading" && <p>Loading...</p>}
      <Outlet />
    </>
  );
}
