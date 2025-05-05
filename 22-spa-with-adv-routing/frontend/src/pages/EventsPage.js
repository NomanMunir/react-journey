import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { title: "Event 1", id: "e1" },
  { title: "Event 2", id: "e2" },
  { title: "Event 3", id: "e3" },
];
export default function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => {
          return (
            <li key={event.id}>
              <Link to={event.id}>{event.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
