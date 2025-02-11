import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import './App.css';
import bannerImg from './assets/bannerImg.png';
import featureImg from './assets/featureImg.png';
import Features from './components/features';
import { FaQuoteLeft as Quote } from "react-icons/fa";
import { FaArrowRight as Arrow, FaPlay as Play } from "react-icons/fa6";
import Contact from './components/contact';

function App() {
  return (
    <div>
      {/* Hero Section */}
      <div className="px-4 md:px-10 md:h-[95vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col justify-between">
        <NavBar />
        <div className="lg:px-6 pb-5 flex-wrap items-center flex gap-5 h-5/6">
          <div className="w-full sm:w-1/2">
            <h2 className='font-bold text-4xl md:text-6xl my-2 leading-[50px] md:leading-[85px]'>
              Reach your <span className='border-b border-white font-bold pb-2'>audience</span> & convert your leads
            </h2>
            <div className="w-full my-3 sm:hidden">
              <img src={bannerImg} alt="Marketing Strategy" className='w-full' />
            </div>
            <p className='my-7.5 leading-[30px] text-xl font-normal'>
              Unlock the power of digital marketing. Use SEO, targeted email campaigns, and lead-generation strategies to grow your business.
            </p>
            <div className='flex gap-2 my-3'>
              <span className="btn">Get Started</span>
              <span className="btn outline-btn flex gap-1 items-center">
                <Play />Watch Demo
              </span>
            </div>
          </div>
          <div className="w-5/6 sm:w-5/12 hidden sm:flex">
            <img src={bannerImg} alt="Marketing Strategy" className='w-full' />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-3 px-5 md:px-9">
        <div className='flex flex-col justify-center py-10'>
          <Features
            head1='OUR FEATURES'
            head2='Know your audience'
            head3='and boost sales'
          />
          <div className="flex items-end justify-end w-full mt-2">
            <p className='h-fit sm:w-7/12 lg:w-2/5 text-2xl font-medium leading-[30px]'>
              Our platform provides deep insights into customer behavior, helping businesses create targeted marketing campaigns and increase conversion rates.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between bg-[#F1F1F1] p-10 rounded-2xl text-black">
          <div className="md:w-2/3 lg:w-5/12 flex flex-col gap-2">
            <h2 className='text-2xl md:text-4xl leading-[30px] md:leading-[42px] font-bold'>
              Save precious time with automation
            </h2>
            <div className="w-full md:hidden">
              <img src={featureImg} alt="Automation Tools" className='w-full h-full' />
            </div>
            <p className='text-lg md:text-xl leading-[30px] md:leading-[42px] font-semibold'>
              Automate your marketing tasks and focus on business growth. Schedule email campaigns, set up auto-responses, and let AI-driven analytics refine your strategy.
            </p>
            <div className='flex items-center gap-1 hover:border-b-2 w-fit'>
              <span className='text-lg md:text-xl'>Learn More</span>
              <span className='text-black text-lg md:text-lg'><Arrow /></span>
            </div>
          </div>
          <div className="md:w-1/3 lg:w-7/12 hidden md:flex">
            <img src={featureImg} alt="Automation Tools" className='w-full sm:h-auto md:h-full' />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='flex flex-col my-17.5 h-fit px-10 py-8'>
        <Features
          head1='OUR HAPPY CUSTOMERS'
          head2='What our customers '
          head3='say about us'
        />
        <div className="w-full flex justify-end mt-5 gap-3">
          <Quote className='text-5xl' />
          <div className="md:w-1/2 flex flex-col gap-2">
            <p className='h-fit text-2xl md:text-2xl font-medium tracking-normal text-left text-[#32584A]'>
              This platform transformed our marketing strategy! The automation tools saved us countless hours, and the analytics helped us improve engagement by 50%.
            </p>
            <div className="text-[#32584A]">
              <h2 className='text-xl md:text-4xl mb-2 font-extrabold'>Jane Doe</h2>
              <h3 className='text-lg md:text-3xl font-medium'>Product Specialist, GrowthCorp</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Footer Section */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
