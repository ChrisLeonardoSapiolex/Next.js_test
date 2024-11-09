import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <main className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Your gateway to amazing possibilities
        </p>
        <a
          href="/register"
          className="rounded-full bg-foreground text-background px-6 py-3 text-lg font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Get Started
        </a>
      </main>
    </div>
  );
}
