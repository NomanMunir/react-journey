import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const {
    data,
    isPending: isEventPending,
    isError: isEventError,
    error: eventError,
  } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  function handleStartDeletingEvent() {
    setIsDeleting(true);
  }

  function handleStopDeletingEvent() {
    setIsDeleting(false);
  }

  function handleDeleteEvent() {
    mutate({
      id: id,
    });
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDeletingEvent}>
          <h2>Are You Sure?</h2>
          <p>Do you really want to Delete?</p>
          <div className="form-actions">
            {isPending && <p>Deleting...</p>}
            {!isPending && (
              <>
                <button
                  onClick={handleStopDeletingEvent}
                  className="button-text"
                >
                  Cancel
                </button>
                <button onClick={handleDeleteEvent} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {isError && (
            <ErrorBlock
              title="Failed to delete event"
              message={
                error.info?.message ||
                "Failed to delete event, Please try again later."
              }
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isEventError && (
        <ErrorBlock
          title="Unable to fetch data."
          message={
            eventError.info?.message ||
            "Some Error Happened while Fetching Details."
          }
        />
      )}

      {isEventPending && (
        <p style={{ textAlign: "center" }}>Loading Details...</p>
      )}

      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleStartDeletingEvent}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt={data.image} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date} @ {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
