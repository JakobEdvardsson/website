"use client";
import Link from "next/link";

export default function MainHeader() {
    return (
        <nav className="w-screen h-fit overflow-hidden flex justify-center bg-header dark:bg-header_d">
            <div className="lg:text-2xlsm:text-lg text-sm w-[90%] sm:w-3/4 h-16 flex items-center justify-between">
                <div>
                    <Link
                        href={"#"}
                        className="lg:text-4xlxl sm:text-2xl text-xl font-extrabold"
                    >
                        EDV
                    </Link>
                </div>
                <div className="flex lg:gap-8 gap-6 uppercase items-center">
                    <Link href={"#"}>About Me</Link>
                    <Link href={"#"}>Projects</Link>
                    <Link href={"#"}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}
