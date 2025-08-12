"use client";
import Hero from "./hero";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import Ciment from "../assets/Ciment_Arrey__1_-removebg-preview.png"
import { Link } from 'react-scroll';

function Header (){
return ( <div className="relative p-9">
    <img 
          src={Ciment}
          alt="Cement production at Cimenterie d'Ali-Sabieh"
          className="size-36 origin-bottom -rotate-12 drop-shadow-xl absolute inset-0 -z-50"
        />
    <div className="absolute inset-0 -z-10">
    <InteractiveGridPattern
      className={cn(
        "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 ")} />
  </div>
  <div className="flex flex-row gap-20 justify-center mt-7 text-sm font-bold text-amber-700  z-10  relative">

  <nav><Link to="About" smooth={true} duration={500}>About</Link></nav>
  <nav ><Link to="Product" smooth={true} duration={500}>Product</Link></nav>
  <nav ><Link to="Service" smooth={true} duration={500}>Service</Link></nav>
</div>  <Hero/></div>)
}

export default Header;
