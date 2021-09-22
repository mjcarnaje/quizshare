import React from "react";

interface Props {
  version?: "normal" | "initial";
}

export const Logo: React.FC<Props> = ({ version = "normal" }) => {
  return (
    <div className="h-16 flex justify-center items-center">
      {version === "normal" ? (
        <h3>QuizShare</h3>
      ) : (
        <h3 className="font-extrabold text-3xl text-white">Q</h3>
      )}
    </div>
  );
};
