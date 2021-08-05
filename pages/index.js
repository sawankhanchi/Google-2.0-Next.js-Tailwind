import Head from 'next/head';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid';
import Image from "next/image";
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);

  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between
      text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2
          rounded-full hover:bg-gray-100 cursor-pointer"/>

          {/* Avatar */}
          <Avatar />
        </div>
        
      </header>


      {/* Body */}
      <form className="flex flex-col items-center mt-40 flex-grow">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100} 
        />

        <div className="flex w-full mt-5 hover:shadow-lg
        focus-within:shadow-lg max-w-md rounded-full border
        border-gray-200 px-5 py-3 items-center sm:max-w-xl
        lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text" 
            className="flex-grow focus:outline-none" 
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 sm:space-y-0
        sm:flex-row space-x-4 mt-6 ml-72">
          <button onClick={search} className="bg-[#f8f8fa] p-3 rounded-md ring-gray-200 text-sm
        text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 
          hover:shadow-md ml-10">
            Google Search
          </button>

          <button onClick={search} className="bg-[#f8f8fa] p-3 rounded-md ring-gray-200 text-sm
        text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 
          hover:shadow-md">
            I'm Feeling Lucky
          </button>
        </div>
      </form>


      {/* Footer */}
      <Footer />


    </div>
  )
}
