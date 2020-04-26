import React, { Suspense, lazy } from "react";
const Event = lazy(() => import("./EventFeed"));

function PageRight() {
  return (
    <>
      <div className="sectionLabel">Upcoming Events</div>
      <Suspense fallback={<div>Loading Events..</div>}>
        <div className="sectionContent horizontalScroll">
          <div className="scrollContent">
            <Event />
            <Event />
            <Event />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default PageRight;
