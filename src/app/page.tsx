import CountryList from "@/components/Country";
import Hero from "@/components/Hero";
import More from "@/components/More";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <More />
      <CountryList />
    </div>
  );
}
