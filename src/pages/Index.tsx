import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { useState } from "react";
const Index = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  return <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-semibold text-primary mb-2">AlgoUniversity</h3>
              <p className="text-muted-foreground">Full-stack MERN Online Judge platform with Docker and AWS deployment</p>
            </Card>
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-semibold text-primary mb-2">Asian Institute of Technology</h3>
              <p className="text-muted-foreground">Virtual Reality EdTech research intern developing immersive learning solutions for specially abled children</p>
            </Card>
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-semibold text-primary mb-2">Fincrux Technologies</h3>
              <p className="text-muted-foreground">Built ML pipelines for financial data analysis</p>
            </Card>
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-semibold text-primary mb-2">Fox Trading</h3>
              <p className="text-muted-foreground">Developed diabetes & sales forecasting ML models</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
            title: "File Sharing App",
            tech: "React, Node, MongoDB",
            github: "https://github.com/Jayadityas/File_sharing_App.git"
          }, {
            title: "CPU Scheduler",
            tech: "C++",
            github: "https://github.com/Jayadityas/CPU_scheduler.git"
          }, {
            title: "Superstore Billing",
            tech: "C++",
            github: "https://github.com/Jayadityas/Supermarket_bill_system.git"
          }, {
            title: "Algo Online Judge",
            tech: "MERN Stack",
            github: "https://github.com/Jayadityas/AlgoOJ.git"
          }].map(project => <Card key={project.title} className="p-6 hover-lift">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.tech}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> View Code
                  </a>
                </Button>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-primary mb-3">Languages</h3>
              <p className="text-sm text-muted-foreground">Python, C++, JavaScript, C</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-primary mb-3">Frontend</h3>
              <p className="text-sm text-muted-foreground">React, HTML, CSS, Bootstrap</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-primary mb-3">Backend</h3>
              <p className="text-sm text-muted-foreground">Node.js, Express</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-primary mb-3">Cloud & DB</h3>
              <p className="text-sm text-muted-foreground">AWS, MySQL, PostgreSQL, MongoDB, Docker, Git</p>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6">I’m a results-driven software developer and machine learning enthusiast passionate about transforming ideas into intelligent, reliable, and human-centric systems. Currently pursuing B.Tech in CSE at IIT Bhubaneswar, I’ve built solutions across MERN stack development, predictive analytics, and cloud deployment while contributing to research that blends AI and education.

I value efficiency, clarity, and purpose in every project — whether it’s optimizing performance, simplifying user experience, or scaling architecture for impact. With hands-on experience at organizations like AlgoUniversity, Fox Trading, and the Asian Institute of Technology (Bangkok), I bring a strong balance of technical execution and strategic problem-solving.

As someone who leads with curiosity and learns through building, my mission is to craft technology that improves lives, inspires teams, and sets new benchmarks of innovation.</p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark" asChild>
            <a href="/Jayaditya-Sahu-Resume.pdf" download="Jayaditya-Sahu-Resume.pdf">
              Download Resume
            </a>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Looking for opportunities in software development, ML, and AI research. Let's build something amazing together!
          </p>
          <div className="flex justify-center mb-8">
            <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Send me a message</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm onSuccess={() => setIsContactDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-primary py-12 px-4 text-center text-white">
        <p className="text-lg font-medium italic mb-6">"Relentless curiosity and compassion can turn any idea into an impact."</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="mailto:jayaditya.sahu@gmail.com" className="hover:scale-110 transition-transform">
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/jayaditya-sahu-0b1a922b4" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/Jayadityas" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Github className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm opacity-80">© 2025 Jayaditya Sahu. All rights reserved.</p>
      </footer>
    </div>;
};
export default Index;