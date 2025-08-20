import Link from "next/link";

const Logo = ({ light = false }) => {
    //determine the logo color based on the light prop
    const colorClass = light ? "text-white" : "text-primary"; //return default to black
    return (
        <Link href="/" className="font-primary text-3xl tracking-[4px]">
            <span className={colorClass}>Lawrence Moriango</span>
        </Link>
    )
}

export default Logo
