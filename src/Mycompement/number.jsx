import { NumberTicker } from "@/components/magicui/number-ticker";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import image1 from "../assets/construction.jpg";
import image2 from "../assets/construction2.jpg";
import image3 from "../assets/IMG-20250227-WA0001.jpg";
import image4 from "../assets/construction3.jpg";
import Button from "../Utils/style";
function Number() {
  const first = "employer";
  const second = "project";
  const third = "customer";
  const imgRefs = useRef([]);
  const textRefs = useRef([]);
  const minSize = 300; // Taille minimale de l'image
  const maxSize = 400; // Taille maximale de l'image
 useEffect(() => {
    // Animation d'apparition des textes
    gsap.fromTo(textRefs.current, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.2, // Espacement entre les animations des textes
      duration: 1.2,
      ease: "power2.out",
    });

    // Effet de parallax sur les images en fonction du scroll
    const handleScroll = (event) => {
      event.preventDefault(); // Empêche le scroll de la page

      // Animation de la largeur de l'image en fonction du scroll
      gsap.to(imgRefs.current, {
        width: `+=${-event.deltaY * 0.1}px`,
        duration: 0.3,
        ease: "power2.out",
        onUpdate: () => {
          imgRefs.current.forEach((img) => {
            let currentWidth = parseFloat(img.style.width);
            if (currentWidth < minSize) img.style.width = `${minSize}px`;
            if (currentWidth > maxSize) img.style.width = `${maxSize}px`;
          });
        },
      });

      // Animation de la teinte et de la rotation des images
      const scale = Math.max(0, Math.min(1, event.deltaY * 0.0005));
      const hueRotateValue = (scale * 360) % 360;

      gsap.to(imgRefs.current, {
        filter: `hue-rotate(${hueRotateValue}deg)`,
        rotation: event.deltaY * 0.1, // Rotation de l'image
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Ajout d'un effet de zoom et de rotation sur les images lors du survol
    imgRefs.current.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.1,
          rotation: 10,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });

    // Animation de parallaxe des textes
    gsap.to(textRefs.current, {
      y: "-=50",
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRefs.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    // Ajout d'un listener de scroll
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section className="p-9">
      <div >
        <div className="ml-14 mr-14">
          <h1 className="lg:text-sm md:text-sm text-sm text-black/60 font-bold underline underline-offset-4">
            Service
          </h1>
          <p className="lg:text-3xl md:text-3xl text-3xl text-amber-700 text-left">
            Ensuring Quality and Durability of Your Constructions with Timely Cement Deliveries
            </p> <div>
          <p className="mt-14  text-black/60 text-justify">
          Our service ensures the quality and durability of your
           constructions through timely and reliable cement deliveries. We understand
            that every construction project relies on high-quality materials, which is
             why we are committed to providing cement that meets the highest industry 
             standards. Our deliveries are made within the agreed timelines, ensuring 
             that your work progresses smoothly without delays. By choosing our service
             , you benefit from an efficient and professional solution that supports th
             e strength and longevity of your constructions, while adhering to your 
             schedules and quality requirements.
             </p>
             <Button className='mt-9'> <button> Discover
             </button></Button>
             </div>
        </div>
 <div className="flex justify-center items-center min-h-screen space-x-4 overflow-hidden mt-20">
          
          <img
            ref={(el) => (imgRefs.current[1] = el)}
            src={image2}
            className="shadow-lg transition-all duration-300 rounded-lg"
            style={{ width: "300px", height: "auto" }}
          />
          <img
            ref={(el) => (imgRefs.current[0] = el)}
            src={image1}
            className="shadow-lg transition-all duration-300 rounded-lg"
            style={{ width: "300px", height: "auto" }}
          />
          <img
            ref={(el) => (imgRefs.current[2] = el)}
            src={image3}
            className="shadow-lg transition-all duration-300 rounded-lg"
            style={{ width: "300px", height: "auto" }}
          />
          <img
            ref={(el) => (imgRefs.current[3] = el)}
            src={image4}
            className="shadow-lg transition-all duration-300 rounded-lg h-96 size-96"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      </div>

      <div className="relative flex h-[800px] w-full flex-col overflow-hidden rounded-lg bg-background">
        <div className="absolute inset-0 -z-10">
          <InteractiveGridPattern
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "-inset-x-2 inset-y-[-20%] h-[100%] skew-y-12"
            )}
          />
        </div>

        {/* Ajout de l'animation de textes */}
        <div className=" border-t-2 border-t-gray-300  border-b-2 border-b-gray-300">
        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-52 justify-center p-20   ">
          <div ref={(el) => (textRefs.current[0] = el)}>
            <NumberTicker
              value={150}
              text={first}
              className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black/60 dark:text-white"
            />
          </div>
          <div ref={(el) => (textRefs.current[1] = el)}>
            <NumberTicker
              value={1000}
              text={second}
              className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black/60 dark:text-white"
            />
          </div>
          <div ref={(el) => (textRefs.current[2] = el)}>
            <NumberTicker
              value={100}
              text={third}
              className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black/60 dark:text-white"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Number;
