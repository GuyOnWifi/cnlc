"use client";
import React from "react";
import { Spotlight } from "../../components/landing/spotlight-new";
import { FlipWords } from "@/components/landing/flip-words";
import { Tabs } from "@/components/landing/tabs";
import { BentoGrid, BentoGridItem } from "@/components/landing/bento-grid";
import Image from "next/image";
import { IconClipboardCopy, IconBoxAlignTopLeft, IconTableColumn, IconArrowWaveRightUp } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

const DummyContent = () => {
 return (
   <Image
     src="/linear.webp"
     alt="dummy image"
     width="1000"
     height="1000"
     className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
   />
 );
};

export default function SpotlightNewDemo() {
 const words = ["Healthier", "Better", "Sigmaer", "Fitter", "Activer"];

 const tabs = [
   {
     title: "Product",
     value: "product",
     content: (
       <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#333333]">
         <p>Product Tab</p>
         <DummyContent />
       </div>
     ),
   },
   {
     title: "Services",
     value: "services",
     content: (
       <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#333333]">
         <p>Services tab</p>
         <DummyContent />
       </div>
     ),
   },
   {
     title: "Playground",
     value: "playground",
     content: (
       <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#333333]">
         <p>Playground tab</p>
         <DummyContent />
       </div>
     ),
   },
   {
     title: "Content",
     value: "content",
     content: (
       <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#333333]">
         <p>Content tab</p>
         <DummyContent />
       </div>
     ),
   },
 ];

 const bentoItems = [
   {
     title: "Track Your Progress",
     description: "Monitor your fitness journey with detailed analytics and insights.",
     header: (
       <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
         <DummyContent />
       </div>
     ),
     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-300" />,
     className: "bg-neutral-900 hover:bg-neutral-800 duration-300",
   },
   {
     title: "Custom Workouts",
     description: "Personalized training programs tailored to your goals.",
     header: (
       <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
         <DummyContent />
       </div>
     ),
     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-300" />,
     className: "bg-neutral-900 hover:bg-neutral-800 duration-300",
   },
   {
     title: "Nutrition Guide",
     description: "Expert dietary recommendations to fuel your transformation.",
     header: (
       <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
         <DummyContent />
       </div>
     ),
     icon: <IconTableColumn className="h-4 w-4 text-neutral-300" />,
     className: "bg-neutral-900 hover:bg-neutral-800 duration-300",
   },
   {
     title: "Community Support",
     description: "Connect with like-minded individuals on your fitness journey.",
     header: (
       <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
         <DummyContent />
       </div>
     ),
     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-300" />,
     className: "bg-neutral-900 hover:bg-neutral-800 duration-300",
   },
 ];

 return (
   <div className="h-full w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
     <Spotlight />
     <div className="flex flex-col justify-center items-center p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 h-screen">
       <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         Live <FlipWords words={words} />
         <br /> Sigma Placeholder
       </h1>
       <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
         A subtle yet effective spotlight effect, because the previous version
         is used a bit too much these days.
       </p>
     </div>

     <div className="h-screen border-2 flex-col flex items-center justify-start overflow-visible w-full px-4 relative z-20">
      <Tabs 
        tabs={tabs}
        containerClassName="w-full max-w-4xl mx-auto flex items-center justify-center"
        contentClassName="w-full max-w-4xl mx-auto"
      />
    </div>
    
     <div className="min-h-screen w-full p-4">
       <BentoGrid className="max-w-4xl mx-auto grid-cols-1 md:grid-cols-2">
         {bentoItems.map((item, i) => (
           <BentoGridItem
             key={i}
             title={item.title}
             description={item.description}
             header={item.header}
             icon={item.icon}
             className={cn(
               "group/bento hover:shadow-2xl hover:shadow-neutral-800/50 transition-all duration-500",
               item.className
             )}
           />
         ))}
       </BentoGrid>
     </div>
   </div>
 );
}