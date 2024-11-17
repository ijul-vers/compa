import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { img, nama, paragraph } = feature;

  return (
    <div className="mb-12 "> {/* Menggunakan mb-12 */}
      <div className="flex h-21 w-21 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"> {/* Menggunakan h-12 w-12 */}
        {img} 
      </div>
      <div className="ml-3"> {/* Bungkus nama dan paragraph, tambahkan margin kiri */}
        <h3 className="text-base font-bold text-black dark:text-white sm:text-lg lg:text-base xl:text-lg">
          {nama}
        </h3>
        <p className="text-sm text-body-color"> 
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;

