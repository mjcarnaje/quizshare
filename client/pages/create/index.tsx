import React from "react";

import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import withApollo from "@lib/withApollo";

const CreateQuiz = () => {
  return (
    <MainContainer title="Create Quiz">
      <Container>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Create Quiz
              </h1>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8"></div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: false })(CreateQuiz);
