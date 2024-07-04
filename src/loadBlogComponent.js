import React from "react";

const loadBlogComponent = (name) => {
  try {
    const Component = React.lazy(() => import(`./blogs/${name}`));
    return <Component />;
  } catch (error) {
    console.error(`Error loading blog component: ${name}`, error);
    return <div>Blog post not found</div>;
  }
};

export default loadBlogComponent;
