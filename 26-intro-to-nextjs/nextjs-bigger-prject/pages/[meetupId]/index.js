import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  const { image, title, address, description, id } = props.meetupData;
  return (
    <MeetupDetail
      id={id}
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://media.istockphoto.com/id/1146143664/photo/business-meetup-millennials-pacing-technologies.jpg?s=612x612&w=0&k=20&c=ZIxFTzBEOJyKn6Box-xiUNRbnM6Ou6_NHSiq3Bv_QNA=",
        title: "First meetup",
        address: "Some street 5",
        description: "This is the first meetup",
      },
    },
    revalidate: 10,
  };
}
