import React from 'react';
import { Drawer } from 'vaul';
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export interface IContactsDrawerProps {
}

export default function ContactsDrawer (props: IContactsDrawerProps) {
  const [result, setResult] = React.useState("Зв'яжіться зі мною");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Відправляємо...");
    const formData = new FormData(event.target);

    formData.append("access_key", "f1f9dac4-19e1-41fc-8b8d-22ca7afaff14");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Відправлено");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
  return (
    <Drawer.Content className="z-[60] flex flex-col mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none border-t-2 border-black p-8">
    <div aria-hidden className="z-[10] mx-auto w-12 h-1.5 flex-shrink-0 bg-black mb-8" />
    <Drawer.Title className='hidden'>Іспити, які ми пропонуємо</Drawer.Title>
    <div 
    className="z-[10] flex items-start justify-center gap-36"
    >
  <form onSubmit={onSubmit} className="space-y-8">
    <div className='flex flex-col gap-1.5'>
    <label className="text-2xl font-black leading-none mb-4" htmlFor="name">Ім'я</label>
    <input className="flex h-10 w-full text-lg text-black border-2 border-black shadow-brutalism px-3 py-2" id="name" name="Ім'я" placeholder="Введіть ім'я"></input>
    </div>
    <div className='flex flex-col gap-1.5'>
    <label className="text-2xl font-black leading-none mb-4" htmlFor="phone">Номер телефону</label>
    <input className="flex h-10 w-full text-lg text-black border-2 border-black shadow-brutalism px-3 py-2" id="phone" name="Номер телефону" placeholder="Введіть номер телефону"></input>
    </div>
    <div className='flex flex-col gap-1.5'>
    <label className="text-2xl font-black leading-none mb-4" htmlFor="email">Email (опціонально)</label>
    <input className="flex h-10 w-full text-lg text-black border-2 border-black shadow-brutalism px-3 py-2" id="email" name="Email" placeholder="Введіть Email"></input>
    </div>
    <div className="grid w-fit gap-1.5">
    <Label htmlFor="message">Ваше звернення</Label>
    <Textarea placeholder="Що вас турбує?" id="message" name="Звернення" />
    <p className="text-lg font-extrabold text-black mt-2">
    Наш менеджер обов'язково зв'яжеться з вами протягом робочого дня
    </p>
</div>
<button className="z-[13] text-2xl font-extrabold px-9 py-4 border-2 border-black shadow-brutalism bg-roseLight" type="submit">
 {result}
</button>
</form>
<div className='flex gap-48 flex-wrap'>
<div className="flex flex-col gap-4 p-4 border-2 border-black shadow-brutalism bg-greenLight">
<h4 className='text-2xl font-black text-black'>Номер телефону</h4>
  <div className="flex flex-col gap-2 border-2 border-black shadow-brutalism p-4">
    <p className='mt-1 text-xl font-bold text-black'>(099) 048-59-79</p>
    <p className='mt-1 text-xl font-bold text-black'>(093) 553-68-08</p>
  </div>
</div>
<div className="flex flex-col gap-4 p-4 border-2 border-black shadow-brutalism bg-greenLight">
    <h4 className='text-2xl font-black text-black'>Електронна пошта</h4>
  <p className='mt-1 text-xl font-bold text-black border-2 border-black shadow-brutalism p-4'>status.ed.pol@gmail.com</p>
</div>
<div className="flex flex-col gap-4 p-4 border-2 border-black shadow-brutalism bg-greenLight">
<h4 className='text-2xl font-black text-black'>Адреса</h4>
  <p className='mt-1 text-xl font-bold text-black border-2 border-black shadow-brutalism p-4'>м. Полтава, вул. Соборності, <br/>66, оф. 712, 36029, Україна</p>
</div>
<div className="flex flex-col gap-4 p-4 border-2 border-black shadow-brutalism bg-greenLight">
<h4 className='text-2xl font-black text-black'>Месенджери</h4>
  <div className="flex flex-col gap-2">
    <div className='border-2 border-black shadow-brutalism p-4'>
    <p className='mt-1 text-xl font-bold text-black'>Instagram Adults</p>
    <p className='mt-1 text-xl font-bold text-black'>Instagram Kids</p>
    <p className='mt-1 text-xl font-bold text-black'>Facebook</p>
    </div>
  </div>
</div>
</div>
</div>
    <div
    className="z-0 absolute inset-0 h-full w-full bg-purpleLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </Drawer.Content>
  );
}
