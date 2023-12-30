import Button from "@/core/components/button/Button";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      id="homebanner"
      className="flex md:flex-row flex-col-reverse lg:px-28 py-4 px-10 justify-center"
      // style={{
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundImage: "url(" + background.src + ")",
      // }}
    >
      <div className="flex-1 flex flex-col gap-6 justify-center  md:items-start items-center">
        <div className="flex flex-col gap-6 text-center w-fit">
          <h1 className="weak h1">
            Don’t Miss The
            <span className="primarytext block">Entertainment</span>
          </h1>
          <h6 className="weak h6">Book your Match Now!</h6>
        </div>

        <Link href="/auth/sign-up" className="p-4 text-center centered">
          <Button
            className="centered max-w-[100%]"
            btnclassName="rounded-3xl w-[130px]"
          >
            Sign Up
          </Button>
        </Link>
      </div>
      <div className="flex-1 flex justify-end pr-6">
        <img
          className="w-[100%] lg:w-auto"
          src="/imgs/main_page-trans.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
