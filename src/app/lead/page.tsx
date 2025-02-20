"use client"
import React, { useRef } from "react";
import Navbar from "@/components/sections/navbar/navbar";
import Cursor
 from "@/components/ui/cursor";
export interface ILeadProps {
}

export default function Lead (props: ILeadProps) {

  const formRef = useRef<HTMLFormElement>(null);


  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // Альтернатива formRef.current.submit()
    }
  };

  const [result, setResult] = React.useState("Залишити заявку");

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       setResult("Відправляємо...");
       
       const form = e.currentTarget as HTMLFormElement; // Cast e.currentTarget to HTMLFormElement
       const formData = new FormData(form); // Now we can treat 'form' as HTMLFormElement
     
       formData.append("access_key", "f1f9dac4-19e1-41fc-8b8d-22ca7afaff14");
     
       const response = await fetch("https://api.web3forms.com/submit", {
         method: "POST",
         body: formData,
       });
     
       const data = await response.json();
     
       if (data.success) {
         setResult("Відправлено");
         form.reset(); // Reset the form
       } else {
         console.log("Error", data);
         setResult(data.message);
       }
     };

  return (
    <main className="relative min-h-[120vh] w-[100vw] flex items-center p-4 xl:py-28 xl:px-16 overflow-clip">
    <Navbar/>
    <Cursor/>
    <div className="w-full mt-24">
    <form ref={formRef} onSubmit={onSubmit} className="relative z-[10] leading-[6] flex flex-col gap-12">
    <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center">
    <span className="whitespace-nowrap text-black font-black text-4xl xl:text-6xl ">Привіт! Мене звати</span>
    <input className="z-[13] p-4 xl:px-9 py-4 border-2 border-black shadow-brutalism text-2xl font-extrabold lg:mx-8 h-fit bg-white" placeholder="[Ваше ім'я]" name="Ім'я"/>
    </div>
    <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-end">
    <span className="whitespace-nowrap text-black font-black text-4xl xl:text-6xl">Я хочу записатися <br/>на навчання</span>
    <input className="z-[13] p-4 xl:px-9 py-4 border-2 border-black shadow-brutalism text-2xl font-extrabold lg:mx-8 h-fit bg-white" placeholder="[Для кого?]" name="Освіта" list="audience" />
    <datalist id="audience">
      <option value="Для компаній" />
      <option value="Для дорослих" />
      <option value="Для дітей" />
    </datalist> 
    </div>
    <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center">
    <span className="whitespace-nowrap text-black font-black text-4xl xl:text-6xl">Мене цікавлять</span>
    <input className="z-[13] p-4 xl:px-9 py-4 border-2 border-black shadow-brutalism text-2xl font-extrabold lg:mx-8 h-fit bg-white" placeholder="[Які заняття?]" name="Тип" list="courses" />
    <datalist id="courses">
      <option value="Індивідуальні" />
      <option value="Групові" />
      <option value="Підготовка до екзаменів" />
    </datalist>
    </div>
    <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center">
    <span className="whitespace-nowraptext-black font-black text-4xl xl:text-6xl">
    Мій номер телефону -
    </span>
    <input className="z-[13] p-4 xl:px-9 py-4 border-2 border-black shadow-brutalism text-2xl font-extrabold lg:mx-8 h-fit bg-white" placeholder="[Ваш номер телефону]" name="Номер телефону"/>
    </div>
    </form>
    <div className="z-[10] pt-8 flex justify-center">
    <button className="z-[13] p-4 xl:px-9 py-4 border-2 border-black shadow-brutalism bg-purpleLight text-2xl font-extrabold" type="submit" onClick={handleSubmit}>{result}</button>
    </div>
    </div>
    <div className="z-[5] absolute bottom-0 left-0 w-fit h-fit">
    <p className="relative uppercase text-[660px] font-extrabold opacity-5 leading-[1]">Status</p>
    </div>
    <div
    className="z-1 absolute inset-0 h-full w-full bg-blueLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </main>
  );
}
