import CIMAS from "../assets/buildcimas.jpg";
import Button2 from "../Utils/style";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 
function About (){
    const words = `Product and service
`;
    return( 
        <div className="lg:ml-14 ml-14 mr-14 p-9">  
         <div className="">
             <h1 className="lg:text-sm md:text-sm text-sm text-black/60 font-bold underline underline-offset-4 "> About Us     </h1>
             <p className=" lg:text-3xl md:text-3xl text-3xl text-amber-700  text-left">  CIMAS Factory: A Leading Cement<br/> Manufacturer in Djibouti . </p>
             </div>
            
             <div className="flex lg:flex-row flex-col gap-12">
             <div><p className="mt-14  text-black/60 text-justify"> Cimenterie d’Ali-Sabieh is a leading cement 
             manufacturing company located in Ali Sabieh, Djibouti. The company is dedicated to producing
              high-quality cement to meet the demands of both local and international markets. With a commitment
               to innovation, sustainability, and excellence, Cimenterie d’Ali-Sabieh aims to contribute significantly
                to the construction industry by providing reliable . The company employs
                 advanced technologies and adheres to strict quality control measures to ensure the superior quality of 
                 its products. Its strategic location 
              and robust distribution network enable it to serve a wide range of customers effectively</p>

 </div>

 <img 
  src={CIMAS} 
                    alt="Usine Cimenterie d'Ali-Sabieh" 
                    className="object-cover transition-transform   duration-500 hover:scale-105 lg:size-96 "
                />
                 
              </div>
                
                
                
                  </div>
        
        
      
    )
}
export default About;
