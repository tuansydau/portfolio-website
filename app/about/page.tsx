import Link from "next/link";

export default function About() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex w-full justify-end">
                <div className="flex w-[24rem] h-24 items-center justify-between mr-16">
                    <Link href="/"><div className="flex px-4 h-12 justify-center items-center text-lg font-semibold text-[#abb589]">Work</div></Link>
                    <Link href="/about"><div className="flex h-12 justify-center items-center text-lg font-semibold border-b-4 text-[#abb589] border-[#abb589]">About</div></Link>
                    <Link href="/resume"><div className="flex h-12 justify-center items-center text-lg font-semibold text-[#abb589]">Resume</div></Link>
                </div>
            </div>

            {/* main content */}
            <div className="flex w-screen justify-center mt-12">
                {/* about section */}
                <div className="flex w-3/4 space-x-4 justify-center">
                    <div className="w-2/5 break-words">PHOTO IS HERE AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
                    <div className="w-3/5 space-y-4">
                        <div className="text-4xl">Some fun tidbits about me</div>
                        <div>😊 I'm a software engineer from Toronto, Ontario. I originally grew up in Guelph (go gryphons!) and moved to Toronto for University.</div>
                        <div>💡 I originally learned to program to make Roblox games - I was 12, it was in Lua, and I was confused the entire time, but it eventually became fun and game development became a hobby of mine. I ended up switching to web development in university, but I still love playing games.</div>
                        <div>🌴 Previously, I've interned at Tesla, CertiK, Skinopathy, Artemis Data, Big Whale Labs, and 4Pay Inc. I mainly do full stack development, UI/UX design, and DevOps, though :)</div>
                        <div>Outside of development, I really like:</div>
                        <div>Runescape </div>
                        <div>Concert Photography! I'd also love to shoot esports one day, check out my work: <a href='http://www.tuandau.ca' className="text-blue-300 underline">www.tuandau.ca</a></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}