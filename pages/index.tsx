import Bookmark from "@/app/_components/bookmark/bookmark";
import Image from "next/image";
import "@/styles/styles.css";  

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">大阪万博</h1>
      <Bookmark />
      <Image
        className="image"
        src="/images/myakumyaku.jpg"
        alt="みゃくみゃく"
        width={800}
        height={800}
      />
    </div>
  );
}
