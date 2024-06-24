import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:flex md:items-center">
      <div className=" basis-1/2 space-y-4">
      <h1 className="text-5xl font-black tracking-tight">Uncover the Secrets of Every Country</h1>
      <p className="text-base-content/80">Explore detailed insights, historical facts, and current data about every country at your fingertips.</p>
      <div className="flex gap-2">
        <Link href={'/app'} className="btn btn-secondary">TRY NOW</Link>
        <button className="btn btn-ghost">SEE OTHER</button>
      </div>
      </div>
      <div className="basis-1/2 h-80"></div>
    </div>
  );
}
