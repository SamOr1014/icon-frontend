import { Content } from "./_home/_components/Content";
import { Footer } from "./_home/_components/Footer";
import { NavBar } from "./_home/_components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 backdrop-blur-md">
        <NavBar />
      </header>
      <div className="w-full flex flex-col flex-1 items-center">
        <Content />
      </div>
      <Footer />
    </main>
  );
}
