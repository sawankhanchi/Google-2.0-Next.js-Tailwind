import Image from "next/image";
import { useRouter } from 'next/dist/client/router';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
      e.preventDefault();
      const term = searchInputRef.current.value;

      if (!term) return;

      router.push(`/search?term=${term}`);

  }

    return (
        <header className="sticky top-0 bg-white">
           <div className="flex w-full p-6 items-center">
            <Image
                src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                width={120}
                height={40}
                className="cursor-pointer"
                onClick={() => router.push('/')}
                />
                <form className="flex flex-grow w-full mr-5 ml-10
                shadow-lg rounded-full border border-gray-200 px-6 py-3 
                items-center max-w-3xl">
                    <input 
                    ref={searchInputRef} 
                    type="text"
                    className="flex-grow w-full focus:outline-none" 
                    />
                    <XIcon className="sm:mr-3 h-7 text-gray-500 cursor-pointer 
                    transition duration-100 transform hover:scale-125"
                    onClick={() => searchInputRef.current.value=""} 
                    />
                    <MicrophoneIcon className="mr-3 h-6
                    hidden sm:inline-flex text-blue-500
                    border-l-2 pl-4 border-gray-300" 
                    />
                    <SearchIcon className="h-6
                    hidden sm:inline-flex text-blue-500"
                    onClick={search}
                    />
                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>
                <Avatar className="ml-auto" />
                {/* url="https://..." */}
           </div>

           {/* HeaderOptions */}
           <HeaderOptions />
        </header>
    )
}

export default Header
