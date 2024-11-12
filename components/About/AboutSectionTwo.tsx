import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  VISI
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Menjadi organisasi yang inovatif dan berkelanjutan dalam
                  menciptakan dampak positif bagi masyarakat serta lingkungan,
                  dengan mengedepankan integritas, profesionalisme, dan
                  kolaborasi.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  MISI
                </h3>
                <ol className="list-decimal text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li>
                    Memberdayakan anggota untuk terus berkembang secara
                    profesional dan pribadi melalui pelatihan dan pengembangan
                    kapasitas.
                  </li>
                  <li>
                    Mengimplementasikan program-program yang berdampak positif
                    pada kesejahteraan sosial, ekonomi, dan lingkungan.
                  </li>
                  <li>
                    Menjalin kemitraan strategis dengan berbagai pemangku
                    kepentingan guna menciptakan solusi berkelanjutan.
                  </li>
                  <li>
                    Mendorong budaya inovasi dan kolaborasi untuk mencapai
                    tujuan jangka panjang organisasi.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
