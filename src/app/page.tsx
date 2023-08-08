import { Content } from "./_home/_components/Content";
import { Footer } from "./_home/_components/Footer";
import { NavBar } from "./_home/_components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-base-300 z-10">
        <NavBar />
      </header>
      <div className="w-full flex flex-col flex-1 items-center">
        <Content />
      </div>
      <div className="w-full flex flex-1 items-center justify-center"></div>
      <Footer />
    </div>
  );
}
