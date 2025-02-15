import React from 'react'
import Title from '../Components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../Components/NewsletterBox';

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
           <Title text1={'CONTACT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
           <img className='w-full md:max-w-[460px]' src={assets.contact_img} alt="" />
           <div className='flex flex-col justify-center items-start gap-6'>
             <p className='font-semibold text-xl text-gray-600'>Our Store</p>
             <p className='text-gray-500'>501, Sharyans Centre, 5th Floor,<br /> Above Lijjat Papad Opp Bandra Rly Stn, <br /> 3 Gurunanak Road, Bandra (W) Mumbai- 400050</p>
             <p className='text-gray-500'>Tel: +91-22-66414000 <br /> Email: flpcare@flpindia.net</p>
             <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
             <p className='text-gray-500'>Learn more about our teams and job openings.</p>
             <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
           </div>
        </div>
        <NewsletterBox />
    </div>
  )
}

export default Contact