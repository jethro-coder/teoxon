import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "./Hero";
import Content from "./Content";
import Contact from "./Contact";
import Blog from "./Blog";

export default function Home() {
  return (
    <div>
      <Hero />
      <Content />
      <Blog />
      <Contact />
    </div>
  );
}
