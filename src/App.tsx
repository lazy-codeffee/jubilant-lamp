import avatar from './assets/av.jpg';
function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white sticky shadow-sm top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="">
            <div className="text-xl font-bold text-gray-700">Donneric</div>
          </a>
          <div className="space-x-6 text-sm font-medium">
            <a href="#about" className="text-gray-600 hover:text-black transition">About</a>
            <a href="#projects" className="text-gray-600 hover:text-black transition">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center text-center">
        <section className="bg-slate-200 py-12 w-full">
        <div className="max-w-3xl mx-auto px-4 text-center">
            {/* Hero Section */}
            <img src={avatar} alt="Donneric's Avatar" className="w-64 h-64 rounded-full mx-auto mb-4" />
            <h1 className="text-[40px] font-bold text-gray-700 mb-4 cursor-pointer hover:text-gray-800">Hi, I'm Donneric</h1>
            <p className="text-md text-gray-600 mb-6">Hey there, welcome to my personal website!</p>
        </div>
        </section>
        <section id="about" className="py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            {/* About Me Section */}
            <h1 className="text-4xl font-semibold text-gray-700 mb-4 cursor-pointer hover:text-gray-800">About Me</h1>
            <p className="text-md text-gray-600 mb-6">I'm a 4th year IT student from the Philippines, 
              and I enjoy exploring new things in the world of programming. 
              When I'm not coding, I’m also into music production and video editing. 
            </p>
              {/* Tech Stack Icons */}
              <div className="flex justify-center items-center gap-6 mt-6 flex-wrap">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
                alt="PHP" className="w-10 h-10 cursor-pointer opacity-80 hover:opacity-100 transition duration-300" />
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" 
                alt="Arduino" className="w-10 h-10 cursor-pointer opacity-80 hover:opacity-100 transition duration-300" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                alt="JavaScript" className="w-7 h-7 cursor-pointer opacity-80 hover:opacity-100 transition duration-300" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
                alt="Bootstrap" className="w-8 h-8 cursor-pointer opacity-80 hover:opacity-100 transition duration-300" />

                <img src="https://cdn.simpleicons.org/tailwindcss/38BDF8" 
                alt="Tailwind CSS" className="w-9 h-9 cursor-pointer opacity-80 hover:opacity-100 transition duration-300" />
              </div>
          </div>
        </section>
        <section id="projects" className="bg-slate-200 py-12 w-full">
          <div className="max-w-3xl mx-auto px-4 text-center">
            {/* Projects Section */}
            <h1 className="text-4xl font-semibold text-gray-700 mb-4 cursor-pointer hover:text-gray-800">My Projects</h1>
            <p className="text-md text-gray-600 mb-6">Check out some of the cool stuff I’ve built so far!</p>
            {/* GitHub Link with Icon */}
              <a
                href="https://github.com/lazy-codeffee" // ← replace with your actual GitHub profile
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.932 0-1.31.467-2.382 1.235-3.222-.123-.302-.535-1.517.117-3.162 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0112 6.844a11.49 11.49 0 012.994.403c2.29-1.552 3.296-1.23 3.296-1.23.654 1.645.242 2.86.12 3.162.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.63-5.475 5.922.431.37.816 1.102.816 2.222 0 1.604-.015 2.897-.015 3.292 0 .323.216.699.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-medium">View My GitHub</span>
              </a>
          </div>
        </section>
        <section id="contact" className="py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            {/* Contacts Section */}
            <h1 className="text-4xl font-semibold text-gray-700 mb-4 cursor-pointer hover:text-gray-800">Contacts</h1>
            <p className="text-md text-gray-600 mb-6">Hit me up if you want to collaborate or work on something cool!</p>
            {/* Contact Stack Icons */}
            <div className="flex justify-center items-center gap-6 mt-6 flex-wrap">
              <a href="https://github.com/lazy-codeffee" target="_blank">
                <img src="https://cdn.simpleicons.org/github" 
                alt="GitHub" className="w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 transition duration-300" />
              </a>
              <a href="https://www.youtube.com/@imnotryoo" target="_blank">
                <img src="https://cdn.simpleicons.org/youtube" 
                alt="Youtube" className="w-7 h-7 cursor-pointer opacity-70 hover:opacity-100 transition duration-300" />
              </a>
              <a href="https://www.instagram.com/slowdown.donnie/" target="_blank">
                <img src="https://cdn.simpleicons.org/instagram" 
                alt="Instagram" className="w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 transition duration-300" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-700 text-white text-center py-4">
        <p className="text-sm">© 2025 Donneric Quinque LLC. All rights reserved.</p>
        <div className="mt-2">
        </div>
      </footer>
    </>
  );
}

export default App;



