import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Nasri from "../assets/al nasri.png";
import Buruj from "../assets/al-buuruj.png";
import Hawk from "../assets/hawk.jpg";
import Hamdani from "../assets/hamdani.png";

const Commentaire = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const reviews = [
    {
      id: 1,
      name: "Al buuruj",
      username: "@al buuruj",
      body: (
        <p>
          The cement is strong and reliable. <br />It is perfect for construction projects.
        </p>
      ),
      img:Buruj,
    },
    {
      id: 2,
      name: "AL hamdani",
      username: "@al hamdani",
      body: (
        <p>
          The factory delivers on time. <br /> This helps keep projects on schedule.
        </p>
      ),
      img: Hamdani,
    },
    {
      id: 3,
      name: "AL NASRI",
      username: "@al nasri",
      body: (
        <p>
          The company cares about the environment. <br />They use sustainable production methods.
        </p>
      ),
      img:Nasri,
    },
    {
      id: 4,
      name: "HAWK",
      username: "@hawk",
      body: (
        <p>
          The staff is helpful and professional. <br />They answer questions quickly.
        </p>
      ),
      img: Hawk,
    },
  ];
  const reviews2 = [
   
   
  
    {
      id: 4,
      name: "HAWK",
      username: "@hawk",
      body: (
        <p>
          The staff is helpful and professional. <br />They answer questions quickly.
        </p>
      ),
      img: Hawk,
    },
    {
      id: 1,
      name: "Al buuruj",
      username: "@al buuruj",
      body: (
        <p>
          The cement is strong and reliable. <br />It is perfect for construction projects.
        </p>
      ),
      img:Buruj,
    },
    {
      id: 2,
      name: "AL hamdani",
      username: "@al hamdani",
      body: (
        <p>
          The factory delivers on time. <br /> This helps keep projects on schedule.
        </p>
      ),
      img:Hamdani
    },
    {
      id: 3,
      name: "AL NASRI",
      username: "@al nasri",
      body: (
        <p>
          The company cares about the environment. <br />They use sustainable production methods.
        </p>
      ),
      img: Nasri,
    },
  ];

  useEffect(() => {
    // S'assurer que les stylesheets sont accessibles
    const styleSheet = document.styleSheets[0];
    const styleSheet1 = document.styleSheets[1];
  
    if (styleSheet) {
      styleSheet.insertRule(
        `@keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-15%); }
        }`,
        styleSheet.cssRules.length
      );
    }
  
    if (styleSheet1) {
      styleSheet1.insertRule(
        `@keyframes scroll1 {
          from { transform: translateX(-15%); }
          to { transform: translateX(0); }
        }`,
        styleSheet1.cssRules.length
      );
    }
  }, []);
  
  return (
    <div className="p-9">
      <h1 className="text-center text-4xl text-amber-700 font-medium mb-24 mt-20">
        See awesome feedback hear from our clients.
      </h1>
      <div className="flex flex-col">
        <div
          style={styles.scrollContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            style={{
              ...styles.scrollContent,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} style={styles.scrollItems}>
                {reviews.map((index) => (
                  <figure
                    key={index.id}
                    className={cn(
                      "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <img className="rounded-full" width="32" height="32" alt="" src={index.img} />
                      {console.log(index.img)}
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                          {index.name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40 italic">
                          {index.username}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm mt-7 font-normal">{index.body}</div>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          style={styles1.scrollContainer1}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            style={{
              ...styles1.scrollContent1,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} style={styles1.scrollItems1}>
                {reviews2.map((index) => (
                  <figure
                    key={index.id}
                    className={cn(
                      "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <img className="rounded-full" width="32" height="32" alt="" src={index.img} />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                          {index.name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40 italic">
                          {index.username}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm mt-7 font-normal">{index.body}</div>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  scrollContainer: {
    overflow: "hidden",
    width: "100%",
    maskImage: "linear-gradient(to right, transparent 5%, #000 30%, transparent 200%)", // Petit dégradé sur les côtés
    padding: "10px 0",
    position: "relative",
    display: "flex",
    whiteSpace: "nowrap",
  },
  scrollContent: {
    display: "flex",
    animation: "scroll 10s linear infinite",
    width: "max-content",
  },
  scrollItems: {
    display: "flex",
    gap: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    flexShrink: 0,
  },
};

const styles1 = {
  scrollContainer1: {
    overflow: "hidden",
    width: "100%",
    maskImage: "linear-gradient(to right, transparent 5%, #000 30%, transparent 200%)", // Petit dégradé sur les côtés
    padding: "10px 0",
    position: "relative",
    display: "flex",
    whiteSpace: "nowrap",
  },
  scrollContent1: {
    display: "flex",
    animation: "scroll1 10s linear infinite",
    width: "max-content",
  },
  scrollItems1: {
    display: "flex",
    gap: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    flexShrink: 0,
  },
};

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-15%); }
  }`,
  styleSheet.cssRules.length
);


export default Commentaire;
