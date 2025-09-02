import Header from './components/Header'
import { useRouter } from 'next/router';

const data = [
  {
    id: 1,
    challenge_name: '7 Seconds to Glory',
    challenge_dir: '7secondstoglory',
    event_name: 'Haruul Zangi U18 2025',
    event_link: 'https://www.facebook.com/haruulzangiCTF',
    author: 'fg0x0',
    solved_by: 'trgl'
  }
]

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-screen">
      <Header/>
      <div className="h-20"></div>
      <div className="px-20">
        <div className="flex items-center justify-between p-4 border border-white bg-blue-500">
            <h1 className="w-1/6 font-bold">ID</h1>
            <h1 className="w-1/3 font-bold">Challenge Name</h1>
            <h1 className="w-1/3 font-bold">Event</h1>
            <h1 className="w-1/12 font-bold">Author</h1>
            <h1 className="w-1/12 font-bold">Solved By</h1>
        </div>
        {data.map((challenge) => (
          <div key={challenge.id} className="flex items-center p-4 border-b border-r border-l border-white">
            <h1 className="w-1/6">{challenge.id}</h1>
            <h1 onClick={() => (router.push(challenge.challenge_dir))} className="w-1/3 hover:underline cursor-pointer">{challenge.challenge_name}</h1>
            <h1 onClick={() => (router.push(challenge.event_link))} className="w-1/3 hover:underline cursor-pointer">{challenge.event_name}</h1>
            <h1 className="w-1/12">{challenge.author}</h1>
            <h1 className="w-1/12">{challenge.solved_by}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
