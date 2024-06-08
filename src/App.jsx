import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer'
import './App.css'
import bannerImg from './assets/bannerImg.png'
import featureImg from './assets/featureImg.png'
import Features from './components/features';
import { FaQuoteLeft as Quote } from "react-icons/fa";
import { FaArrowRight as Arrow ,FaPlay  as Play} from "react-icons/fa6";
import Contact from './components/contact';

function App() {

  return (
    <div>
      <div className="px-4 md:px-10 bg-zinc-800 text-white">
        <NavBar/>
        <div className="lg:px-6 pb-5 flex-wrap items-center flex gap-5">
          <div className="w-full sm:w-1/2">
            <h2 className='font-bold text-4xl md:text-6xl my-2 leading-[50px] md:leading-[85px]'>Reach your -<span className='border-b border-white font-bold  w-[200px] pb-2'><b className='border-b border-white font-bold w-[200px]'>audience</b> </span>& convert your leads</h2>
            <div className="w-full my-3 sm:hidden">
              <img src={bannerImg} alt="Banner-image" className='w-full' />
            </div>
            <p className='my-7.5 leading-[30px] text-xl font-normal'>Get your customers with SEO, rank your business with <br /> email marketing, build sales leads</p>
            <div className='flex gap-2 my-3'>
              <span className="btn">Get Started</span>
              <span className="btn outline-btn flex gap-1 items-center ">
                <Play/>Watch Demo
              </span>
            </div>
          </div>
          <div className="w-5/6 sm:w-5/12 hidden sm:flex ">
            <img src={bannerImg} alt="Banner-image" className='w-full' />
          </div>
        </div>
      </div>
      <div className="py-3 px-5 md:px-9">
        <div className='flex flex-col justify-center py-10'>
          <Features
            head1='OUR FEATURES'
            head2='Know your audience'
            head3='and boost sales'
          />
          <div className="flex items-end justify-end 0 w-full mt-2">
            <p className='h-fit sm:w-7/12  lg:w-2/5 text-2xl font-medium leading-[30px]'>Effective emails convey the most significant substance to a client at the proper time which is our marketing approaches include scheduled emails.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between bg-[#F1F1F1] p-10 rounded-2xl text-black">
          <div className="md:w-2/3 lg:w-5/12 flex flex-col gap-2">
            <h2 className='text-2xl md:text-4xl leading-[30px] md:leading-[42px] font-bold'>Save precious time with automation</h2>
            <div className="w-full md:hidden">
              <img src={featureImg} alt="feature-img" className='w-full h-full' />
            </div>
            <p className='text-lg  md:text-4xl leading-[30px] md:leading-[42px] font-semibold'>Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa leo purus cras commodo. Volutpat massa fusce sit libero ut mollis risus.</p>
            <div className='flex items-center gap-1 hover:border-b-2 w-fit'>
              <span className='text-lg md:text-2xl'>Learn More</span>
              <span className='text-black text-lg md:text-xl'><Arrow/></span>
            </div>
          </div>
          <div className="md:w-1/3 lg:w-7/12 hidden md:flex">
            <img src={featureImg} alt="feature-img" className='w-full sm:h-auto md:h-full' />
          </div>
        </div>
      </div>
      <div className='flex flex-col my-17.5 h-fit px-10 py-8' >
        <Features
          head1='OUR HAPPY CUSTOMERS'
          head2='What our customers '
          head3='say about us'
        />
        <div className="w-full flex justify-end mt-5 gap-3">
          <Quote className='text-5xl'/>
          <div className="md:w-1/2 flex flex-col gap-2">
            <p className='h-fit text-2xl md:text-4xl font-medium md:eading-[49px] tracking-normal text-left text-[#32584A]'>Lorem ipsum dolor sit amet consectetur. In praesent ac sit scelerisque lacus. Faucibus tincidunt commodo mi.</p>
            <div className="text-[#32584A]">
              <h2 className='text-xl md:text-4xl mb-2 font-extrabold'>Jane Doe</h2>
              <h3 className='text-lg md:text-3xl font-medium'>Product Specialist, Lorem Co.</h3>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
