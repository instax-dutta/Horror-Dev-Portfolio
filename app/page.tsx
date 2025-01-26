"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  Bug,
  Shield,
  Cloud,
  Gamepad,
  Linkedin,
  Github,
  Mail,
  Database,
  Server,
  Terminal,
  Globe,
  Cpu,
  Wifi,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/Footer"
import { Ghost } from "@/components/Ghost"
import dynamic from "next/dynamic"

const Typewriter = dynamic(() => import("react-simple-typewriter").then((mod) => mod.Typewriter), {
  ssr: false,
  loading: () => <span className="text-red-400">Developer</span>,
})

export default function DeveloperPortfolio() {
  const [section, setSection] = useState("home")

  return (
    <main className="min-h-screen p-2 sm:p-4 md:p-6 lg:p-8 font-crimson relative z-30">
      <div className="max-w-7xl mx-auto relative">
        <nav className="mb-8 sm:mb-12">
          <Card className="bg-black bg-opacity-80 border-red-800">
            <CardContent className="p-2 sm:p-4">
              <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {["home", "skills", "experience", "projects"].map((item) => (
                  <li key={item} className="relative">
                    <Button
                      variant="outline"
                      onClick={() => setSection(item)}
                      className="text-red-500 border-red-800 hover:bg-red-900 hover:text-red-100 text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-3 blood-drip blood-splash"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {section === "home" ? (
              <HomePage />
            ) : (
              <Card className="bg-black bg-opacity-80 border-red-800 skull-bg">
                <CardContent className="p-4 sm:p-8">
                  {section === "skills" && <Skills />}
                  {section === "experience" && <Experience />}
                  {section === "projects" && <Projects />}
                </CardContent>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </main>
  )
}

function HomePage() {
  const [showAltName, setShowAltName] = useState(false)
  const [glitchEffect, setGlitchEffect] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 500)
    }, 10000)

    const nameChangeInterval = setInterval(() => {
      setShowAltName(true)
      setTimeout(() => setShowAltName(false), 15000)
    }, 120000)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(nameChangeInterval)
    }
  }, [])

  return (
    <div className="text-center flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 md:mb-6 font-cinzel spooky-shadow text-flicker intense-glow ${glitchEffect ? "glitch" : ""}`}
        data-text={showAltName ? "Bhatakta Aatma" : "Tejes Munde"}
      >
        {showAltName ? "Bhatakta Aatma" : "Tejes Munde"}
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 md:mb-8 spooky-shadow">
        I'm a{" "}
        <span className="text-red-400">
          <Typewriter
            words={["Developer", "Game Tester", "Cybersecurity Enthusiast", "Cloud Engineer"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
        <a
          href="https://linkedin.com/in/tejesmunde"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-300 transition-colors float"
        >
          <Linkedin size={32} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://github.com/tejesmunde"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-300 transition-colors float"
          style={{ animationDelay: "0.2s" }}
        >
          <Github size={32} />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="mailto:tejes209@gmail.com"
          className="text-red-500 hover:text-red-300 transition-colors float"
          style={{ animationDelay: "0.4s" }}
        >
          <Mail size={32} />
          <span className="sr-only">Email</span>
        </a>
      </div>
      <Ghost />
    </div>
  )
}

function Skills() {
  const skills = [
    { name: "Python", icon: <Code className="w-8 h-8" /> },
    { name: "C/C++", icon: <Terminal className="w-8 h-8" /> },
    { name: "JavaScript", icon: <Globe className="w-8 h-8" /> },
    { name: "HTML/CSS", icon: <Code className="w-8 h-8" /> },
    { name: "SQL", icon: <Database className="w-8 h-8" /> },
    { name: "Embedded C", icon: <Cpu className="w-8 h-8" /> },
    { name: "AWS", icon: <Cloud className="w-8 h-8" /> },
    { name: "Docker", icon: <Server className="w-8 h-8" /> },
    { name: "Git", icon: <Github className="w-8 h-8" /> },
    { name: "Cybersecurity", icon: <Shield className="w-8 h-8" /> },
    { name: "Game Testing", icon: <Gamepad className="w-8 h-8" /> },
    { name: "Networking", icon: <Wifi className="w-8 h-8" /> },
  ]

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 font-cinzel text-center spooky-shadow intense-glow">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
          >
            <Card className="bg-black bg-opacity-60 border-red-800 hover:bg-red-900 transition-colors duration-300">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <motion.div
                  className="text-red-500 mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: index * 0.2 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center">{skill.name}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Experience() {
  const experiences = [
    {
      title: "Video Game Tester Freelancer",
      company: "Lionbridge Game Studios",
      date: "June 2024 – Present",
      description:
        "Playing games thoroughly, identifying bugs, issues, and providing suggestions for graphics, audio, gameplay, UI, storyline, and more.",
      icon: <Gamepad className="text-3xl sm:text-5xl mb-2 sm:mb-4" />,
    },
    {
      title: "Python Developer Intern",
      company: "OctaNet Services Pvt Ltd",
      date: "July 2024 – Aug 2024",
      description:
        "Developed a fully functional ATM simulation program using Python, demonstrating proficiency in object-oriented programming and financial software development.",
      icon: <Code className="text-3xl sm:text-5xl mb-2 sm:mb-4" />,
    },
    {
      title: "Cybersecurity Intern",
      company: "Threat Prism",
      date: "Nov 2022 - Jan 2023",
      description:
        "Developed and executed a project focused on system hacking and password attacks, resulting in a 40% reduction in vulnerability risks and safeguarding sensitive data for over 10,000 users.",
      icon: <Shield className="text-3xl sm:text-5xl mb-2 sm:mb-4" />,
    },
  ]

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 font-cinzel text-center spooky-shadow intense-glow">
        Experience
      </h2>
      <div className="relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-6 sm:mb-8 flex flex-col sm:flex-row"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
          >
            <div className="flex-grow-0 flex-shrink-0 w-full sm:w-12 mb-4 sm:mb-0 sm:mr-4 relative">
              <div className="hidden sm:block h-full w-1 bg-red-800 absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-12 h-12 mx-auto sm:mx-0 rounded-full bg-red-900 border-4 border-red-800 flex items-center justify-center">
                {exp.icon}
              </div>
            </div>
            <Card className="bg-black bg-opacity-60 border-red-800 flex-grow">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{exp.title}</CardTitle>
                <CardDescription className="text-base sm:text-lg md:text-xl">{exp.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-red-400 mb-2 sm:mb-4">{exp.date}</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const projects = [
    {
      title: "ATM Simulation",
      tech: "Python, SQLite, Tkinter",
      description:
        "Developed and implemented a robust back-end using Python and SQLite, showcasing strong object-oriented programming skills and database management expertise.",
      icon: <Code className="text-3xl sm:text-5xl mb-2 sm:mb-4" />,
      github: "https://github.com/yourusername/atm-simulation",
    },
    {
      title: "Cloud Chat Bot",
      tech: "AWS Lex",
      description:
        "Crafted a creative CarOrdering Chatbot with Amazon Lex to simplify the car-buying process. Leveraged sophisticated features, such as natural language processing, to enhance user interactions.",
      icon: <Cloud className="text-3xl sm:text-5xl mb-2 sm:mb-4" />,
      github: "https://github.com/yourusername/cloud-chat-bot",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 font-cinzel text-center spooky-shadow intense-glow">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
          >
            <Card className="bg-black bg-opacity-60 border-red-800 hover:bg-red-900 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center">
                  <motion.div
                    className="mr-2 sm:mr-4 text-red-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    {project.icon}
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base md:text-lg mt-2">{project.tech}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Badge
                  variant="outline"
                  className="text-red-400 border-red-800 text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2"
                >
                  Project
                </Badge>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-300 transition-colors"
                >
                  <Button variant="outline" className="border-red-800 hover:bg-red-900 text-xs sm:text-sm md:text-base">
                    <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> GitHub
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

