import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/logo-long.png"
            alt="menta logo"
            width={200}
            height={40}
            priority
          />
        </Link>
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className="max-w-m text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Biz bilan bog&apos;laning
          </h1>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
                Telefon raqami
              </h2>
              <a
                href="tel:+998505256600"
                className="text-xl font-semibold text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                +998 50 525 66 00
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
                Telegram
              </h2>
              <a
                href="https://t.me/menta_support"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                @menta_support
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
                Email
              </h2>
              <a
                href="mailto:jasurbek.normuradov@gmail.com"
                className="text-xl font-semibold text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                jasurbek.normuradov@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[210px]"
            href="/"
          >
            Bosh sahifa
          </Link>
        </div>
      </main>
    </div>
  );
}
