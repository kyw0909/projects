import Image from "next/image";
import Link from "next/link";
import Hello from "./Components/hello";
import Wrapper from "./Components/Wrapper";
import Counter from "./Components/conter";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-8xl font-mono">kyw404</p>
        <p className="text-2xl">18살<br/>현재 코딩 배우는 중</p>
        <Image src = "/cat.jpg" 
        width={550}
        height={550}
        alt=""/>
        <Link href={"/info"}>About</Link>
        <Hello name="react" color="red" isSpecial={true}/>
        <Counter />
      </main>
    </div>
  );
}
