import Header from "./components/Header"

export default function Chall2() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header/>
            <div className="h-20"></div>
            <div className="px-20 space-y-4">
                <h1 className="text-xl"><span className="text-4xl font-bold">Oracle is here </span> by: Tulgaaaa</h1>
                <h1>1. <a className="hover:underline" href="https://en.wikipedia.org/wiki/Oracle_attack">Oracle attack</a> буюу <a className="hover:underline" href="https://en.wikipedia.org/wiki/Oracle_attack">One-Byte-at-a-Time attack</a> хийнэ.</h1>
                <a className="text-blue-500 underline" href="https://github.com/trrgl/ctf-writeups/blob/main/HZU18%202024/Oracle%20is%20here/sol.py">Solution Code</a>
                <p>Flag : {"HZU18{0racl3_4ttack_with_ECB}"}</p>
            </div>
            <div className="h-20"></div>
        </div>
    );
}