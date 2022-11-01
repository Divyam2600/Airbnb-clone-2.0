import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { getSession } from "next-auth/react";
import data from "../data.json";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main className="mx-auto mt-4 max-w-7xl space-y-4 px-4 sm:px-10 lg:px-16 xs:px-8">
        <section>
          <h2 className="py-5 text-2xl font-semibold md:text-3xl">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.exploreData?.map((item) => (
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
            {data.cardsData?.map((item) => (
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
  return {
    props: {
      session,
    },
  };
}
