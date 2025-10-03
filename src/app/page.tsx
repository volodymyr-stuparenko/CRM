import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500 bg-gradient-animate">
      <div className="text-center text-white px-6">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in delay-0">
          Welcome to the Next.js! 👋
        </h1>
        <p className="text-lg max-w-xl mx-auto opacity-90 delay-1">
          This is your website`s homepage. Make yourself at home 😊
        </p>

        <Link href="/dashboard">
          <button className="px-6 py-3 mt-4 text-lg font-semibold rounded-2xl shadow-lg bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white hover:scale-105 transition duration-300 ease-in-out animate-fade-in delay-2">
            Start Now!
          </button>
        </Link>
      </div>
    </main>
  );
}
