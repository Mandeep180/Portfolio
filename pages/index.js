import Head from 'next/head';
import React, { useRef } from 'react';
import {useState} from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import deved from '../public/PastedGraphic.png';
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import Keyboard from '../public/Keyboard.jpeg';
import workout from '../public/workout.png';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
export default function Home() {
  
  
  const [darkMode, setDarkMode] = useState(false);
  return (
    
    <div className={darkMode ? "dark" : ""}>
  
    <>
      <Head>
        <title>Mandeep Kaur Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
         <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons  dark:text-white"> Developed by Mandeep Kaur</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)}className="cursor-pointer text-2xl  dark:text-white"/>
            </li>
            <li>
              <a className="bg-gradient-to-r from bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:47eff22f-8ffa-3f91-a889-52ec98d1fb0d">Resume</a></li>
          </ul>
         </nav>
         <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Mandeep Kaur</h2>
          <h3 className="tet-2xl py-2 md:text-3xl  dark:text-white">Software Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white">Web developer with a good experience of front end development for responsive website design. Passionate about learning and development with a desire to apply skills on a larger development team</p>
         </div>
         <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-white">
          <a href="https://www.linkedin.com/in/mandeep-kaur-a12201256/"><AiFillLinkedin /></a>
          
         <AiFillYoutube/>
         </div>
         <div className="relative mx-auto  rounded-full w-20 h-15 mt-20 ">
          <Image src={deved} />
         </div>
        </section>

        

        <section>
        <div >
            <h3 className="text-3xl py-1 mt-20 text-center font-burtons  dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 md:text-xl  dark:text-white">
              Since im just in the beginning of my career as a software developer, I've done <span className="text-md py-2 text-teal-600">freelancing</span> for students websites and <span className="text-md py-2 text-teal-600">collaborated</span> with WIMTACH a association at my college to build a <span className="text-md py-2 text-teal-600">beautiful website</span> to support special aid students.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 md:text-xl  dark:text-white">
              I offer various services which include designing, front end development using MERN stack, Javascript, Html, css, Nextjs, C#, java.
            </p>
          </div>
          <div className="lg:flex gap-10">
          <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={design} width={100} height={100}className="mt-10"  />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Elegant designs created as per clients needs.
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Illustrator</p>

            </div>
            <div className="text-center  shadow-lg p-10 rounded-xl my-10  dark:bg-white">
            <Image src={code} width={100} height={100}className="mt-10"  />
            <h3 className="text-lg font-medium pt-8 pb-2">Programming</h3>
            <p className="py-2">
              Websites created with various programming languages.
            </p>
            <h4 className="py-4 text-teal-600">Languages, frameworks and libraries used are mentioned below</h4>
            <p className="text-gray-800 py-1">Java</p>
            <p className="text-gray-800 py-1">C#</p>
            <p className="text-gray-800 py-1">JavaScript</p>
            <p className="text-gray-800 py-1">React Library</p>
            <p className="text-gray-800 py-1">MERN and MEAN stack</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 mt-20 text-center font-burtons  dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8  text-gray-800  dark:text-white">web developer with broad expertise in both front-end and back-end work. competent to construct scalable and stable online applications using  HTML, CSS, JavaScript, and a variety of web development frameworks and libraries like MERN and MEAN stack.</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
          
          
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
         
         
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>

            <div className="basis-1/3 flex-1">
            <a href="https://case-convert.vercel.app/"><Image src={Keyboard} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a>
              </div>
          </div>
        </section>
      </main>
    </>
    </div>
  )
}









