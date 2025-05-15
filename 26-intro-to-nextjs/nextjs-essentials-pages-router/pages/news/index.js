import Link from "next/link";
import { Fragment } from "react";

export default function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">artical 1</Link>
        </li>
        <li>
          <Link href="/news/2">artical 2</Link>
        </li>
      </ul>
    </Fragment>
  );
}
