import Bookmark from "@/app/_components/bookmark/bookmark";
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1200px]">
      <h1 className="flex items-center justify-center text-5xl font-bold">大阪万博</h1>
      <Bookmark />
      <Image
      className={""}
      src="/images/myakumyaku.jpg"
      alt=""
      width={800}
      height={800}
      />
    </div>
  );
}
