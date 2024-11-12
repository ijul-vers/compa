import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
        <div className="-mx-4 flex flex-wrap justify-start">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp max-w-[800px] text-left"
              data-wow-delay=".2s"
            >
              <h1
                className="text-left my-1 mb-1 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight capitalize"
                  style={{
                    width: '750px',
                    color: '#F3CF02',
                  }}
              >
                DPM KM Universitas Muhammadiyah Purwokerto
              </h1>
            </div>
            <div
              className="wow fadeInUp max-w-[800px] text-left"
              data-wow-delay=".2s"
            >
              <h1
                className="text-left my-1 mb-1 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight capitalize"
                style={{
                  width: '750px',
                  height: '129px',
                  color: '#FFFFFF',
                  fontSize: '24px',
                }}
              >
                Parlemen Aspirasi Mahasiswa
              </h1>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
