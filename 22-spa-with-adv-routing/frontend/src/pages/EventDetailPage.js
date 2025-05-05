import { Link, useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage id:{params.id}</h1>
      <Link to=".." relative="path">
        back
      </Link>
    </>
  );
}
