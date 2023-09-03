import Image from "next/image";
import car1 from "./asset/car1.jpg";
import car2 from "./asset/car2.jpg";
import food1 from "./asset/food1.jpg";
import food2 from "./asset/food2.jpg";
import women1 from "./asset/women1.jpg";
import women2 from "./asset/women2.jpg";

export const PicCarousel = () => {
  return (
    <div className="carousel carousel-start rounded-box md:max-w-[600px] w-300">
      <div className="carousel-item ">
        <Image src={car1} alt="car1" width={300} height={350} quality={80} />
        <Image
          src={car2}
          alt="car2"
          width={300}
          height={350}
          quality={80}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="carousel-item">
        <Image
          src={food1}
          alt="car1"
          width={300}
          height={350}
          quality={80}
          style={{ objectFit: "cover" }}
        />
        <Image
          src={food2}
          alt="car2"
          width={300}
          height={350}
          quality={80}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="carousel-item ">
        <Image
          src={women1}
          alt="car1"
          width={300}
          height={350}
          quality={80}
          style={{ objectFit: "cover" }}
        />
        <Image
          src={women2}
          alt="car2"
          width={300}
          height={350}
          quality={80}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
