# Airbnb Clone 2.0

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img alt="Version" src="https://img.shields.io/badge/Airbnb-Clone-brightgreen" />
</p>

### About The Build:

This Airbnb clone has an Eye-Catching and Interactive UI with especially place search filter and MapBox integration with slick effect. Furthermore, custom Icons have been created and added.
<br />

Current Features :

<li>LogIn with Google, Facebook, Github, Twitter</li>
<li>Every Data pulled via OpenDataSet's Airbnb API </li>
<li>Calender Date picker on User Search Input</li>
<li>Custom Details page of every place with every minute detail</li>
<li>Interactive Map displaying location of searched places</li>
<li>Custom Search</li>
<li>Protected Routes</li>
<br/>

## Next.js + Tailwind CSS

Next.js is a React Production Framework which gives the best developer experience with all the features for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

## How To Start :

### Start with a pre-made Starter Template

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example with a pre-configured starter template of NextJs App with TailwindCSS:

```bash
npx create-next-app --example with-tailwindcss your-app-name
# or
yarn create next-app --example with-tailwindcss your-app-name
```

### Now finally run your Project :

Run your build process with `npm run dev` or whatever command is configured in your `package.json` file.

```bash
npm run dev
```

## Environment variables :

Open `.next.config.js` file then edit add this setting

```
module.exports = {
  env: {
    mapbox_token:"YOUR TOKEN",
  },
};

```

Create `.env.local` file add this keys

```
NEXTAUTH_URL=http://localhost:3000

# GOOGLE KEYS
GOOGLE_CLIENT_ID=key_goes_here
GOOGLE_CLIENT_SECRET=key_goes_here

# GITHUB KEYS
GITHUB_CLIENT_ID=key_goes_here
GITHUB_CLIENT_SECRET=key_goes_here

# FACEBOOK KEYS
FACEBOOK_CLIENT_ID=key_goes_here
FACEBOOK_CLIENT_SECRET=key_goes_here

# TWITTER KEYS
TWITTER_CLIENT_ID=key_goes_here
TWITTER_CLIENT_SECRET=key_goes_here
TWITTER_CLIENT_BEARER_TOKEN=key_goes_here

```

## Author

👤 **Divyam Agarwal**

- Website:
- Github: [@Divyam2600](https://github.com/Divyam2600)

## Show your support

Give a ⭐️ if this project helped you!
