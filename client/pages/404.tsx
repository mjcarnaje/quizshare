import React from "react";

const PageNotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pt-16 pb-12 bg-white">
      <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-purple-600 uppercase">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="text-base font-medium text-purple-600 hover:text-purple-500"
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <a
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
            href="https://www.facebook.com/mj.carnaje/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <a
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
            href="https://www.instagram.com/mjcarnaje/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <a
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
            href="https://twitter.com/carnajeeed"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default PageNotFound;
