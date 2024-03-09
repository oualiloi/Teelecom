import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="flex justify-center ">
        <Hero />
      </div>

      {/* <Image src="bouygues.svg" alt="logo" width={200} height={200} /> */}
    </div>
  );
}
