import Head from "next/head";
import data from "utils/data";
import Blogitem from "/components/blogitem";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Brian Ireri | Blog</title>
      </Head>
      <div className="max-w-7xl mx-auto p-8  grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
        {data.blogs.map((blog) => (
          <Blogitem blog = {blog} key = {blog.slug}></Blogitem>
        ))}
        
      </div>
    </>
  );
}
