import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Content } from "@/components/Content";

export default function Me() {
  return (
    <>
      <div classNameName=" w-[978px] h-[794px] flex flex-col border border-gray-300 ">
        <Header />
        <About />
        <Content />
      </div>
    </>
  );
}
