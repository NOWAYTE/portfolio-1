import BackgroundCircle from "./components/BackgroundCircle";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0">
      <header>
        <title>My Portfolio</title>
      </header>

      {/*Header section*/}
      <Header />

      {/*Hero section*/}
      <section id="Hero" className="snap-center">
      <Hero />
      </section>
    </div>
  );
}