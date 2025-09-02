import Header from './components/Header'

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
          <div className="flex items-center p-4 border-b border-r border-l border-white">
            <h1 className="w-1/6">{challenge.id}</h1>
            <a className="w-1/3" href="/7secondstoglory">
              <h1 className="hover:underline cursor-pointer">{challenge.challenge_name}</h1>
            </a>
            <a className="w-1/3" href={challenge.event_link}>
              <h1 className="hover:underline cursor-pointer">{challenge.event_name}</h1>
            </a>
            <h1 className="w-1/12">{challenge.author}</h1>
            <h1 className="w-1/12">{challenge.solved_by}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
