import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { getSession } from "next-auth/react";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16">
        <section>
          <h2 className="py-5 text-2xl font-semibold md:text-3xl">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                image={item.img}
                distance={item.distance}
                location={item.location}
                key={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="py-5 text-2xl font-semibold md:text-3xl">
            Live Anywhere
          </h2>
          <div className="-mx-3 flex space-x-3 overflow-x-scroll px-3 scrollbar-hide">
            {cardsData?.map((item) => (
              <MediumCard
                image={item.img}
                key={item.title}
                title={item.title}
              />
            ))}
          </div>
        </section>
        <LargeCard
          image="/card.webp"
          description="Wishlists curated by Airbnb"
          title="The Greatest Outdoors"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
      session,
    },
  };
}
