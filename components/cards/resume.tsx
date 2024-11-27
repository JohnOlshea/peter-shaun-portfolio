// import Image from "next/image";
import Card from "../ui/card";
// import SignatureImg from "@/public/assets/images/me/signature.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";
export default function ResumeCard() {
  return (
    <Card className="md:h-full ">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
      As a fullstack developer with over 5 years of experience, I specialize in designing and implementing scalable, user-centric web applications. I thrive at the intersection of creativity and logic, seamlessly bridging frontend experiences with robust backend systems. My technical expertise includes React, Python, Ruby, TypeScript, Node.js, MySQL, PostgreSQL, and Docker, enabling me to build everything from dynamic user interfaces to efficient data pipelines.
      I am passionate about solving complex problems with clean, maintainable code and collaborating with cross-functional teams to deliver impactful solutions.
      </p>
      {/*Signature*/}
      <div>
        {/* <Image src={SignatureImg} alt="mohamed hajji" /> */}
      </div>
      {/*Socials and resume btn*/}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/*Socials*/}
        <Socials />
        <Button>
          <FaDownload />
          Resume
        </Button>
      </div>
    </Card>
  );
}
