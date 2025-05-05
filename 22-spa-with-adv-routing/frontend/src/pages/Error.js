import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
export default function ErrorPage() {
  const error = useRouteError();
  let message = "Something Went Wrong!";
  let title = "An error occurred";
  if (error.status === 500) message = JSON.parse(error.data).message;
  if (error.status === 404) {
    title = "Not Found";
    message = "Could not Found page!";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
