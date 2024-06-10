"use client";
import React, { Suspense } from "react";
import GitHubCalendar, { Props } from "react-github-calendar";

const GitHubCalendarComponent = () => {
  return (
    <div className=" w-[375px]  md:w-[720px] my-4 mx-2 py-4 mt-6 text-slate-300">
      <Suspense fallback="Loading...">
        <GitHubCalendar username={"joshiUtsav"} blockSize={9} />
      </Suspense>
    </div>
  );
};

export default GitHubCalendarComponent;
