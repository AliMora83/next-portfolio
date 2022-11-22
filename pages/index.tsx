/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import APIs from '../components/APIs'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Videos from '../components/Videos'
import WorkExp from '../components/WorkExp'


const Home = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]" >
      <Head>
        <title>Ali Mora</title>
        {/* <html lang="en-us"/> */}
        <meta name="description" content="Ali Mora Portfolio" />
        <link rel="icon" href="/omi.png" />
        <link rel='canonical' href='/' />
        {/* <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" /> */}
        </Head>
      <div>
        <Header />
        
        <section id='hero' className='snap-start'>
          <Hero />
        </section>
        
        <section id='about' className='snap-center'>
          <About />
        </section>
       
        <section id='clients' className='snap-center'>
          <WorkExp />
        </section>
       
        <section id='skills' className='snap-start'>
          <Skills />
        </section>
       
        <section id='projects' className='snap-start'>
          <Projects />
        </section>
        
        <section id='api' className='snap-start'>
          <APIs />
        </section>
       
        <section id='videos' className='snap-start'>
          <Videos />
        </section>
       
        <section id='contact' className='snap-start'>
          <Contact />
        </section>

    <Link href='#hero'>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
          src="/ali_mora.png" alt="image" /></div>
      </footer>
    </Link>
      </div>    
    </div>
  )
}

export default Home;

