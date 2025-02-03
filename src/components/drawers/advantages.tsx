import { Drawer } from 'vaul';

export interface IAdvantagesDrawerProps {
}

export default function AdvantagesDrawer (props: IAdvantagesDrawerProps) {
  return (
    <Drawer.Content className="z-[60] flex flex-col mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none border-t-2 border-black p-8">
    <div aria-hidden className="z-[10] mx-auto w-12 h-1.5 flex-shrink-0 bg-black mb-8" />
    <Drawer.Title className='hidden'>Іспити, які ми пропонуємо</Drawer.Title>
    <div className='z-[10] flex flex-col gap-12'>
    <div className='flex gap-80'>
    <div className='relative p-8 border-2 border-black shadow-brutalism w-fit bg-pinkLight'>
    <h4 className='text-3xl text-black font-black w-[620px]'>Викладачі – професіонали своєї справи</h4>
    <img className="scale-[0.6] z-[20] absolute top-[-60] right-[-80]" src='/images/rhombus.svg'/>
    </div>
    <div className='flex flex-col gap-4'>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-pinkLight'>
    <p className='text-xl text-black font-bold'>Обов’язкова педагогічна та філологічна освіта, багаторічний досвід викладання іноземних мов</p>    
    </div>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-pinkLight'>
    <p className='text-xl text-black font-bold'>Мають міжнародні сертифікати з методики викладання (CELTA/ TKT/  TESOL/ TEFL), екзаменатори іспиту PEIC</p>    
    </div>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-pinkLight'>
    <p className='text-xl text-black font-bold'>Енергійні, з чудовим почуттям гумору та проактивною життєвою позицією, які роблять кожен урок натхненним та ефективним</p>    
    </div>
    </div>
    </div>
    <div className='flex gap-80'>
    <div className='relative p-8 border-2 border-black shadow-brutalism w-fit bg-greenLight'>
    <h4 className='text-3xl text-black font-black w-[620px] text-balance'>Методика навчання – ефективно та індивідуально</h4>
    <img className="scale-[0.5] z-[20] absolute top-[-60] right-[-75]" src='/images/triangle.svg'/>
    </div>
    <div className='flex flex-col gap-4'>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-greenLight'>
    <p className='text-xl text-black font-bold'>Інтенсивний формат: опануйте повний курс за 4 місяці</p>    
    </div>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-greenLight'>
    <p className='text-xl text-black font-bold'>Індивідуальний підбір програми та курсу навчання, відповідно до ваших цілей та потреб</p>    
    </div>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-greenLight'>
    <p className='text-xl text-black font-bold'>Супровід особистим менеджером: постійний контроль прогресу, можливість адаптувати графік та програму</p>    
    </div>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-greenLight'>
    <p className='text-xl text-black font-bold'>Зворотний зв'язок: планові відгуки, звіти та рекомендації для максимальної ефективності навчання</p>    
    </div>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-greenLight'>
    <p className='text-xl text-black font-bold'>Сертифікат: отримайте документ, що підтверджує ваш рівень за стандартами CEFR та ECTIS</p>    
    </div>
    </div>
    </div>   
    <div className='flex gap-80'>
    <div className='relative p-8 border-2 border-black shadow-brutalism w-fit bg-roseLight'>
    <h4 className='text-3xl text-black font-black w-[620px] text-balance'>Підручники та технології – сучасно та зручно</h4>
    <img className="scale-[0.7] z-[20] absolute top-[-60] right-[-75]" src='/images/star.svg'/>
    </div>
    <div className='flex flex-col gap-4'>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-roseLight'>
    <p className='text-xl text-black font-bold'>Доступ до інтерактивної платформи 24/7, щоб навчатися у зручний для вас час</p>    
    </div>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-roseLight'>
    <p className='text-xl text-black font-bold'>Особистий кабінет для відстеження прогресу та досягнень</p>    
    </div>
    <div className='p-2 border-2 border-black shadow-brutalism w-fit h-fit bg-roseLight'>
    <p className='text-xl text-black font-bold'>Ігрові елементи на заняттях навіть для дорослих – навчання стає цікавим та захоплюючим</p>    
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
