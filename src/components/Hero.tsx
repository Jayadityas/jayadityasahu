import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import heroPortrait from "@/assets/jayaditya-profile.jpg";
const roles = ["Software Engineer", "ML Developer", "AI Researcher", "Future Entrepreneur"];
const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Hi! I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Jayaditya Sahu</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              <span className="text-primary font-semibold transition-all duration-500">{roles[currentRole]}</span>
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">Building intelligent systems that uplift people and technology with innovation, empathy, and purpose.</p>

            <p className="text-base text-muted-foreground">
              B.Tech CSE student at IIT Bhubaneswar (2023-2027), passionate about software development, machine learning, and research-driven innovation.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={() => scrollToSection("about")} variant="outline" size="lg">
                Know More
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 gradient-hero rounded-3xl blur-2xl opacity-30 animate-float"></div>
              <img src={heroPortrait} alt="Jayaditya Sahu - Software Engineer" className="relative rounded-3xl shadow-xl w-full hover-lift" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;