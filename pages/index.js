/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Link from "next/link";
import Article from "../components/article";
import TitleLinkSection from "../components/titleLinkSection";
import Work from "../components/work";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brian Ireri | Home</title>
      </Head>
      <div className="container flex items-center py-12 mx-auto">
        <div className="flex-1">
          <h1 className="mb-4 font-mono text-2xl font-bold">
            Hi 👋 I &rsquo;m Brian Ireri!
            <br />
            Visual influencer, either through web technologies  <br /> such as next js, react,
             tailwind or graphic design!
          </h1>
          <p className="col-start-1 mt-4 text-sm leading-6 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            I started to code after an injury while playing rugby, back in campus and have not looked back!
            I took around 3 year hiatus where I doubled down on my design knowledge, with countless poster designs
            that opened my mind to the phsycology of design. I came back to my original path though of programming in 2022,
            and its been an interesting Journey. Safe to say I can be a marketer too, dont you agree?
          </p>
          <Link
            href={{
              pathname: "/work",
              query: { name: "check out my project" },
            }}
          >
            <a className="inline-block px-6 py-3 text-lg text-white rounded-lg bg-primary">
              Check my Work
            </a>
          </Link>
        </div>
        <div className="relative z-0 inline-block m-5 before:block before:-left-2 before:-bottom-2 before:absolute before:inset-0 before:bg-shadowcolor before:rounded-full">
          <img
            src="/images/me.jpg"
            alt="Image of Brian"
            className="relative z-10 object-cover w-48 h-48 rounded-full"
          />
        </div>
      </div>
      <div className="bg-blue-100">
        <div className="container py-12 mx-auto">
          <TitleLinkSection title={"Recent Posts"} />
          <div className="grid grid-cols-2 gap-6">
            <Article className="rounded-lg" />
            <Article className="rounded-lg" />
          </div>
        </div>
      </div>
      <div className="container py-12 mx-auto">
        <TitleLinkSection title={"Featured Work"} />
        <Work />
        
      </div>
    </>
  );
}
