import React from "react";

import withApollo from "@utils/withApollo";
import MainContainer from "@components/ui/MainContainer";
import Container from "@components/ui/Container";

const Result: React.FC = () => {
  return (
    <MainContainer title={`Result | title`}>
      <Container showSearchBar={false}>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="flex max-w-4xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
              <div className="flex-1 space-y-3">
                <div className="p-2 bg-white rounded-md shadow">
                  <p>Restul</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(Result);
