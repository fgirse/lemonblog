import Image from "next/image";
import LogoNeu from "@/public/Assets/Img/LogoNeu.png";
import Astra from "@/public/Assets/Img/astraglaswbg.png";
import HeroImage from "@/public/Assets/Img/Hero.png";
import LogoAlt from "@/public/Assets/Img/LogoAlt.png";
import Wine from "@/public/Assets/Img/bottles03.png";
import Cocktail from "@/public/Assets/Svg/Cocktailglas.svg";
import Football from "@/public/Assets/Svg/Fussball.svg";
import Crowdparty from "@/public/Assets/Img/Crowdparty.png";
import HansAlbers from "@/public/Assets/Img/albers.jpg";

export default function Bento() {
  return (

    <>
    <div className="flex flex-col items-center justify-center relative top-[2vh]">
    <Image src={HeroImage} alt="Hero Image" width={1900} height={600} className="border-2 border-amber-50 shadow-lg shadow-stone-300 w-2/3 h-auto object-cover"/>
    </div>
    <h1 className="relative top-[5vh] text-center text-[3.2rem] lg:text-[6vw] lg: leading-12 headingA text-yellow-600">gastlichkeit ist unsere philosophie</h1>
<section className="py-12 w-[66vw] flex flex-col items-center justify-center">
{/* Gridcontainer Start */}
<div className="p-3 bg-slate-700 grid grid-cols-12 grid-rows-12 gap-4">
    <div className="bg-slate-800 border col-span-6 row-span-2 rounded-xl">
        <h1 className="text-center p-5 text-4xl lg:text-7xl headingA text-red-900">unser angebot und unser service</h1>


    </div>
    <div className="bg-slate-800 border col-span-6 row-span-3 col-start-7 rounded-xl">
      <div className="p-3 h-full w-full flex items-center justify-center">
     <Image src={LogoNeu} alt="Logo Neu" width={360} height={240}/>
      </div>
    </div>
    <div className="bg-slate-800 border col-span-3 row-span-3 row-start-3 rounded-xl">

      <div className="p-3 bg-slate-800 border h-full w-full rounded-xl flex items-center justify-center">
        <Image src="/Assets/Img/astraglaswbg.png" alt="Flens Astra" width={340} height={240}/>
      </div>
    </div>
    <div className="col-span-3 row-span-3 col-start-4 row-start-3">
      <div className="p-3 bg-slate-800 border h-full w-full rounded-xl flex items-center justify-center">
         <div className="flex flex-col items-center justify-center">
         <h1 className="text-center p-5 text-4xl lg:text-4xl headingA text-yellow-600">bier vom Fass</h1>
                  <p className="text-white text-center p-5 text-lg lg:text-xl">Flensburger Pilsener - das kühle blonde aus dem Norden und Astra - das Kutbier natürlich direkt vom Kiez</p>                       
      </div>
      </div>
    </div>
    <div className="col-span-4 row-span-2 col-start-7 row-start-4">
      <div className="p-3 bg-slate-800 border h-full w-full rounded-xl flex items-center justify-center">
        <Image src="/Assets/Img/Bottles03.png" alt="Weinillustration" width={340} height={240}/>
      </div>
    </div>
    <div className="col-span-2 row-span-2 col-start-11 row-start-4">
      <div className="p-3 bg-slate-800 border h-full w-full rounded-xl flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center p-5 text-xl lg:text-3xl headingA text-yellow-600">regionale weine</h1>
          <p className="text-white text-center p-5 text-lg lg:text-[1vw]">Regionale Weine aus dem Markgräflerland und vom Kaiserstuhl  - Hausweingut Firma Heinemann</p>
        </div>
      </div>
    </div>
    <div className="col-span-2 row-span-3 row-start-6">
      <div className="p-3 bg-slate-800 border h-full w-full rounded-xl flex items-center justify-center">
        <Image src="/Assets/Svg/cocktailglas.svg" alt="Cocktailglas" width={120} height={220}/>
      </div>
    </div>
    <div className="col-span-3 row-span-3 col-start-3 row-start-6">
      <div className="p-3 bg-slate-800 border h-full w-full rounded-xl flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center p-5 text-xl lg:text-3xl headingA text-yellow-600">cocktails & longdrinks</h1>
          <p className="text-white text-center p-5 text-lg lg:text-xl">Eine große Auswahl an Cocktails & Longdrinks - frisch gemixt von unseren Barkeepern</p>
        </div>
      </div>
    </div>
    <div className="col-span-3 row-span-3 col-start-6 row-start-6">
      <div className="p-3 bg-slate-800 border h-full w-full rounded-xl flex items-center justify-center">
        <Image src="/Assets/Svg/fussball.svg" alt="Fußball" width={120} height={120}/>
       
      </div>
    </div>
    <div className="col-span-4 row-span-3 col-start-9 row-start-6">
      <div className="p-3 bg-slate-800 border h-full w-full rounded-xl flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
       <h1 className="text-center p-5 text-4xl lg:text-4xl headingA text-yellow-600">fussball tv live</h1>
       <p className="text-white text-center p-5 text-lg lg:text-xl">Alle Spiele live - auf unseren großen Bildschirmen</p>
      </div>
      </div>
    </div>
    <div className="col-span-5 row-start-9">
      <div className="p-3 bg-slate-800 border h-full w-full rounded-xl flex items-center justify-center">
        <Image src={LogoAlt} alt="Logo Alt" width={1200} height={120}/>
      </div>
    </div>
    <div className="col-span-3 row-span-3 col-start-1 row-start-10">
      <div className="p-3 bg-slate-800 border h-full w-full rounded-xl flex items-center justify-center">
        <Image src={Crowdparty} alt="Hero Image" width={320} height={320}/>
      </div>
    </div>
    <div className="p-3 bg-slate-800 border rounded-xl col-span-3 row-span-3 col-start-4 row-start-10">1


    </div>
    <div className="p-3 bg-slate-800 border rounded-xl col-span-3 row-span-3 col-start-7 row-start-9">
      18
      <p className="text-white text-center p-5 text-lg lg:text-xl">Alle Bundesliga, Champions League und Europa League Spiele live auf Großbildleinwand und mehreren TV Geräten</p>
    </div>
    <div className="p-3 bg-slate-800 border rounded-xl col-span-3 row-span-4 col-start-10 row-start-9">
      19
      </div>
    <div className="p-3 bg-slate-800 border rounded-xl col-span-3 col-start-7 row-start-12">
      20
      </div>
</div>*/
    



{/* Bento Grid Container (removed to avoid nested comment syntax causing TS parsing errors) */}
    {/* Ende Bento Grid Container */}
</section>
    </>

  );
}