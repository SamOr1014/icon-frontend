import { Button } from "@/components/Button";
import Link from "next/link";
import { PicCarousel } from "./Carousel";
import { TechStack } from "./TechStack";

export const Content = () => {
  return (
    <div className="md:max-w-[1000px] text-center flex flex-col flex-1 gap-7 py-10 md:px-0 px-5">
      <div className="md:w-[700px]">
        <div className="md:text-5xl text-3xl leading-10">
          Space For You to Create and Share Your Own Creations
        </div>
      </div>
      <div className="grid place-items-center">
        <Link href={"/register"}>
          <Button className="btn btn-neutral hover:btn-neutral-focus text-neutral-content w-50 text-xl">
            Join Us
          </Button>
        </Link>
      </div>
      <div className=" min-h-max mockup-window border bg-base-300 flex-1 flex flex-col">
        <div className="flex flex-1 justify-center items-center bg-base-200 h-full p-5">
          <PicCarousel />
        </div>
      </div>
      <div>
        <TechStack />
      </div>
    </div>
  );
};
