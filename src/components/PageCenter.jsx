import React, { lazy, Suspense } from "react";
const Post = lazy(() => import("./Post"));

function PageCenter() {
  return (
    <>
      <Suspense fallback={<div>Loading Posts..</div>}>
        <div className="sectionLabel">Recent Posts</div>
        <div className="sectionContent">
          <Post />
          <Post />
          <Post />
        </div>
      </Suspense>
    </>
  );
}

export default PageCenter;
