function Header() {
    return (
        <div className="w-full bg-black flex items-center justify-between p-6 fixed">
            <a href="/">
                <h1 className="text-2xl font-semibold">CTF Writeups</h1>
            </a>
            <a href="https://www.youtube.com/watch?v=b3rNUhDqciM">
                <h1 className="hover:underline cursor-pointer">Log out</h1>
            </a>
        </div>
    );
}

export default Header