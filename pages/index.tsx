import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Ali Portfolio</title>
        <meta name="description" content="Ali Mora Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h3 className='text-red-500 p-10'>I am a Programmer</h3>

        {/* Header */}
        <Header />
        {/* Hero */}
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
