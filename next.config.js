/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "public.opendatasoft.com",
      "a0.muscache.com",
    ],
  },
  env: {
    mapbox_token:
      "pk.eyJ1IjoiZGl2eWFtMjYwMCIsImEiOiJjbDYwcTZzN3EwMTJ2M2twOWd3cHk2OHNtIn0.D-9pi2Azs-f_8mJEgXheBg",
  },
};
