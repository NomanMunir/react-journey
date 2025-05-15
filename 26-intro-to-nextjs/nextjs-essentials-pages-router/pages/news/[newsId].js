import { useRouter } from "next/router";

export default function NewsDetail() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h2>Details for id : {newsId}</h2>;
}
