
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import CIMENT from "../assets/GY-zdJuW4AIzVNh-removebg-preview (1).png";
import { Timeline } from "@/components/ui/timeline";
import team from "../assets/team.jpg"
import project from "../assets/project 1.jpg"
function Chose() {
  const data = [
    {
      title: "Work Experience ",
      content: (
        <div>
          <p className="text-black/60 dark:text-neutral-200 text-xs md:text-sm lg:text-xl font-normal mb-8">
          First and foremost, we are builders. The combined talent of our team has allowed us to produce high-quality cement and participate in major projects.
          </p>
         
        </div>
      ),
    },
    {
      title: "Machine Process ",
      content: (
        <div>
          <p className="text-black/60 lg:text-xl dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
          We use state-of-the-art machinery and processes to ensure the highest quality of cement production, meeting the specific needs of each project
          </p>
         
      
        </div>
      ),
    },
    {
      title: "Project Expertise ",
      content: (
        <div>
          <p className="text-black/60 lg:text-xl dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          With extensive experience in residential, commercial, and infrastructure projects, our expertise ensures the successful completion of your construction goals
          </p>
        
        </div>
      ),
    },
  ];
    return(
   
<div className="w-full p-9">
      <Timeline data={data} />
    </div>

    )

}
export default Chose;