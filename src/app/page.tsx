import Image from "next/image";
import MainHeader from "./components/header/MainHeader";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-background dark:bg-background_d min-w-screen min-h-screen">
      <MainHeader></MainHeader>

      <div className="w-[90%] sm:w-3/4 h-fill flex justify-around items-center pt-16">
        <div className="w-2/3 mr-4">
          <p className="text-xl">Hi, my name is</p>
          <h2 className="text-5xl my-6">Jakob Edvardsson</h2>
          <b className="text-2xl my-2">
            I&apos;m a computer science student at Malmö University,
            who loves tinkering with computers and software!
          </b>
        </div>
        <div className="w-1/3">
          <Image
            src={"/Me.jpeg"}
            width={"200"}
            height={"200"}
            alt={"Picture of me"}
          ></Image>
        </div>
      </div>

      <div className="w-[90%] sm:w-3/4 h-fil flex flex-col items-center">
        <span className="w-full h-1 bg-header dark:bg-header_d mb-8 mt-12" />

        <h3 className="text-4xl mb-6">About Me</h3>
        <p className="text-xl mx-auto">
          I have been playing with computers since I was 1,5 years
          old, or so my parents tell me. I&apos;m in my second year of
          my bachelor&apos;s degree in computer science at Malmö
          University and I&apos;m enjoying it very much. I&apos;m
          currently very interested in Linux and open source software.
        </p>

        <span className="w-full h-1 bg-header dark:bg-header_d mb-8 mt-12" />

        <h3 className="text-4xl mb-6">Prior Work Experience</h3>

        <div className="flex flex-wrap w-full justify-evenly">
          {/* Cards */}


          <Card
            title={"Ica Malmborgs Limhamn"}
            date={"Mar 2020 - present"}
            description={'I work at the checkout and in the pre-store where I hand out packages and sell tobacco and games. I have Postnord and Svenska spel certificate and multiple Ica certificates.'}
          ></Card>
          
          <Card
            title={"Nordic Wellness Malmö"}
            date={"May 2019 – Mar 2020"}
            description={'Worked as a receptionist at Nordic Wellness Fairplay. Where I worked at the cash register, registered memberships and cleaned. I learned a lot about customer service and how to handle stressful situations.'}
          ></Card>



        </div>
      </div>
    </div>
  );
}
