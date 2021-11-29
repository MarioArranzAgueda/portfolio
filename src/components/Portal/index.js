import React from "react";
import { createPortal } from "react-dom";
import * as styles from "./Portal.module.css";
import {} from "@heroicons/react/solid";

const Portal = ({ isOpen, handleClose, children }) => {
  const Content = (
    <div id="portal" className={`${styles.wrapper}`}>
      <div className={`${styles.card} bg-gray-800`}>
        <div className="flex justify-between mb-4">
          <h3>Thank you!</h3>
          <svg
            onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div>{children}</div>
        <div className="flex justify-end">
          <button
          onClick={handleClose}
            type="submit"
            className="text-white bg-indigo-500 border-0 mt-4 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
  return !isOpen ? null : createPortal(Content, document.body);
};

export default React.memo(Portal);
