import Link from "next/link";


export default function Areana() {
  return (
    <div className="w-[100%]  h-screen flex  justify-center items-center  flex-wrap font-thin">
      <div className="w-[75%]  flex flex-col  bg-ose-300  gap-2">
        <div className=" w-full animate-cards flex   flex-col gap-4 bg-yelow-400 items-center">
          <p className="text-3xl flex justify-center xs:text-5xl">HELLO 👋 </p>
        </div>
        <div className="flex   justify-center items-center flex-col gap-2">
        <div className="flex  bg-slae-200  justify-center items-center ">
          <p className="md:text-lg flex font-thin">
            Diving deep to understand the inner workings of web development.
            Frontend development has always been a captivating field for me.
            <br></br>It's where creativity meets technology, and it plays a
            pivotal role in shaping the user experience, Bridging creativity and
            code to shape the future of the web
          </p>
        </div>
        <div className="w-full flex   animate-cards  justify-center items-center ">
          <div className=" flex flex-row gap-2 items-center justify-center ">
            <div className="animate-cards font-bold  uppercase   hover:bg-white rounded-md flex  text-black bg-[#808080]   hover:text-black  items-center px-2">
              <Link
                href={"/rjaanit_cv.pdf"}
                target="_blank"
                className="rounded-md p-1 text-[13px] hover:cursor-pointer inline-block "
              >
                resume
              </Link>
            </div>
            <div className="font-bold uppercase  mr-auto rounded-md flex  hover:bg-[#e2e8e2]  border border-[#808080] text-[#808080]   hover:text-black  items-center px-2">
              <Link
                href="https://cal.com/reda-jaanit-tnxd5y"
                target="_blank"
                className="rounded-md p-1 text-[13px]     hover:cursor-pointer inline-block "
              >
                Book a call
              </Link>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2.345 2.245a1 1 0 0 1 1.102-.14l18 9a1 1 0 0 1 0 1.79l-18 9a1 1 0 0 1-1.396-1.211L4.613 13H10a1 1 0 1 0 0-2H4.613L2.05 3.316a1 1 0 0 1 .294-1.071z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

