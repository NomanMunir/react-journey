import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react/jsx-runtime";
import Head from "next/head";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First meetup.",
    image:
      "https://imgs.search.brave.com/nG1XXrjBGwj_rWKgiJkqEsDlf4PbjUpJ0kzu9eRx4Ag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc",
    address: "some address",
    description: "This is a meetup.",
  },
  {
    id: "m2",
    title: "A Second meetup.",
    image:
      "https://imgs.search.brave.com/s7h4GwPFE3nOh8I-uZHXR22kIbzwafCF_Bye8A6B0io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0xpZmVz/dHlsZS0xMDMzNDU3/MjUwLmpwZw",
    address: "some address",
    description: "This is a meetup.",
  },
  {
    id: "m3",
    title: "A Third meetup.",
    image:
      "https://imgs.search.brave.com/rrKzTYbAUU2b4dswK28R2SzMUK8lCYIarNEv_gGAaBE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEz/NDM5MzQxL3Bob3Rv/L3BvcnRyYWl0LW9m/LWVudGh1c2lhc3Rp/Yy1idXNpbmVzcy1w/ZW9wbGUtaW4tY2ly/Y2xlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1veHdzcThX/R0ZUMGl4bVNvam50/WUJFWnFpZm5lNFA3/RGxxT1diWENxV1Vr/PQ",
    address: "some address",
    description: "This is a meetup.",
  },
];

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Brower a huge list of active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.DB_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        id: meetup._id.toString(),
        image: meetup.image,
      })),
    },
    revalidate: 10,
  };
}

// export function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }
