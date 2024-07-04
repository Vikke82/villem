import React from "react";
import { Link, Outlet } from "react-router-dom";

const posts = [
  { name: "FirstPost", title: "Voimanoston EM-kisat Malagassa 2024" },
  { name: "SecondPost", title: "Second Post" },
  // Lisää tähän lisää blogikirjoituksia
];

function Blogs() {
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ width: "200px", marginRight: "20px" }}>
        <ul>
          {posts.map((post) => (
            <li key={post.name}>
              <Link to={`/blogs/${post.name}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Blogs;
