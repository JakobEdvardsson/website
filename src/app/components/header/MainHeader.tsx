"use client";
import Link from "next/link";

export default function MainHeader() {
    return (
        <nav className="w-screen h-fit overflow-hidden bg-header dark:bg-header_d">
            <div className="lg:text-2xl sm:text-lg text-sm py-4 lg:px-8 px-4 w-full sm:w-10/12 h-16 m-auto flex items-center justify-between">
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
