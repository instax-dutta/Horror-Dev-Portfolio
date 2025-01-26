import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-6 sm:mt-8 p-2 sm:p-4 bg-black bg-opacity-80 border-t border-red-800 text-red-500">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-xs sm:text-sm">
          © Tejes Munde | Coded by{" "}
          <a
            href="https://github.com/instax-dutta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-300 transition-colors"
          >
            SDAD
          </a>{" "}
          <span className="inline-block animate-pulse glow-text">😈</span>
        </p>
      </div>
    </footer>
  )
}

