
const carservise=[
   {id:1,
    title:"High-Quality Cement Production and Reliable Delivery",
    content:"We produce high-quality cement for various projects, ensuring the strength and durability of your constructions.We ensure timely delivery of cement to your construction sites, helping you meet your construction deadlines"} 
 , {  id:2,
    title:"Expert Consulting and Technical Support:",
    content:"Our experts provide consulting services to help you choose the best products and methods for your residential and industrial projects.We offer full technical support to help you optimize the use of our cement in your projects."},
{id:3,
 title:"Experience in Residential, Commercial, and Infrastructure Projects",
    content:"We have extensive experience supplying cement for residential and commercial projects, contributing to over 500 custom homes and more than 100 commercial projects.We participate in major infrastructure projects, such as the construction of roads and bridges, ensuring the quality and durability of these essential structures."
}
]
   

function Service (){
    return( 
        <div className="bg-white rounded-xl p-9">
             <h1 className="  text-center mb-10">
             Our Services
              </h1>
    <div className="flex flex-row">
        { carservise.map((ser)=>(
                <div className="flex flex-col bg-white/50  m-2 p-4 rounded-xl"  key={ser.id}>
                    
                     <h2 className="text-xl font-medium">
                        {ser.title}
                      </h2>
                      <p className="mt-11">
                        {ser.content}
                      </p>
                       
                       </div>
                     
            ))
        }
        <div className="">
        </div>
     
 </div>
 </div>)
}
export default Service;
