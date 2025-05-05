import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useLoaderData();
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export const loader = async ({ req, params }) => {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch details for events " + id }),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};
