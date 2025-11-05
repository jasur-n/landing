import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
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
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left w-full overflow-y-auto mt-8">
          <h1 className="max-w-m text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Foydalanuvchi kelishuvi va maxfiylik siyosati
          </h1>
          <div className="flex flex-col gap-8 w-full text-base text-black dark:text-zinc-50 prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Ushbu foydalanuvchi kelishuvi (keyinchalik &quot;Kelishuv&quot;
              deb yuritiladi) foydalanuvchiga &quot;Menta&quot; platformasining
              (keyinchalik &quot;Operator&quot; deb yuritiladi) taklifi
              hisoblanadi.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Kelishuvni akseptlash Foydalanuvchi tomonidan Platforma orqali
              birinchi marta ro&apos;yxatdan o&apos;tish yoki avtorizatsiya
              qilganda, shuningdek, Platformadan foydalanishni davom ettirganda
              amalga oshiriladi. Kelishuvni akseptlash Foydalanuvchining uning
              barcha shartlariga to&apos;liq va shartsiz roziligini bildiradi.
            </p>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                1. Atamalar va ta&apos;riflar
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">1.1.</strong>{" "}
                  &quot;Platforma&quot; — &quot;Menta&quot; tomonidan ishlab
                  chiqilgan mobil ilova va veb-platforma bo&apos;lib, o&apos;quv
                  markazlari, ustozlar va kompaniyalarga onlayn kurslarni
                  joylashtirish, boshqarish va o&apos;quvchilarga taqdim etish
                  imkonini beradi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">1.2.</strong>{" "}
                  &quot;Foydalanuvchi&quot; — Platformadan foydalanuvchi
                  jismoniy shaxs.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">1.3.</strong>{" "}
                  &quot;Shaxsga doir ma&apos;lumotlar&quot; — Foydalanuvchini
                  aniqlash imkonini beradigan har qanday ma&apos;lumot (ism,
                  telefon raqami, elektron pochta, profil rasmi, foydalanuvchi
                  harakatlari va boshqalar).
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">1.4.</strong>{" "}
                  &quot;Hamkor platforma&quot; — &quot;Menta&quot; tizimiga
                  ulangan va o&apos;z o&apos;quv jarayonini yuritayotgan
                  ta&apos;lim muassasasi yoki o&apos;quv markazi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">1.5.</strong>{" "}
                  &quot;Hisob yozuvi&quot; — Foydalanuvchining Platformada
                  yaratilgan shaxsiy akkaunti.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">1.6.</strong>{" "}
                  &quot;Shaxsga doir ma&apos;lumotlarga ishlov berish&quot; —
                  ushbu ma&apos;lumotlarni yig&apos;ish, saqlash, tahlil qilish,
                  uzatish yoki yo&apos;q qilish bo&apos;yicha amalga
                  oshiriladigan harakatlar majmuasi.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                2. Kelishuv predmeti
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">2.1.</strong>{" "}
                  Ushbu Kelishuvga muvofiq Operator Foydalanuvchiga Platformadan
                  foydalanish huquqini beradi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">2.2.</strong>{" "}
                  Platforma orqali Foydalanuvchilar darslarni ko&apos;rish,
                  imtihon va uy vazifalarini topshirish, reyting tizimida
                  qatnashish, bildirishnomalar olish va o&apos;z o&apos;quv
                  markazlari bilan muloqot qilish imkoniga ega bo&apos;ladilar.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">2.3.</strong>{" "}
                  Platformadan foydalanish bepul, ammo ayrim o&apos;quv
                  markazlarining pullik kurslariga ulanish alohida tartibda
                  amalga oshiriladi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">2.4.</strong>{" "}
                  Operator Platforma funksiyalarini yaxshilash, texnik xizmat
                  ko&apos;rsatish yoki xavfsizlikni ta&apos;minlash maqsadida
                  xizmatlarni vaqtincha to&apos;xtatib turishga haqli.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                3. Foydalanuvchi ro&apos;yxatdan o&apos;tishi va avtorizatsiyasi
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">3.1.</strong>{" "}
                  Foydalanuvchi ro&apos;yxatdan o&apos;tish jarayonida telefon
                  raqami yoki boshqa identifikatsiya usuli orqali
                  avtorizatsiyadan o&apos;tadi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">3.2.</strong>{" "}
                  Foydalanuvchi o&apos;z login ma&apos;lumotlarini (kod, parol
                  va boshqalar) uchinchi shaxslarga bermasligi shart.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">3.3.</strong>{" "}
                  Agar Foydalanuvchi hisobiga ruxsatsiz kirish aniqlansa, u
                  zudlik bilan Operatorni xabardor qilishi lozim.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                4. Shaxsga doir ma&apos;lumotlar ustidan ishlov berish
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">4.1.</strong>{" "}
                  Foydalanuvchi Platformadan foydalanish orqali o&apos;z shaxsiy
                  ma&apos;lumotlariga ishlov berilishiga rozilik bildiradi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">4.2.</strong>{" "}
                  Operator quyidagi maqsadlarda ma&apos;lumotlarni qayta
                  ishlashi mumkin:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>
                    Foydalanuvchini identifikatsiya qilish va hisobini yuritish;
                  </li>
                  <li>Platforma funksiyalarini taqdim etish va yaxshilash;</li>
                  <li>
                    Bildirishnomalar (uy ishi, yangi darslar, baholar, chatlar
                    va boshqalar) yuborish;
                  </li>
                  <li>
                    Xizmat sifatini tahlil qilish va tizimni optimallashtirish;
                  </li>
                  <li>
                    Huquqni muhofaza qiluvchi organlarning qonuniy talablarini
                    bajarish.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">4.3.</strong>{" "}
                  Operator Foydalanuvchining roziligisiz shaxsiy
                  ma&apos;lumotlarni uchinchi shaxslarga bermaydi, bundan
                  qonunda nazarda tutilgan holatlar mustasno.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">4.4.</strong>{" "}
                  Ma&apos;lumotlar shifrlangan holda saqlanadi va faqat
                  vakolatli xodimlar tomonidan ishlatiladi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">4.5.</strong>{" "}
                  Foydalanuvchi istalgan vaqtda o&apos;z shaxsiy
                  ma&apos;lumotlariga kirish, ularni o&apos;zgartirish yoki
                  o&apos;chirishni so&apos;rashi mumkin.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                5. Foydalanuvchining huquq va majburiyatlari
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">5.1.</strong>{" "}
                  Foydalanuvchi:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>Platformadan faqat qonuniy maqsadlarda foydalanishi;</li>
                  <li>
                    Shaxsiy ma&apos;lumotlarining maxfiyligini ta&apos;minlashi;
                  </li>
                  <li>
                    Platformaning normal ishlashiga to&apos;sqinlik qilmasligi;
                  </li>
                  <li>Uchinchilar huquqlarini buzmasligi kerak.</li>
                </ul>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">5.2.</strong>{" "}
                  Operator:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>Foydalanuvchi ma&apos;lumotlarini himoya qilish;</li>
                  <li>
                    Texnik uzilishlar yoki xavfsizlik hodisalari
                    to&apos;g&apos;risida xabar berish;
                  </li>
                  <li>
                    Platformaning barqaror ishlashini ta&apos;minlash uchun
                    zarur chora-tadbirlarni ko&apos;radi.
                  </li>
                </ul>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                6. Bildirishnomalar va axborot xabarlari
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">6.1.</strong>{" "}
                  Foydalanuvchi Platformada ro&apos;yxatdan o&apos;tganida, u
                  ta&apos;lim jarayoni bilan bog&apos;liq
                  push-bildirishnomalarni olishga rozilik bildiradi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">6.2.</strong>{" "}
                  Bunga quyidagilar kiradi: yangi darslar ochilishi, uy
                  vazifalari muddati, baholash natijalari, onlayn chat darslari
                  va boshqa ta&apos;limiy eslatmalar.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">6.3.</strong>{" "}
                  Foydalanuvchi xohlasa, bildirishnomalarni o&apos;chirib
                  qo&apos;yish yoki sozlamalarda cheklash huquqiga ega.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                7. javobgarlikni cheklash
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">7.1.</strong>{" "}
                  Operator Platforma &quot;as is&quot; tamoyiliga ko&apos;ra
                  taqdim etadi va uning uzluksiz ishlashini to&apos;liq
                  kafolatlamaydi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">7.2.</strong>{" "}
                  Operator Foydalanuvchi tomonidan Platformadan foydalanish
                  jarayonida yuzaga kelgan texnik muammolar yoki ma&apos;lumot
                  yo&apos;qotilishi uchun javobgar emas.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">7.3.</strong>{" "}
                  Foydalanuvchi Platformadan foydalangan holda sodir etilgan
                  harakatlari uchun mustaqil javobgar hisoblanadi.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                8. Intellektual mulk huquqlari
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">8.1.</strong>{" "}
                  Platforma, dizayn, logotip, dasturiy kod va boshqa tarkibiy
                  elementlar Operatorning intellektual mulkidir.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">8.2.</strong>{" "}
                  Ushbu materiallardan nusxa olish, tarqatish yoki tijorat
                  maqsadida foydalanish Operatorning yozma ruxsatisiz
                  taqiqlanadi.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                9. Kelishuvni o&apos;zgartirish tartibi
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">9.1.</strong>{" "}
                  Operator ushbu Kelishuv shartlarini bir tomonlama
                  o&apos;zgartirish huquqini saqlab qoladi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">9.2.</strong>{" "}
                  Yangi tahrir Platformada joylashtirilgan vaqtdan boshlab
                  kuchga kiradi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">9.3.</strong>{" "}
                  Foydalanuvchi Kelishuvdagi o&apos;zgarishlar bilan rozi
                  bo&apos;lmasa, Platformadan foydalanishni to&apos;xtatishi
                  shart.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                10. Nizolarni hal qilish
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">
                    10.1.
                  </strong>{" "}
                  Barcha nizolar, birinchi navbatda, tomonlar o&apos;rtasida
                  muzokara yo&apos;li bilan hal qilinadi.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-black dark:text-zinc-50">
                    10.2.
                  </strong>{" "}
                  Agar kelishuvga erishilmasa, nizo O&apos;zbekiston
                  Respublikasining amaldagi qonunchiligiga muvofiq sud tartibida
                  ko&apos;rib chiqiladi.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mt-6 mb-2">
                11. Aloqa ma&apos;lumotlari
              </h2>

              <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">
                  Agar sizda Kelishuv yoki Maxfiylik siyosati bo&apos;yicha
                  savollar bo&apos;lsa, quyidagi manzil orqali
                  bog&apos;lanishingiz mumkin:
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  <a
                    href="mailto:support@menta.uz"
                    className="text-xl font-semibold text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    📧 support@menta.uz
                  </a>
                  <a
                    href="https://menta.uz/contacts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-black dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    🌐 https://menta.uz/contacts
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8">
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
