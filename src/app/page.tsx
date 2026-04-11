import Hero from "./components/Hero";
import Learning from "./components/Learning";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Learning />
      <Newsletter />
    </>
  );
}
