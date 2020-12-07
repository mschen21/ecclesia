import CreatePost from "../components/createPost";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import Link from "next/link";
import fire from "../config/fire-config";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogs);
      });
  }, []);
  console.log(blogs);
  return (
    <Layout>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href="/blog/[id]" as={"/blog/" + blog.id}>
            <a>{blog.title}</a>
          </Link>
        </li>
      ))}
      <div>Hello World.</div>
      <CreatePost />
    </Layout>
  );
};
export default Home;
