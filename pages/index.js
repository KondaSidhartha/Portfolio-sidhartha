import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import devsid from '../public/dev-ed-wave.png';
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode,setDarkMode]=useState(false);
  return (
    <div className={darkMode?"dark":""}>
      <Head>
        <title>Sidhartha Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons '>Developed by Sidhartha</h1>
            <ul className='flex items-center'>
              <li></li>
              <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='https://drive.google.com/file/d/1fOgDY3Y4HG3-8JEiMIkyoXH1Gnz-v_1k/view?usp=sharing' target='_blank'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Konda Sidhartha
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl'> Developer and Problem Solver</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg mx-auto'>
              I'm Full stack Web Developer and App-Developer. Provides services for programming needs .Join me down below , lets start cracking  
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='#'><AiFillTwitterCircle/></a>
            <a href='https://www.linkedin.com/in/sidhartha-konda-60b306203/'><AiFillLinkedin/></a>
            <a href='#'><AiFillYoutube/></a>
          </div>
          <div className='relative mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={devsid} layout="fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Profile</h3>
            <p className='text-md py2 leading-8 text-gray-80 dark:text-white'>
              Since the beginning of my jouney as a Developer and programmer,I've have done some projects related to 
              <span className='text-teal-500'> Web Applications and App Development </span>
              and got to meet so many amazing people in this journey
            </p>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
              I have been doing programming since 2 years and very proficient in C++ DSA.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <a href='https://github.com/KondaSidhartha/Restaurant-Website' target='_blank'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-800'>Restaurant Website</h3>
              <p className='dark:text-gray-800'>
              Developed a responsive website where user can sign-up and login (with authentication). 
              </p>
              <h4 className='py-4 text-teal-600'>Tools and FrameWorks I used</h4>
              <p className='text-gray-800 py-1 '>React</p>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>MongoDB</p>
            </div>
            </a>
            <a href='https://github.com/KondaSidhartha/Tele-Chat-flutter' target='_blank'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-800'>Tele-Chat Flutter</h3>
              <p className='dark:text-gray-800'>
              Designed , implemented and tested Chat app using DART where user can register and sign-up (with authentication) 
              </p>
              <h4 className='py-4 text-teal-600'>Tools and FrameWorks I used</h4>
              <p className='text-gray-800 py-1'>Flutter</p>
              <p className='text-gray-800 py-1'>Firebase</p>
              <p className='text-gray-800 py-1'>Android Studio</p>
            </div>
            </a>
            <a href='https://github.com/KondaSidhartha/BMI-Calculator-flutter' target='_blank'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={code} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-800'>BMI Calculator</h3>
              <p className='dark:text-gray-800'>
              Designed and Developed application which can calculate BMI of a person.
              </p>
              <h4 className='py-4 text-teal-600'>Tools and FrameWorks I used</h4>
              <p className='text-gray-800 py-1'>Flutter</p>
              <p className='text-gray-800 py-1'>Android Studio</p>
              <p className='text-gray-800 py-1'>Dart</p>
            </div>
            </a>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1' >Portfolio</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
