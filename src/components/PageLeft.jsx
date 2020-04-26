import React, { lazy, Suspense } from "react";
const News = lazy(() => import("./NewsFeed"));
const Blog = lazy(() => import("./BlogFeed"));

function PageLeft() {
  return (
    <>
      <div className="sectionLabel">Recent News</div>
      <Suspense fallback={<div>Loading News..</div>}>
        <div className="sectionContent">
          <News title={"ASUU calls off strike!"} date={"today at 9:00am"} />
          <News title={"ASUU calls off strike!"} date={"today at 8:30am"} />
          <News title={"ASUU calls off strike!"} date={"today at 8:22am"} />
        </div>
      </Suspense>
      <div className="sectionLabel">Recent Blogs</div>
      <Suspense fallback={<div>Loading Blog..</div>}>
        <div className="sectionContent horizontalScroll">
          <div className="scrollContent">
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default PageLeft;
