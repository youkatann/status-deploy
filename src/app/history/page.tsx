import { Drawer } from 'vaul';
import Cursor from '@/components/ui/cursor';
import Navbar from '@/components/sections/navbar/navbar';

export interface IHistoryDrawerProps {
}

export default function HistoryDrawer (props: IHistoryDrawerProps) {
  return (
    <>
    <Cursor/>
    <Navbar/>
    <section className="relative w-full flex flex-col h-fit pt-48 p-8">
    <div className='z-[10] flex flex-col lg:flex-row xl:flex-wrap gap-12 items-start justify-end'>
      <div className='flex flex-col w-full xl:w-[40%] gap-12 items-end mt-24'>
        <h3 className='text-7xl text-primary-content font-black p-4 border-2 border-black shadow-brutalism bg-roseLight'>2022-2024</h3>
        <div className='p-4 bg-roseLight border-2 border-black shadow-brutalism flex flex-col gap-12'>
          <div className='flex justify-center items-center'>
            <img src='/images/bshape1.svg' className='w-[250px] h-[250px]'/>
          </div>
          <div>
          <h3
          className='text-3xl font-extrabold text-black max-w-md leading-[0.9] tracking-tighter mb-8 p-4 border-2 border-black shadow-brutalism bg-white'
          >Цифровізація</h3>
            <p className='font-semibold text-black max-w-md text-lg leading-[1.2] tracking-tight whitespace-pre-wrap p-4 border-2 border-black shadow-brutalism bg-white'>Перехід на інтерактивні підручники та онлайн платформи, готуємо студентів з усього світу. Перехід на інтерактивні підручники та онлайн платформи, готуємо студентів з усього світу. Перехід на інтерактивні підручники та онлайн платформи, готуємо студентів з усього світу</p>
            </div>
        </div>
      </div>
      <div className='flex flex-col w-full xl:w-[40%] gap-12  items-end mt-16'>
        <h3 className='text-7xl text-primary-content font-black p-4 border-2 border-black shadow-brutalism bg-greenLight'>2017</h3>
        <div className='p-4 bg-greenLight border-2 border-black shadow-brutalism flex flex-col gap-12'>
          <div className='flex justify-center items-center'>
            <img src='/images/bshape2.svg' className='w-[250px] h-[250px]'/>
          </div>
          <div>
          <h3
          className='text-3xl font-extrabold text-black max-w-md leading-[0.9] tracking-tighter mb-8 p-4 border-2 border-black shadow-brutalism bg-white'
          >Реорганізація</h3>
            <p className='font-semibold text-black max-w-md text-lg leading-[1.2] tracking-tight whitespace-pre-wrap p-4 border-2 border-black shadow-brutalism bg-white'>Реорганізація у ТОВ «Мовний Центр «СТАТУС», розвиваємо співпрацю з приватними та державними установами, готуємо спеціалістів до проходження інтерв’ю у IT, нафто-газові, аграрні компанії. Проходження інтерв’ю у IT, нафто-газові, аграрні компанії.
</p>
            </div>
        </div>
      </div>
      <div className='flex flex-col w-full xl:w-[35%] gap-12  items-end mt-12'>
        <h3 className='text-6xl text-primary-content font-black p-4 border-2 border-black shadow-brutalism bg-blueLight'>2012</h3>
        <div className='p-4 bg-blueLight border-2 border-black shadow-brutalism flex flex-col gap-12'>
          <div className='flex justify-center items-center'>
            <img src='/images/bshape3.svg' className='w-[250px] h-[250px]'/>
          </div>
          <div>
          <h3
          className='text-3xl font-extrabold text-black max-w-md leading-[0.9] tracking-tighter mb-8 p-4 border-2 border-black shadow-brutalism bg-white'
          >Авторизація</h3>
            <p className='font-semibold text-black max-w-md text-lg leading-[1.2] tracking-tight whitespace-pre-wrap p-4 border-2 border-black shadow-brutalism bg-white'>Відкриття сертифікованого Центру Підготовки та Тестування міжнародних іспитів PTE – Pearson Test of English. «Статус» став представником компанії Edexcell у Полтавській області</p>
            </div>
        </div>
      </div>
      <div className='flex flex-col w-full xl:w-[45%] gap-12  items-end mt-8'>
        <h3 className='text-6xl text-primary-content font-black p-4 border-2 border-black shadow-brutalism bg-pinkLight'>2011</h3>
        <div className='p-4 bg-pinkLight border-2 border-black shadow-brutalism flex flex-col gap-12'>
          <div className='flex justify-center items-center'>
            <img src='/images/bshape4.svg' className='w-[250px] h-[250px]'/>
          </div>
          <div>
          <h3
          className='text-3xl font-extrabold text-black max-w-md leading-[0.9] tracking-tighter mb-8 p-4 border-2 border-black shadow-brutalism bg-white'
          >Новий проєкт</h3>
            <p className='font-semibold text-black max-w-md text-lg leading-[1.2] tracking-tight whitespace-pre-wrap p-4 border-2 border-black shadow-brutalism bg-white text-balance'>Навчання дітей: з 1 класу до підготовки до ЗНО (зараз – НМТ) з іноземних мов на 180+ балів та до міжнародних іспитів. Навчання дітей: з 1 класу до підготовки до ЗНО</p>
            </div>
        </div>
      </div>
      <div className='flex flex-col w-full xl:w-[30%] gap-12 items-end'>
        <h3 className='text-5xl text-primary-content font-black p-4 border-2 border-black shadow-brutalism bg-purpleAccent'>2007</h3>
        <div className='p-4 bg-purpleAccent border-2 border-black shadow-brutalism flex flex-col gap-12'>
          <div className='flex justify-center items-center'>
            <img src='/images/bshape5.svg' className='w-[250px] h-[250px]'/>
          </div>
          <div>
          <h3
          className='text-3xl font-extrabold text-black max-w-md leading-[0.9] tracking-tighter mb-8 p-4 border-2 border-black shadow-brutalism bg-white'
          >Заснування</h3>
            <p className='font-semibold text-black max-w-md text-lg leading-[1.2] tracking-tight whitespace-pre-wrap p-4 border-2 border-black shadow-brutalism bg-white text-balance'>Заснування ПП «Центр вивчення іноземних мов «Статус». Працюємо лише з дорослими клієнтами</p>
            </div>
        </div>
      </div>
    </div>
    <div
    className="z-0 absolute inset-0 h-full w-full bg-purpleLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
    </>
  );
}
