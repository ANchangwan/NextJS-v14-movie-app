import Link from "next/link";

export default function Navigation(){
    return <div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">about-us</Link></li>
        </ul>
        
    </div>
}