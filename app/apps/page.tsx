"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type DeviceType = "android" | "ios" | "desktop" | "loading";

// Flag for emergency download solution
const ENABLE_EMERGENCY_DOWNLOAD = false;
const PLAY_MARKET_URL =
  "https://play.google.com/store/apps/details?id=com.menta.student&pcampaignid=landing";
const APP_STORE_URL =
  "https://apps.apple.com/uz/app/menta-student/id6755288411";

export default function Apps() {
  const [deviceType, setDeviceType] = useState<DeviceType>("loading");

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || "";
      const platform = navigator.platform || "";

      // Check for Android (more comprehensive detection)
      if (/android/i.test(userAgent) || /Android/i.test(platform)) {
        setDeviceType("android");
        return;
      }

      // Check for iOS (including iPad on iOS 13+)
      if (
        /iPad|iPhone|iPod/.test(userAgent) ||
        (platform === "MacIntel" && navigator.maxTouchPoints > 1) ||
        /iPad/.test(navigator.platform)
      ) {
        setDeviceType("ios");
        return;
      }

      // Default to desktop
      setDeviceType("desktop");
    };

    detectDevice();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 font-sans dark:bg-zinc-950">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-between py-8 px-4 sm:py-32 sm:px-16 bg-transparent">
        <Link href="/" className="w-full flex justify-start">
          <Image
            className="dark:invert"
            src="/logo-long.png"
            alt="menta logo"
            width={200}
            height={40}
            priority
          />
        </Link>
        <div className="flex flex-col items-start gap-8 text-left w-full mt-12">
          {/* 1. Mobile app heading */}
          <h1 className="max-w-m text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Mobil ilova yordamida o&apos;qish yanada qulayroq!
          </h1>

          {/* 2. Prominently show device and download resource */}
          <div className="flex flex-col gap-6 w-full">
            {deviceType === "loading" && (
              <p className="text-zinc-600 dark:text-zinc-400">
                Qurilma aniqlanmoqda...
              </p>
            )}

            {deviceType === "android" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-left">
                  <p className="text-lg font-semibold text-black dark:text-zinc-50">
                    Sizning qurilmangiz: Android
                  </p>
                  {ENABLE_EMERGENCY_DOWNLOAD ? (
                    <>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        Hozirda Google Play Market bilan bog&apos;liq muammo
                        mavjud. Ilovani to&apos;g&apos;ridan-to&apos;g&apos;ri
                        yuklab oling:
                      </p>
                      <div className="mt-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
                        <div className="flex gap-2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5"
                          >
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                          </svg>
                          <p className="text-sm text-amber-800 dark:text-amber-200">
                            <strong>Muhim:</strong> Yangi versiyani
                            o&apos;rnatishdan oldin, sizda o&apos;rnatilgan
                            Menta ilovasini o&apos;chirib tashlang.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <a
                          href="/downloads/menta_1.0.2(12).apk"
                          download="menta_1.0.2(12).apk"
                          className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-shrink-0"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          <span>APK faylini yuklab olish</span>
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        Ilovani Google Play Market orqali yuklab oling:
                      </p>
                      <div className="h-[60px] flex items-center justify-start">
                        <a
                          href={PLAY_MARKET_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-opacity hover:opacity-80"
                        >
                          <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Get it on Google Play"
                            width={200}
                            height={77}
                            className="h-[60px] w-auto"
                            unoptimized
                          />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {deviceType === "ios" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-left">
                  <p className="text-lg font-semibold text-black dark:text-zinc-50">
                    Sizning qurilmangiz: iOS
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Ilovani App Store orqali yuklab oling:
                  </p>
                </div>
                <div className="h-[60px] flex items-center justify-start">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000"
                      alt="Download on the App Store"
                      width={200}
                      height={67}
                      className="h-[60px] w-auto dark:invert"
                      unoptimized
                    />
                  </a>
                </div>
              </div>
            )}

            {deviceType === "desktop" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-left">
                  <p className="text-lg font-semibold text-black dark:text-zinc-50">
                    Sizning qurilmangiz: Kompyuter
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    O&apos;qituvchingizdan maktabingizga havola oling va brauzer
                    orqali kirib foydalaning.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 3. Other devices section */}
          <div className="mt-64 w-full">
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-4 text-left">
              Boshqa qurilmalar
            </h2>
            <div className="flex flex-col gap-4">
              {deviceType !== "ios" && (
                <div className="flex flex-col gap-2">
                  <p className="text-base font-semibold text-black dark:text-zinc-50 text-left">
                    iOS
                  </p>
                  <div className="h-[50px] flex items-center justify-start">
                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-80"
                    >
                      <Image
                        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000"
                        alt="Download on the App Store"
                        width={160}
                        height={53}
                        className="h-[50px] w-auto dark:invert"
                        unoptimized
                      />
                    </a>
                  </div>
                </div>
              )}
              {deviceType !== "android" && (
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 text-left">
                    Android
                  </p>
                  <div className="h-[50px] flex items-center justify-start">
                    <a
                      href={PLAY_MARKET_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-80"
                    >
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Get it on Google Play"
                        width={160}
                        height={62}
                        className="h-[50px] w-auto"
                        unoptimized
                      />
                    </a>
                  </div>
                </div>
              )}
              {deviceType !== "desktop" && (
                <div className="flex flex-col gap-2">
                  <p className="text-base font-semibold text-black dark:text-zinc-50 text-left">
                    Kompyuter
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 text-left">
                    O&apos;qituvchingizdan maktabingizga havola oling va brauzer
                    orqali kirib foydalaning.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-12">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-all duration-300 hover:shadow-lg hover:scale-105 md:w-[210px]"
            href="/"
          >
            Bosh sahifa
          </Link>
        </div>
      </main>
    </div>
  );
}
