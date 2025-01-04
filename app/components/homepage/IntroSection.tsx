export default function IntroSection() {
  // Smooth scroll handler
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/*  Intro Tagline */}
      <div className="text-6xl leading-tight">
        <span className="text-[#F999F9] hover:cursor-pointer">Tuan Dau </span>
        is a software engineer <span className="text-[#9999FF]">for hire</span>.
        <p>
          <span>{'>>'} Prev @</span>{' '}
          <span className="text-white transition-colors duration-200 ease-in-out hover:text-red-500 hover:cursor-pointer">
            Tesla
          </span>
          ,{' '}
          <span className="text-white transition-colors duration-200 ease-in-out hover:text-gray-500 hover:cursor-pointer">
            CertiK
          </span>
          {', '}
          <span className="text-white transition-colors duration-200 ease-in-out hover:text-green-500 hover:cursor-pointer">
            Arima Data
          </span>
        </p>
        <p>{'>> '}From Toronto, Canada</p>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Button Row */}
      <div className="flex w-full items-center text-3xl justify-between">
        {/* CTA Container */}
        <div className="flex space-x-8">
          <div className="relative">
            {/* See My Work */}
            <div className="relative">
              {/* Hire Me */}
              <div className="absolute w-full text-opacity-0 h-20 rounded-md bg-[#ffbaff] z-0 text-black">
                Hire Me →
              </div>
              <div className="relative transition-all duration-300 ease-in-out flex items-center justify-center text-black px-8 h-20 rounded-md bg-[#f999f9] hover:cursor-pointer z-10 -top-2 -left-2 hover:top-0 hover:left-0">
                Hire Me →
              </div>
            </div>
          </div>
          {/* See My Work */}
          <div className="relative">
            <div className="absolute w-full text-opacity-0 h-20 rounded-md bg-[#c4c4ff] z-0 text-black">
              See My Work ↓
            </div>
            <a
              className="relative transition-all duration-300 ease-in-out flex items-center justify-center text-black px-8 h-20 rounded-md bg-[#9999ff] hover:cursor-pointer z-10 -top-2 -left-2 hover:top-0 hover:left-0"
              href="#section1"
              onClick={(e) => handleSmoothScroll(e, 'section1')}
            >
              See My Work ↓
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
