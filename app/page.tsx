import HeroHeader from "@/components/header";
import InProgressBanner from "@/components/In-progress";
//import Projects from "@/components/Projects";
import TechStack from "@/components/techStack";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <InProgressBanner />
      <FloatingNav className="string" navItems={navItems} />
      <HeroHeader />
      <TechStack />
    </>
  );
}
