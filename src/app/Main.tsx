import Image from "next/image";

export default function Main() {
  return (
    <main className="min-h-screen py-16">
      <div>
        <div className="flex gap-5">
          <span className="text-4xl font-bold">Furina Developer</span>
          <Image
            src="/welcome.svg"
            alt="Welcome Icon"
            sizes="100vw"
            width={40}
            height={40}
          />
        </div>
      </div>
    </main>
  );
}
