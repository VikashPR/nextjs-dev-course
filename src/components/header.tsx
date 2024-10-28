import Link from "next/link";

const Header = () => {
    return (
        <div className="w-full absolute text-white z-10">
        <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href="/">Home</Link>
            <Link href="/performance">Performance</Link>
            <Link href="/reliability">Reliability</Link>
            <Link href="/scale">Scale</Link>
        </nav>
        </div>
    );
}
    
export default Header;