import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import loadBlogComponent from "./loadBlogComponent";

const BlogPage = () => {
  const { name } = useParams();

  if (!name) {
    return <div>Invalid blog post</div>;
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {loadBlogComponent(name)}
      </Suspense>
    </div>
  );
};

export default BlogPage;
