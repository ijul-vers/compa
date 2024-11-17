import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Pengurus Dewan Perwakilan Mahasiswa"
            paragraph="Menetapkan ulang nama-nama dibawah ini sebagai Pengurus
            Dewan Perwakilan Mahasiswa Universitas Muhammadiyah Purwokerto
            Periode 2023/2024."
            img="/path/to/your/image.jpg" // Tambahkan properti img di sini
            center
          />

          <div className="grid grid-cols-5 gap-2">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
