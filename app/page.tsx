import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/logo-long.png"
          alt="menta logo"
          width={200}
          height={40}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-m text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            O‘zingizning platformangizni ishga tushirib, onlayn o‘qitishni
            boshlang
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[210px]"
            href="https://forms.gle/SLS83ic1TVB5wRMN8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo dostup olish
            <Image
              className="dark:invert"
              src="/logo-strike.png"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
          </a>
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-foreground px-5 text-foreground transition-colors hover:bg-foreground hover:text-background md:w-[210px]"
            href="/contacts"
          >
            Biz bilan bog&apos;lanish
          </Link>
        </div>
      </main>
    </div>
  );
}
