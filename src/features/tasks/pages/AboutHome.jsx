import { useEffect, useRef } from "react";

export function AboutHome() {
  return (
    <div className=" bg-[#faf9f6] text-main-800 py-14 px-8 font-sans">
      <div className="max-w-3xl mx-auto flex flex-col">

        {/* Titre */}
        <h1 className="text-center font-serif text-4xl font-bold text-main-500 mb-12 ">
          À propos
        </h1>

        {/* Section Interface3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 border-b border-[#e8e4de]">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-widest uppercase text-secondary-400">
              Notre école
            </span>
            <h2 className="font-serif text-2xl text-main-400">Interface3</h2>
            <p className=" leading-relaxed text-main-300">
              Interface3 est un centre de formation qui forme des femmes aux
              métiers du numérique depuis plus de 25 ans.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              className="w-full h-full object-cover"
              src="/icons/interface3.jpg"
              alt="Interface3"
            />
          </div>
        </div>

        {/* Section Notre groupe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div className="flex flex-col gap-3 md:order-2">
            <span className="text-xs font-medium tracking-widest uppercase text-secondary-400">
              L'équipe
            </span>
            <h2 className="font-serif text-2xl text-main-400">Notre groupe</h2>
            <p className="text-sm leading-relaxed text-main-300">
              Nous sommes une équipe de développeuses en formation, passionnées
              par le web et les nouvelles technologies.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-secondary-100 ">
            <img
              className="w-full h-full object-cover"
              src="/images/web14dessin1.svg"
              alt="Notre groupe"
            />
          </div>
        </div>

      </div>
    </div>
  );
}