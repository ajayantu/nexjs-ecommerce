import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <div className="home_main_container">
        <div className="home_container">
          <div className="hero">
            <Image
              src="/heroimg.jpg"
              alt="Picture of the author"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "300px" }} // optional
            />
          </div>
        </div>
      </div>
    </>
  );
}
