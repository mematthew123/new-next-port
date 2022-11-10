import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mattBernieimg from '../public/assets/mattBernie.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>About me</h2>
          <p className='py-2 text-gray-600'>
            I am a software developer with a passion for learning new things and
            creating beautiful websites that look amazing on any device. I have
            experience with HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,
            and more. Additionally i have experince with Node.js, Express.js,
            PHP, and JAVA for backend development.
          </p>
          <p className='py-2 text-gray-600'>
      When not in front of my computer, I enjoy spending time along the
      Clark Fork river with my dog, Bernice, or in the mountains. I also enjoy
      a disc golfing, and listening to podcasts.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={mattBernieimg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
