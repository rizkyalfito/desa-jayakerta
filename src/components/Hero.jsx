const Hero = () => {
    return (
      <section className="bg-center bg-no-repeat bg-[url('./assets/hero-image.jpg')] bg-gray-600 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Selamat Datang di Desa Jayakerta
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Desa Jayakerta merupakan desa yang berfokus pada pengembangan teknologi, inovasi, dan pemberdayaan masyarakat untuk mencapai kesejahteraan bersama.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#news"
              className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-emerald-800 hover:bg-emerald-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 max-w-xs mx-auto"
            >
              Berita Terbaru
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  