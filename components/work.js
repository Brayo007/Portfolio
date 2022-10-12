import Head from "next/head";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Work() {
  return (
    <>
      <Head>
        <title>Brian Ireri | Work</title>
      </Head>
      <article className="flex items-center py-6 border-b-2">
        <img
          src="https://via.placeholder.com/240"
          alt="logo alt"
          className="w-1/3 mr-6 rounded-lg"
        />
        <div>
          <h3 className="mb-2 text-2xl">E-commerce platform</h3>
          <span className="block mb-4 text-gray-600">
            <date className="bg-blue-800 text-white px-5 py-1.5 mr-4 rounded-xl">
              2022
            </date>{" "}
            React
          </span>
          <p>
            Simple e-commerce platform. The link below: 
          </p>
          <Link href="https://wreinadev-brayo007.vercel.app">
            <p>https://wreinadev-brayo007.vercel.app</p></Link>
        </div>
      </article>
    </>
  );
}
