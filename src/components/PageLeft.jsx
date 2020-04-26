import React, { lazy, Suspense } from "react";
const News = lazy(() => import("./NewsFeed"));
const Blog = lazy(() => import("./BlogFeed"));

function PageLeft({ news }) {
  return (
    <>
      <div className="sectionLabel">Recent News</div>
      <Suspense fallback={<div>Loading News..</div>}>
        <div className="sectionContent">
          {news.map((news, i) => (
            <News key={i} title={news.title} date={news.date} />
          ))}
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
