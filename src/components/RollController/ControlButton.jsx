import React from "react";

const ControlButton = ({ children, action }) => {
  return (
    <button
      className="rounded-t-3xl border-b-4 border-transparent py-3 px-6 hover:border-slate-700 hover:bg-white hover:bg-opacity-20"
      onClick={action}
      type="button"
    >
      {children}
    </button>
  );
};

export default ControlButton;
