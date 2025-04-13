import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

function Hero() {
  const { setSearchFilter, setIsSearched, isSearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    });
    setIsSearched(true);
  };

  // Calculate padding based on whether search filters are shown


  return (
    <>
      {/* Hero Section */}
      <div className="container  2xl:px-20 mx-auto my-0 bg-purple text-white py-16 text-center mx-2 rounded-xl ">
        <div className="bg-purple-800 py-4 text-white py-16 text-center mx-2 rounded-xl ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
            Over 10,000+ jobs to apply
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
            Your Next Big Career Move Starts Right Here - Explore the Best Job
            Opportunities and Take the First Step Toward Your Future!
          </p>

          {/* Search Bar */}
          <div className="flex items-center justify-between bg-white rounded text-gray-600  max-w-xl pl-4 mx-4 sm:mx-auto">
            <div className="flex items-center ">
              <img src={assets.search_icon} alt="Search Icon" className="h-4 sm:h-5" />
              <input
                type="text"
                placeholder="Search For Jobs"
                className="max-sm:text-xs p-2 rounded outline-none w-full"
                ref={titleRef}
              />
            </div>
            <div className="flex items-center">
              <img src={assets.location_icon} alt="Location Icon" className="h-4 sm:h-5"/>
              <input
                type="text"
                placeholder="Location"
                className="text-gray-800 p-2 outline-none w-full"
                ref={locationRef}
              />
            </div>
            <button onClick={onSearch} className="bg-blue-600 px-6 py-2 rounded text-white m-1">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="border justify-center border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex w-full">
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
          <p className="text-lg font-semibold text-gray-700">Trusted By:</p>
          <img className='h-6' src={assets.microsoft_logo} alt="Microsoft Logo" />
          <img className='h-6' src={assets.walmart_logo} alt="Walmart Logo" />
          <img className='h-6' src={assets.accenture_logo} alt="Accenture Logo" />
          <img className='h-6' src={assets.samsung_logo} alt="Samsung Logo" />
          <img className='h-6' src={assets.adobe_logo} alt="Adobe Logo" />
        </div>
      </div>
    </>
  );
}

export default Hero;