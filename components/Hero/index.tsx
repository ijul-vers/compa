import Link from "next/link";


const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 bg-cover bg-center overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:
pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[415px] 2xl:pb-[200px]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1546957221-37816b007052?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
        }}
      >
        <div className="container">
          <div className="relative z-20 -mx-4 flex flex-wrap justify-start absolute top-[-100px] left-[99px]"> 
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
          <div className="absolute inset-0 z-10 bg-black opacity-50 backdrop-blur-md"></div> {/* Blur effect */}
      </section>
    </>
  );
};

export default Hero;