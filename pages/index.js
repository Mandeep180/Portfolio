import Head from 'next/head';
import React, { useRef } from 'react';
import { useState } from "react";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from "next/image";
import DashboardImage from '../public/DashboardImage.jpg';
import code from '../public/code.png';
import SurveySite from '../public/SurveySite.png';
import Logo from "../public/Logo.png";
import eLogo from "../public/eLogo.png";
import vLogo from "../public/vLogo.jpeg";
import myImg from "../public/myImg.jpg";
import Blog from "../public/Blog.png";

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
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl  dark:text-white" />
                </li>
                <li>
                  <a className="bg-gradient-to-r from bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://docs.google.com/document/d/1L4OuIeHS09n9jnMtFYczynxy4y64vuzE0b517GmEY8Y/edit?usp=sharing">Resume</a></li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Mandeep Kaur</h2>
              <h3 className="text-2xl py-2 md:text-3xl  dark:text-white">Software Developer</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white">My name is Mandeep Kaur.   I am a software engineering student at Centennial College in Toronto, Canada. Although I'm eager to learn everything there is to know about technology and am working towards becoming a full stack software engineer, I currently feel more at ease with front-end programming. I'm also interested in graphic design, or what you can refer to as UI/UX designs of websites, in addition to software engineering.</p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-white">
              <a href="https://www.linkedin.com/in/mandeep-kaur-a12201256/"><AiFillLinkedin /></a>

              <AiFillYoutube />
            </div>
            <div className="relative mx-auto  rounded-full w-80 h-50 mt-20 ">
              <Image src={myImg} />
            </div>
          </section>



          <section>

            <div className="lg:center gap-10">

              <div className="text-center  shadow-lg p-10 rounded-xl my-10  dark:bg-black relative mx-auto  bg-slate-50">
                <h3 className=" text-3xl py-1 mt-20 text-center font-burtons  dark:text-white ">Education</h3>
                <Image src={Logo} width={400} height={200} className="mt-10" />
                {/* <h2 className="text-lg font-medium pt-8 pb-2">Centennial College- Toronto CAN</h2> */}
                <h3 className="text-2xl py-2 md:text-3xl  dark:text-white">Centennial College- Toronto CAN</h3>
                <h2 className="text-xl py-2 md:text-2xl  dark:text-white">Diploma of Software Engineering</h2>
                <h2 className="text-xl py-2 md:text-xl  dark:text-white">Jan 2022 - Grad in Apr 2023</h2>
              </div>
            </div>
          </section>

          <section>
            <div className="lg:center ">

              <div className="text-center  shadow-lg p-10 rounded-xl my-10  dark:bg-black relative mx-auto  bg-slate-50">
                <h3 className=" text-3xl py-1 mt-20 text-center font-burtons  dark:text-white">Experience</h3>
                <Image src={eLogo} width={400} height={200} className="mt-10" />
                {/* <h2 className="text-lg font-medium pt-8 pb-2">Centennial College- Toronto CAN</h2> */}
                <h2 className="text-2xl py-2 md:text-2xl  dark:text-white">WIMTACH,Centennial College- Toronto CAN</h2>
                <h2 className="text-xl py-2 md:text-2xl  dark:text-white">FrontEnd Developer, UI/UX Designer</h2>
                <h2 className="text-xl py-2 md:text-xl  dark:text-white">Dec 2022 - March 2023(4months intern)</h2>
                <Image src={vLogo} width={300} height={200} className="mt-10" />
                <h2 className="text-2xl py-2 md:text-2xl  dark:text-white">CCSAI,Centennial College- Toronto CAN</h2>
                <h2 className="text-xl py-2 md:text-2xl  dark:text-white">E-mentor,Organized events for International students to help them.</h2>
                <h2 className="text-xl py-2 md:text-xl  dark:text-white">Sept 2022 - Dec 2022</h2>
              </div>
            </div>
          </section>

          <section>

            <div className="lg:center ">

              <div className="text-center  shadow-lg p-10 rounded-xl my-10  dark:bg-black relative mx-auto  bg-slate-50">
                <div >
                  <h3 className="text-3xl py-1 mt-20 text-center font-burtons  dark:text-white">Side Projects</h3>
                  <p className="text-md py-2 leading-8 text-gray-800 md:text-xl  dark:text-white">
                    Since im just in the beginning of my career as a software developer, I've done <span className="text-md py-2 text-teal-600">freelancing</span> for students websites and <span className="text-md py-2 text-teal-600">collaborated</span> with WIMTACH a association at my college to build a <span className="text-md py-2 text-teal-600">beautiful website</span> to support special aid students.
                  </p>
                  <p className="text-md py-2 leading-8 text-gray-800 md:text-xl  dark:text-white">
                    I offer various services which include designing, front end development using MERN stack, Javascript, Html, css, Nextjs, C#, java.
                  </p>
                </div>
                <div className="lg:flex gap-10">
                  <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                    <Image src={Blog} width={200} height={100} className="mt-10" />
                    <h3 className="text-lg font-medium pt-8 pb-2">MyBlogZZ</h3>
                    <h4 className="py-2 text-teal-600">
                      Full Stack Blog website made using MERN stack
                    </h4>
                    <p className="text-gray-800 py-1">user can register, login</p>
                    <p className="text-gray-800 py-1">create and edit their posts</p>
                    <p className="text-gray-800 py-1">upload pics for their posts</p>

                    <a href="https://github.com/Mandeep180/MyBlogzz.git" className="py-4 text-teal-600">Repo, Click Here!</a>

                  </div>
                  <div className="text-center  shadow-lg p-10 rounded-xl my-10  dark:bg-white">
                    <Image src={code} width={100} height={100} className="mt-10" />
                    <h3 className="text-lg font-medium pt-8 pb-2">Convert Case</h3>
                    <h4 className="py-2 text-teal-600">
                      ConvertCase Application Built with React
                    </h4><br></br>
                    <a href="https://case-convert.vercel.app" className="py-4 text-teal-600" >Website, Click Here!</a><br></br><br></br>
                    <a href="https://github.com/Mandeep180/CaseConvert.git" className="py-4 text-black">Repo, Click Here!</a>
                  </div>
                  <div className="text-center  shadow-lg p-10 rounded-xl my-10  dark:bg-white">
                    <Image src={SurveySite} width={180} height={120} className="mt-10" />
                    <h3 className="text-lg font-medium pt-8 pb-2">Student Survey Site</h3>
                    <h4 className="py-2 text-teal-600">
                      Survey site
                    </h4><br></br>
                    <p className="text-gray-800 py-1">EJS, HTML, CSS, Mongodb</p>
                    <p className="text-gray-800 py-1">user can register, login</p>
                    <p className="text-gray-800 py-1">Rate their profs</p>
                    <p className="text-gray-800 py-1">Answer survey questions</p>
                    <a href="https://github.com/Centennial-Students-Surveys/Main-Repository.git" className="py-4 text-teal-600">Repo, Click Here!</a>
                  </div>
                  <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                    <Image src={DashboardImage} width={180} height={120} className="mt-10" />
                    <h3 className="text-lg font-medium pt-8 pb-2">Software Development project</h3>
                    <p className="py-2">
                      <a className="bg-gradient-to-r from bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://docs.google.com/document/d/1nAdSA7YXLn4WuAo4H3JiNf7xmAUKQv4wd0tbchhQ2Eg/edit?usp=sharing">Document</a>
                    </p>
                    <h4 className="py-4 text-teal-600">Software testing</h4>
                    <p className="text-gray-800 py-1">Full stack app MERN Stack</p>
                    <p className="text-gray-800 py-1">Test cases, Test Plans</p>
                    <p className="text-gray-800 py-1">Types Of Testing</p>

                  </div>
                </div>
              </div>
            </div>

          </section>



          <section>

            <div className="lg:center ">

              <div className="text-center  shadow-lg p-10 rounded-xl my-10  dark:bg-black relative mx-auto  bg-slate-50">
                <div >
                  <h3 className="text-3xl py-1 mt-20 text-center font-burtons  dark:text-white">Skills</h3>
                </div>


                <div className="lg:flex gap-10">
                  <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                    <h3 className="text-2xl font-medium pt-8 pb-2 text-teal-600">BackEnd</h3>

                    <p className="py-2 text-teal-600">
                      Backend skills practiced on various projects.
                    </p>
                    <h2 className="text-left "> Express.JS-Experienced</h2><br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div><br></br>

                    <h2 className="text-left "> Node.JS-Experienced</h2> <br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div><br></br>
                    <h2 className="text-left ">MongoDB-Experienced</h2><br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div><br></br>
                    <h2 className="text-left ">C#-Basic</h2> <br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div><br></br>
                    <h2 className="text-left ">SQL-Basic</h2>  <br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div> <br></br>
                    <h2 className="text-left ">Python-Intermediate</h2>  <br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div> <br></br>
                  </div>



                  <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                    <h3 className="text-2xl font-medium pt-8 pb-2 text-teal-600">FrontEnd</h3>

                    <p className="py-2 text-teal-600">
                      FrontEnd skills performed on various projects, check projects.
                    </p>
                    <h2 className="text-left "> React.JS-Intermediate</h2><br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div><br></br>

                    <h2 className="text-left "> Next.JS-Basic</h2> <br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div><br></br>
                    <h2 className="text-left ">TailwindCSS-Intermediate</h2><br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div><br></br>
                    <h2 className="text-left ">Angular14-Basic</h2> <br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div><br></br>
                    <h2 className="text-left ">HTML/CSS-Experienced</h2>  <br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div> <br></br>
                    <h2 className="text-left ">JS-Intermediate</h2>  <br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div> <br></br>
                  </div>

                  <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                    <h3 className="text-2xl font-medium pt-8 pb-2 text-teal-600">Data Analysis</h3>
                    <p className="py-2 text-teal-600">
                      DataAnalysis performed on python related projects.
                    </p>
                    <h2 className="text-left "> matplotlib-Intermediate</h2><br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div><br></br>

                    <h2 className="text-left "> Pandas-Basic</h2> <br></br>
                    <div
                      className="bg-[#30E3CA] h-2.5 rounded-full ">
                    </div><br></br>
                  </div>

                </div>
              </div>
            </div>

          </section>








          <section>
            <div className="lg:center ">

              <div className="text-center  shadow-lg p-10 rounded-xl my-10  dark:bg-black relative  bg-slate-50 ">
                <h3 className=" text-3xl py-1 mt-20 text-center font-burtons  dark:text-white">Contact Me</h3>
                <h2 className="text-2xl py-1 text-teal-600">Currently looking for full-time/part-time FrontEnd opportunities, contact me if you have available position, thanks!</h2>
                <h2 className="text-xl text-gray-800 text-right dark:text-white">Email address</h2>
                <h2 className="text-xl text-gray-800 text-right dark:text-white">mk0805511@gmail.com</h2>
                <h2 className="text-xl dark:bg-black text-gray-800 text-right hover: bg-slate-50 hover:text-black border-solid border-2 font-Poppins py-2 px-4 "><a href="url">Send email</a></h2>
              </div>

            </div>
          </section>




        </main>
      </>
    </div>
  )
}








