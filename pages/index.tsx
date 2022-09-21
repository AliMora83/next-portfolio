/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExp from '../components/WorkExp'
import { Experience, PageInfo, Skill, Project, Social} from "../typings"
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]" >
      <Head>
        <title>Ali Portfolio</title>
        <meta name="description" content="Ali Mora Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header socials={socials} />
        
        <section id='hero' className='snap-start'>
          <Hero pageInfo={pageInfo} />
        </section>
        
        <section id='about' className='snap-center'>
          <About pageInfo={pageInfo} />
        </section>
       
        <section id='exp' className='snap-center'>
          <WorkExp experiences={experiences} />
        </section>
       
        <section id='skills' className='snap-start'>
          <Skills skills={skills} />
        </section>
       
        <section id='projects' className='snap-start'>
          <Projects projects={projects}/>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();


  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
