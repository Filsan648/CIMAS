"use client";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import Button from "../Utils/style";
import styled from "styled-components";
import image1 from "../assets/vlcsnap-2024-02-18-13h09m51s431.png";
import image2 from "../assets/IMG-20250227-WA0001.jpg";
import image3 from "../assets/resac.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Importer ScrollTrigger pour lier les animations au scroll

gsap.registerPlugin(ScrollTrigger);

const images = [
  image1,
  image2,
  image3,
];

function Product() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Initialisation de l'animation GSAP
    gsap.utils.toArray(imageRefs.current).forEach((image, index) => {
      gsap.fromTo(
        image,
        {
          opacity: 0,
          x: index % 2 === 0 ? -200 : 200, // Position initiale décalée
          y: 100,
        },
        {
          opacity: 1,
          x: 0, // Position finale après animation
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: image,
            start: "top 80%", // Quand l'image entre dans la fenêtre
            end: "bottom top",
            scrub: true, // Animation fluide avec le défilement
          },
        }
      );
    });

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-14 mr-14 p-5">
      <div className="relative flex h-[800px] w-full flex-col overflow-hidden rounded-lg bg-background">
        <div className="absolute inset-0 -z-10">
          <InteractiveGridPattern
            className={cn(
              "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
              "-inset-x-55 inset-y-[-40%] h-[200%] skew-y-12"
            )}
          />
        </div>

        <div>
          <h1 className="text-sm text-black/60 font-bold underline underline-offset-4">
            Our Product
          </h1>
          <p className="text-3xl mb-10 text-amber-700">
            High-Quality Portland Cement for <br />Durable and Versatile Construction.
          </p>
        </div>

        <div className="mt-32 gap-60 flex justify-between">
          <div className="w-1/2">
            <h2 className="text-black/60 text-left">
              Cimenterie d’Ali-Sabieh primarily produces high-quality Portland cement. This cement is known for its
              durability, strength, and versatility, making it suitable for a wide range of construction applications.
              The company's Portland cement meets stringent industry standards and is designed to provide excellent
              performance in various environmental conditions. By employing advanced manufacturing processes and
              quality control measures, Cimenterie d’Ali-Sabieh ensures that its cement consistently delivers reliable
              and superior results for its customers.
            </h2>
           
          </div>

          <div className="w-1/2 -mt-36">
            <div className="main">
              <img ref={(el) => (imageRefs.current[0] = el)} src={image3} alt="Image 1" />
              <img ref={(el) => (imageRefs.current[1] = el)} src={image2} alt="Image 2" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
