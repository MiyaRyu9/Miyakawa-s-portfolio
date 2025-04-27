import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
// import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Head from "next/head";
import { Main } from "next/document";

export default function Home(){
  return(
    <div className="bg-black text-white">
      <Head>
        Miyakawa portfolio

      </Head>
      <Header />
      <>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </>
      <Footer />
    </div>
  )
}