import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthew | Developer</title>
        <meta name="description" content="I’m fullstack software developer looking to make the world a better user experience" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
