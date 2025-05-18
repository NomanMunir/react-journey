import fs from "node:fs/promises";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundry";

export default async function Home() {
  const promise = await new Promise((resolve) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      resolve(users);
    }, 2000)
  );
  return (
    <main>
      <ErrorBoundary fallback={<p>Something went wrong!</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <UsePromiseDemo userPromise={promise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
