import Head from "next/head";
import Link from "next/link";
//import { useRouter } from "next/router";
//import { ImTwitter, ImYoutube } from "react-icons/im";
//import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
export default function Layout({ children }) {
  //const router = useRouter();

  return (
    <>
      <Head>
        <title>Brian Ireri | Layout</title>
      </Head>
      <header className="py-5 px-6 ml-4 mr-4 flex flex-wrap justify-between items-center">
        <Link
          href={{
            pathname: "/",
            query: { name: "home" },
          }}
        >
          <div className="ml-6">
          <Image
          
      src="/images/brlogo2.png"
      alt="Picture of the company"
      width={110}
      height={110}
    />
    </div>
        
        </Link>
        
          <ul className="text-center -mx-5 md:mx-0 order-last flex-[100%] mt-4 md:order-none md:flex-auto md:mt-0">
            <li className="inline-block mx-5">
              <Link
                href={{
                  pathname: "/blog",
                  query: { name: "let's learn together" },
                }}
              >
                <a>Blog</a>
              </Link>
            </li>
            <li className="inline-block mx-5">
              <Link
                href={{
                  pathname: "/work",
                  query: { name: "check out my work" },
                }}
              >
                <a>Work</a>
              </Link>
            </li>
            
            
          </ul>

          <span className="flex-1 text-right">
          <Link
                href={{
                  pathname: "/contact",
                  query: { name: "let's connect" },
                }}
              >
                <a className="bg-blue-500 text-white py-2 px-5 rounded-full">Contact</a>
              </Link>
        </span>
        
      </header>
      <main className="ml-4 mr-4 px-6">{children}</main>
      <footer className="font-semibold ">
        {/* <Newslatter></Newslatter> */}
        <div className="container flex justify-center py-12 mx-auto">
          <div className="py-5">
            <div className="flex justify-center gap-6 font-semibold">

            </div>

            <p className="py-5 font-mono text-gray-400 text-1xl">
              ©2022 Brian Ireri
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
