import React from "react";

import ContentHeader from "@components/ui/ContentHeader";

interface Props {
  showSearchBar?: boolean;
}

const NestedLayout: React.FC<Props> = ({ showSearchBar, children }) => {
  return (
    <div className="flex flex-col flex-1 w-0 overflow-hidden">
      <ContentHeader showSearchBar={showSearchBar} />
      <main className="relative flex-1 overflow-y-auto">
        <div className="py-6">{children}</div>
      </main>
    </div>
  );
};

export default NestedLayout;
