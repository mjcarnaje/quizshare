import React from "react";

const ContentContainer: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 w-0 overflow-hidden">{children}</div>
  );
};

export default ContentContainer;
