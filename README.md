<p align="center">
  <a href="https://www.quizshare.me/">
    <h1 align="center">Quizshare</h1>
  </a>
</p>

A brief description of what this project does and who it's for

## Tech Stack

**Client:** Next.js, TailwindCSS, React-hook-form, Apollo client

**Server:** NodeJS, Express, GraphQL, Apollo Server, Typeorm,

**Database:** Postgresql

## Project structure

We have 3 apps inside the project:

- **Web:** React.JS application.
- **API:** NodeJS Express.JS application.

## Running the server and client

### `yarn run dev`

Runs the api in development mode with nodemon enabled & nextjs

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- /server

```
PORT=
CORS_ORIGIN_DEV=
CORS_ORIGIN=
SESSION_NAME=
SESSION_SECRET=
NODE_ENV=

DATABASE=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SERCRET=
GOOGLE_CALLBACK=

DATABASE_URL_DEV=
DATABASE_URL_PROD=

FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
FACEBOOK_CALLBACK=
```

- /client

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_PRESET_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
NEXT_PUBLIC_CLOUDINARY_API_SECRET=
NEXT_PUBLIC_CLOUDINARY_API_CLOUDINARY_URL=
NEXT_PUBLIC_API_URL=
```

---

## Authors

- [@mjcarnaje](https://github.com/mjcarnaje)

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Appendix

Any additional information goes here

## License

[MIT](https://choosealicense.com/licenses/mit/)
