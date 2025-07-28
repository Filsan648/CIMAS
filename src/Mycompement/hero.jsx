import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import "@fontsource/roboto";
import { WordRotate } from "@/components/magicui/word-rotate";
import Button from "../Utils/style";
import IMG from "../assets/IMG-20250227-WA0001-removebg-preview.png";
function Hero() {
  return (
  <div className='mt-16 ml-20 mr-14 '>
  <div className="flex flex-wrap items-center justify-between px-3.5">
  <div className="w-full md:w-1/2">

    <h1 className="font-semibold  text-4xl leading-tight   ">
      
      we produce  quality cement for 
      <WordRotate
      className="text-4xl font-bold text-amber-700 dark:text-white"
      words={[" Residential Projects", "Roads","Buildings","Bridges","Industrial Projects"]} />
    </h1>
    <p className="text-sm/6 mt-2 leading-relaxed  text-justify text-black/60 delay-[300ms] duration-[600ms]   taos:[transform:translate3d(-200px,0,0)_scale(1.2)] taos:opacity-0"  data-taos-offset="400">
    Cimenterie d'Ali-Sabieh, is a leading company in high-quality cement production. Our commitment to technological innovation and sustainable development enables us to effectively meet the growing demands of local and regional markets. </p>
  
   
  </div>

<div className="w-64 md:w-1/2 mt-8 md:mt-0 size-96 ">
<Spline scene="https://prod.spline.design/l1EyOJ0preTzX0Zf/scene.splinecode" />



</div>
</div>
 </div>
 );
}

export default Hero;

