import { notFound } from 'next/navigation';
import { teamMates } from '@/data';
import Navbar from '@/components/sections/navbar/navbar';
import Cursor from '@/components/ui/cursor';
import Image from 'next/image';

interface TeamMemberPageProps {
  params: Promise<{ id: string }>;
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { id } = await params;
  const teamMate = teamMates.find((member) => member.id === id);

  if (!teamMate) {
    return notFound(); // Если нет такого участника — 404 страница
  }

  return (
    <>
    <Navbar/>
    <Cursor/>
    <main>
    <section className="w-full min-h-screen mx-auto px-12 py-40 relative">
      <h1 className="text-5xl font-extrabold">{teamMate.name}</h1>
      <div className='flex flex-col xl:flex-row gap-8'>
      <Image src={teamMate.photo} alt="Фото викладача" width="512" height="512" className="h-fit shadow-brutalism border-2 border-black max-w-128 max-h-128 lg mt-4" />
      <div className='w-full flex gap-4 flex-wrap'>
       { teamMate.certificates.map((teamCertificate, index) => {
        return (
            <div key={index} className='relative w-[240px] h-[240px]'>
            <Image src={teamCertificate.src} fill className="object-contain"alt="Фото сертифіката"></Image>
            </div>
        ) 
        })}
        </div>
      </div>
     <div className='mt-6 p-8 border-2 border-black w-fit bg-white'>
      {/* Должности */}
      {teamMate.posts.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold">Посада:</h2>
          <ul className="list-disc ml-6">
            {teamMate.posts.map((post, index) => (
              <li key={index} className="mt-1">{post.text}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Образование */}
      {teamMate.educations.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Освіта:</h2>
          <ul className="list-disc ml-6">
            {teamMate.educations.map((education, index) => (
              <li key={index} className="mt-1">{education.text}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Опыт */}
      {teamMate.experiences.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Досвід:</h2>
          <ul className="list-disc ml-6">
            {teamMate.experiences.map((experience, index) => (
              <li key={index} className="mt-1">{experience.text}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
      <div
    className="z-[-1] absolute inset-0 h-full w-full bg-blueLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
    </main>
    </>
  );
}