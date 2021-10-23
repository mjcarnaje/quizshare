# QuizShare API

A brief description of what this project does and who it's for

## Tech Stack

NodeJS, Express, GraphQL, Apollo Server, Typeorm,

**DB:** PostgreSQL

## Installation

Install dependencies with yarn workspace

```bash
 yarn install
```

## Running

Start the server locally

```bash
  yarn run dev
```

Start the server in production

```bash
  yarn run start
```

---

## How to run the API properly

1. Make sure you have postgresql database in your machine.
2. Plug your local postgresql url string in env
   ```
   DATABASE_URL_DEV=
   ```

---

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

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
