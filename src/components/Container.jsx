import React from "react";

export const Container = ({ children }) => {
  return (
    <article className="mx-auto w-full max-w-screen-md rounded-[3rem] bg-sky-100 py-8 px-10 shadow-lg">
      {children}
    </article>
  );
};
