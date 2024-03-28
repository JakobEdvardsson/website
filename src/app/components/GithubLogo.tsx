'use client';
import { useEffect, useState } from "react";

export default function GithubLogo() {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, [])

    return (
        <img className="w-full" src={theme ? "github-mark-white.svg" : "github-mark.svg"}></img>
    )
}
