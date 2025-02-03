import { Drawer } from 'vaul';

export interface IHistoryDrawerProps {
}

export default function HistoryDrawer (props: IHistoryDrawerProps) {
  return (
    <Drawer.Content className="z-[60] flex flex-col mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none border-t-2 border-black p-8">
    <div aria-hidden className="z-[10] mx-auto w-12 h-1.5 flex-shrink-0 bg-black mb-8" />
    <Drawer.Title className='hidden'>Іспити, які ми пропонуємо</Drawer.Title>
    <div
    className="z-0 absolute inset-0 h-full w-full bg-purpleLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </Drawer.Content>
  );
}
