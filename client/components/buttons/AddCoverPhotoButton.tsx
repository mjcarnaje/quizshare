import React from "react";

import { PhotographIcon } from "@heroicons/react/outline";

interface Props {
  onClick: () => void;
  text: string;
}

const AddCoverPhotoButton: React.FC<Props> = ({ onClick, text }) => {
  return (
    <div className="mb-2">
      <button
        type="button"
        className="flex px-3 py-2 bg-white rounded-md shadow-sm text-medium hover:bg-gray-50 focus:outline-none"
        onClick={onClick}
      >
        <PhotographIcon className="w-6 h-6 mr-1" />
        {text} Cover Photo
      </button>
    </div>
  );
};

export default AddCoverPhotoButton;
