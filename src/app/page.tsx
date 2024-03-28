import Image from "next/image";
import MainHeader from "./components/header/MainHeader";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-background dark:bg-background_d min-w-screen min-h-screen">
      <MainHeader></MainHeader>

      <div className="w-[90%] sm:w-3/4 h-fill flex justify-between items-center mt-5">
        <div className="w-2/3 mr-4 flex flex-col justify-between">
          <p className="text-lg">Hi, my name is</p>
          <h2 className="text-4xl font-bold my-6">Jakob Edvardsson</h2>
          <b className="text-xl my-2">
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

      <div className="w-[90%] sm:w-3/4 h-fill flex flex-col items-center">
        <span className="w-full h-1 bg-header dark:bg-header_d mb-6 mt-10" />

        <h3 className="text-3xl mb-6">About Me</h3>
        <p className="text-xl mx-auto">
          I have been tinkering with computers since I was 1,5 years
          old, or so my parents tell me. I&apos;m in my second year of
          my bachelor&apos;s degree in computer science at Malmö
          University and I&apos;m enjoying it very much.
          <br></br>
          I&apos;m currently very interested in Linux and open source software.
          I&apos;m also very interested in building and writing firmware for
          ergonomic keyboards.
        </p>
        <span className="w-full h-1 bg-header dark:bg-header_d mb-8 mt-12" />



        <h3 className="text-3xl mb-6">Projects</h3>

        <div className="flex flex-wrap w-full justify-evenly">
          {/* Projects */}

          <Card
            title={"WeatherWear"}
            description={'A web application that suggests what to wear based on the current weather. It was written in TypeScript using Next.js for both frontend and backend. It uses PostgreSQL for its database with the help of Kysely for easier database queries.'}
            link={"https://github.com/Luxcorel/weatherwear"}
          ></Card>
          <Card
            title={"OnlyFin"}
            description={'An online platform where stock analysts can share different kinds of analysis in the form of graphs. The application is able to visualize data in various ways, and allows editing the data in an Excel like fashion. Onlyfin is written in TypeScript using the Next.js framework.'}
            link={"https://github.com/JakobEdvardsson/OnlyFin"}
          ></Card>

          <Card
            title={"OnlyFin Backend"}
            description={'Backend for Onlyfin, written in Spring Boot with REST-like API endpoints with a PostgreSQL database.'}
            link={"https://github.com/JakobEdvardsson/OnlyFinBackend"}
          ></Card>

          <Card
            title={"SvexasHoldem"}
            description={'A multiplayer poker game, server, and client written in Java. The objective of this project was to replicate legacy code for the purpose of enhancing and testing it.'}
            link={"https://github.com/JakobEdvardsson/SvexasHoldem"}
          ></Card>

          <Card
            title={"LiftingStack"}
            description={'An Android app that helps you keep track of your weightlifting progress. Written in Java and XML and uses Gradle as a build and dependency management tool.'}
            link={"https://github.com/JakobEdvardsson/LiftingStack"}
          ></Card>



          <span className="w-full h-1 bg-header dark:bg-header_d mb-8 mt-12" />
        </div>

        {/* Prior work */}

        <h3 className="text-3xl mb-6">Prior Work Experience</h3>

        <div className="flex flex-wrap w-full justify-evenly">

          <Card
            title={"Ica Malmborgs Limhamn"}
            date={"Mar 2020 - present"}
            description={'I worked in the post office and in the shop. I have several ICA certificates, and I have a postal and gaming license.'}
          ></Card>

          <Card
            title={"Nordic Wellness Malmö"}
            date={"May 2019 - Mar 2020"}
            description={'Worked as a receptionist at Nordic Wellness Fairplay. Where I worked at the cash register, registered memberships and cleaned. I learned a lot about customer service and how to handle stressful situations.'}
          ></Card>



          <Card
            title={"Malmö Arena, Malmö"}
            date={"Sep 2018 - Aug 2019"}
            description={'Worked in the food kiosk where I cooked the food but also stood at the checkout.'}
          ></Card>
          <Card
            title={"Malmö Arena Hotel, Malmö"}
            date={"May 2017 - Aug 2019"}
            description={'Worked as a server at the breakfast buffet of a large hotel, where I was responsible for the food but also the serving.'}
          ></Card>

          <span className="w-full h-1 bg-header dark:bg-header_d mb-8 mt-12" />
        </div>

        


      </div>
    </div>
  );
}
