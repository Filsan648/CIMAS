import Header from "../Mycompement/Header";
import Hero from "../Mycompement/hero";
import Section1 from "../Mycompement/section1";
import Service from "../Mycompement/service";
import Product from "../Mycompement/product";
import About from "../Mycompement/about";
import Number from "../Mycompement/number";
import Commentaire from "../Mycompement/commentaire";
import Chose from "../Mycompement/section1";
import { HeroScrollDemo } from "../Mycompement/emble";
import Footer from "../Mycompement/footer";
function Home(){
    return(
    <body className=' bg-gray-600/5 font-serif   ' >
    <div className="">
       <div className=" border-b-2 border-b-gray-300">
 <div className=" ml-4 mr-4 border-r-2 border-r-gray-300 border-l-2 border-l-gray-300">
    <Header />
     </div>
    </div>
    

    <div className=" border-b-2 border-b-gray-300">
 <div id="About" className=" ml-4 mr-4 border-r-2 border-r-gray-300 border-l-2 border-l-gray-300">
    <About />
     </div>
    </div>

    <div id="Product" className="  border-b-2 border-b-gray-300">
      <div className=" ml-4 mr-4 border-r-2 border-r-gray-300 border-l-2 border-l-gray-300">
    <Product />
    </div>
    </div>
  
    <div id="Service" className="  ">
            <div className=" ml-4 mr-4 border-r-2 border-r-gray-300 border-l-2 border-l-gray-300">

    
    <Number />
</div>
    </div>
    <div className=" border-b-2 border-b-gray-300">
                  <div className=" ml-4 mr-4 border-r-2 border-r-gray-300 border-l-2 border-l-gray-300">

  <HeroScrollDemo  /> 
     </div>
  </div>
  <div className=" border-b-2 border-b-gray-300">
                  <div className=" ml-4 mr-4 border-r-2 border-r-gray-300 border-l-2 border-l-gray-300">

  <Chose />
     </div>
  </div>

  

<div className="">
    
<Commentaire  /> 
  
    
  
      </div>
      <Footer/> 
    </div>
    </body>)
}
export default Home;