import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

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
        {/* Hero */}
        <section id='Hero' className='snap-center'>
          <Hero />
        </section>
        {/* About */}
        {/* Exp */}
        {/* Skills */}
        {/* Projects */}
        {/* Contact */}

      </div>
      
      
    </div>
  )
}

export default Home
