"use client";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Banner() {
  return (
    <div className="flex h-fit">
      <section className="flex w-2/5 justify-center items-start bg-[url(/img/smoke.png)] bg-cover bg-no-repeat">
        <div className="text-[1.3rem] text-left w-[85%] leading-6 z-[2]">
          <div className="text-2xl z-[2] mb-[2rem]">
            <div className="mt-24 mb-16 text-6xl font-bold tracking-tighter text-pink-500 text-nowrap text-start">
              Start Your Journey Here
            </div>
            <span className="font-sans font-bold text-black">with </span>
            <span className="font-sans font-extrabold dekbanjarnkim animate-text-gradient">
              DekBanJarnKim{" "}
            </span>
            <span className="font-sans font-bold text-black">
              car rental system
            </span>
          </div>
          <div className="">
            <span className="font-sans text-black">Welcome to </span>
            <span className="font-sans font-extrabold dekbanjarnkim animate-text-gradient">
              DekBanJarnKim
            </span>
            <span className="font-sans text-black">
              {" "}
              Car Rental System, where renting a car is as easy as a few clicks.
              Browse, book, and hit the road hassle-free with our streamlined
              platform. With a range of options to fit your budget and
              preferences, your perfect ride awaits. Start your journey with
              confidence today.
            </span>
          </div>
          <div className="bg-pink-500 shadow w-[40%] py-4 select-none my-8 gap-3 cursor-pointer transition-transform flex items-center text-2xl justify-center rounded-md text-white font-[600]">
            <ShoppingCartIcon />
            <Link href={"/cars"} prefetch={true} draggable={false}>
              Rent Now
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-pink-100 w-3/5 col-span-3 bg-[url(/img/bgscene.png)]  bg-cover bg-no-repeat flex items-center justify-start">
        <Image
          src="/img/homecar.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="homecar"
          className="w-full h-auto transition -translate-x-[6%]"
          draggable={false}
        />
      </section>
      <footer className="bottom-0 left-0 w-full absolute flex items-end justify-center z-[5]">
        <Link
          href={"#promotions"}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("promotions")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Image
            src="/img/arrowdown2.png"
            className="object-contain cursor-pointer animate-bounce"
            draggable={false}
            width={60}
            height={60}
            alt="arrow down"
          />
        </Link>
      </footer>
    </div>
  );
}
