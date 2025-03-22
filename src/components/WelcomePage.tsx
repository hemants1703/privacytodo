import { Archive, ArrowRight, ImportIcon, LockKeyhole } from "lucide-react";
import { useState, useEffect } from "react";

export default function WelcomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [liftUpScreen, setLiftUpScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center flex-col text-white w-full min-h-screen bg-black transition-all duration-1000 transform ${
          liftUpScreen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Enhanced animated background with multiple layers */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#0f172a_0%,#000_70%)] opacity-80"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
        </div>

        {/* Improved grid pattern with subtle animation */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgNjBIMFYwaDYwdjYweiIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTYwIDYwVjBoLTFsMSAxSDMwdjI5aDMwdjMwaDFsLTEgMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-40 animate-[pulse_15s_ease-in-out_infinite]"></div>

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-blue-500/10 rounded-full blur-md animate-float"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        <div
          className={`max-w-4xl mx-auto p-10 bg-black/40 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-blue-900/30 relative overflow-hidden transition-all duration-1000 ${
            isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Enhanced glow effects */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-500/10 blur-3xl"></div>
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-32 h-96 bg-blue-500/10 blur-3xl"></div>
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-32 h-96 bg-indigo-500/10 blur-3xl"></div>

          <div className="text-center mb-8 relative">
            <div 
              className={`inline-block p-4 bg-gradient-to-br from-blue-500/30 to-blue-900/30 rounded-full mb-5 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-1000 ${
                isLoaded ? "opacity-100 transform-none" : "opacity-0 -translate-y-4"
              }`}
            >
              <LockKeyhole className="w-12 h-12 text-blue-400 animate-[pulse_3s_ease-in-out_infinite]" />
            </div>
            <h1 
              className={`text-5xl font-black mb-3 text-white tracking-tight transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 transform-none" : "opacity-0 -translate-y-4"
              }`}
            >
              PrivacyTodo
            </h1>
            <p 
              className={`text-2xl text-blue-300 font-light tracking-wide transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 transform-none" : "opacity-0 -translate-y-4"
              }`}
            >
              Your tasks. Your privacy. Your control.
            </p>
            <div 
              className={`mt-6 text-center text-xs transition-all duration-1000 delay-400 ${
                isLoaded ? "opacity-100 transform-none" : "opacity-0 -translate-y-4"
              }`}
            >
              <p className="flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-1 text-blue-500/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-blue-500 hover:text-blue-400 transition-colors">
                  No tracking. No cookies. Just your tasks.
                </span>
              </p>
            </div>
          </div>

          <div 
            className={`mb-10 text-center transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="mb-8 text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
              Welcome to the most private To Do app you'll ever use! Your tasks
              stay exclusively in your browser –{" "}
              <span className="text-blue-300 font-medium">
                no data ever leaves your device
              </span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="group p-5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  <LockKeyhole className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2 text-lg group-hover:text-white transition-colors">100% Private</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  No data is stored on any server
                </p>
              </div>

              <div className="group p-5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  <Archive className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2 text-lg group-hover:text-white transition-colors">Browser Storage</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Your data persists across sessions
                </p>
              </div>

              <div className="group p-5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  <ImportIcon className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2 text-lg group-hover:text-white transition-colors">Import/Export</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Backup and restore your tasks
                </p>
              </div>
            </div>
          </div>

          <div 
            className={`flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="text-center md:text-left">
              <p className="text-sm text-blue-400 font-medium bg-blue-900/20 rounded-full py-2 px-4 inline-block border border-blue-900/40">
                No account required. Start instantly.
              </p>
            </div>
            <button 
              onClick={() => setLiftUpScreen(true)} 
              className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl font-medium text-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1 hover:from-blue-500 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
            >
              Get Started
              <ArrowRight className="w-5 h-5 inline-block ml-2 transform transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}