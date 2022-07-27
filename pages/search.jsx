import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { differenceInDays, format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  let { location, startDate, endDate, numberOfGuests } = router.query;
  startDate = format(new Date(startDate), "dd MMMM yy");
  endDate = format(new Date(endDate), "dd MMMM yy");
  location = location.charAt(0).toUpperCase() + location.slice(1);
  const range = `${startDate} - ${endDate}`;
  const numberOfNights = differenceInDays(
    new Date(endDate),
    new Date(startDate)
  );
  const filteredResults = searchResults?.records?.filter((item) => {
    return (
      item.fields.maximum_nights >= numberOfNights &&
      (item.fields.country === location || item.fields.city === location) &&
      item.fields.guests_included >= numberOfGuests
    );
  });
  const placeholder = `${location} | ${range} | ${numberOfGuests} Guests`;
  return (
    <div className="h-screen">
      <Header placeholder={placeholder} />
      <main className="flex max-w-full">
        <section className="flex-1 px-2 xs:px-6 pt-10">
          <p className="w-max rounded-md bg-gray-100 bg-opacity-40 py-2 px-4 text-xs capitalize shadow-sm">
            {`${filteredResults.length} ${
              filteredResults.length > 1 ? "stays" : "stay"
            }`}{" "}
            -{" "}
            <span className="rounded-md bg-airbnb bg-opacity-80 py-1 px-2 text-white">
              {range}
            </span>{" "}
            - for {numberOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold capitalize">
            Stays in {location}
          </h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap md:inline-flex">
            <p className="filter-button">Cancellation Flexibility</p>
            <p className="filter-button">Type of Place</p>
            <p className="filter-button">Price</p>
            <p className="filter-button">Rooms and Beds</p>
            <p className="filter-button">More Filters</p>
          </div>
          <div className="xs:mx-2 flex flex-col space-y-3 overflow-y-scroll scroll-smooth pb-4 scrollbar-hide">
            {filteredResults.map((item) => (
              <InfoCard
                key={item.recordid}
                id={item.recordid}
                image={`https://public.opendatasoft.com/explore/dataset/airbnb-listings/files/${item.fields.picture_url?.id}/300/`}
                description={item.fields.description}
                title={item.fields.name}
                star={item.fields.review_scores_rating / 20}
                price={item.fields.price}
                location={item.fields.smart_location}
                guests={item.fields.guests_included}
                bedrooms={item.fields.bedrooms}
                bathrooms={item.fields.bathrooms}
                beds={item.fields.beds}
                amenities={item.fields.amenities}
                nights={numberOfNights}
                checkIn={startDate}
                checkOut={endDate}
                hostName={item.fields.host_name}
                hostedBy={`${item.fields.property_type} hosted by ${item.fields.host_name}`}
                hostReviews={item.fields.number_of_reviews}
                hostAbout={item.fields.host_about}
                hostResponseRate={item.fields.host_response_rate}
                hostPicture={item.fields.host_picture_url}
                hostSince={`Joined in ${format(
                  new Date(item.fields.host_since),
                  "do MMMM yyyy"
                )}`}
                cleaningFee={item.fields.cleaning_fee}
                numberOfGuests={numberOfGuests}
                searchPlaceholder={placeholder}
              />
            ))}
          </div>
        </section>
        <section className="hidden cursor-grab lg:inline-flex lg:min-w-[300px] lg:pb-4 xl:min-w-[500px]">
          <Map filteredResults={filteredResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=10&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features"
  ).then((res) => res.json());
  return {
    props: {
      searchResults,
    },
  };
}
