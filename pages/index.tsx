import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import WorkExp from '../components/WorkExp'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0" >
      <Head>
        <title>Ali Portfolio</title>
        <meta name="description" content="Ali Mora Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        
        <section id='hero' className='snap-start'>
          <Hero />
        </section>
        
        <section id='about' className='snap-center'>
          <About />
        </section>
       
        <section id='exp' className='snap-center'>
          <WorkExp />
        </section>
       
        <section id='skills' className='snap-start'>
          <Skills />
        </section>


        
        {/* Skills */}
        {/* Projects */}
        {/* Contact */}

      </div>
      
      
    </div>
  )
}

export default Home
