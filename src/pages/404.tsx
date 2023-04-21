import Navbar from "@/components/header/navbar";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function Page404() {
  return (
    <>
      <Navbar />
      <main className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-4">
        <h1 className="text-lg font-bold">The page you are looking forward does not exist</h1>
        <Link href={"/"}>
          <button className="h-12 w-32 px-4 flex items-center gap-4 bg-white dark:bg-very-dark-blue rounded-sm drop-shadow-md">
            <BsArrowLeft />
            Go back
          </button>
        </Link>
      </main>
    </>
  );
}
