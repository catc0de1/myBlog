---
title: 'EJS: Sederhana, Cepat, tapi Bukan untuk Semua Jenis Proyek'
publishedAt: '3 Agustus 2025'
author: 'Iyan Zuli'
image: 'https://images.unsplash.com/photo-1662116137257-6e5793c365ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh0bWx8ZW58MHx8MHx8fDA%3D'
category: 'Templating engine'
isPinned: false
excerpt: 'EJS adalah templating engine sederhana untuk Node.js yang cocok untuk membuat halaman HTML dinamis secara cepat. Ideal untuk proyek kecil dan dashboard, tapi kurang cocok untuk aplikasi modern yang kompleks dan interaktif.'
---


# Apa Itu EJS?

[EJS (Embedded JavaScript Templates)](https://ejs.co) adalah templating engine sederhana untuk Node.js yang memungkinkan kamu menyisipkan kode JavaScript ke dalam file HTML. EJS digunakan untuk merender halaman HTML dinamis di sisi server dan sangat populer dalam arsitektur tradisional server-rendered.

Dengan sintaks mirip HTML, EJS menjadi pilihan utama untuk banyak proyek Express.js karena kemudahannya, terutama bagi pemula yang baru memulai dengan server-side rendering. EJS digunakan dengan tag seperti `<% %>` lalu menyisipkan baris atau kode JavaScript secara langsung.

EJS juga memiliki fitur layoout, partials, dan block dengan library atau package [ejs-mate](https://www.npmjs.com/package/ejs-mate). Penggunaan library ejs-mate memungkinkan EJS untuk menggunakan prinsip framework frontend pada umumnya seperti react, Next.js, dan sejenisnya walau tetap hanya sebatas library (tidak memiliki kerangka kerja tersendiri).

Btw, kalau mau lihat website yang kubuat dengan EJS bisa kunjungi link berikut:
[https://github.com/CatC0de1/SurabayaBestPoint](https://github.com/CatC0de1/SurabayaBestPoint)<br/>
(Link produksi nya ada di deskripsi resipoteri jika masih ada😅)

---

## Keunggulan EJS

Meskipun sederhana, EJS memiliki beberapa keunggulan yang membuatnya tetap relevan dalam pengembangan web tertentu.

1. ### Sangat Mudah Dipelajari

   Dengan sintaks yang mirip HTML dan logika JavaScript yang familiar, EJS sangat cocok untuk pemula.

   **Contoh Penggunaan:**
   ```html
   <h1>Selamat datang, <%= user.name %>!</h1>
   ```

   **Funfact** Seorang mahasiswa bisa membuat halaman dinamis dari backend Express hanya dalam 5-10 menit tanpa framework frontend.

2. ### Kemudahan Integrasi dan Build

   EJS terintegrasi dengan baik ke dalam Express cukup set `view engine: 'ejs'`, dan kamu bisa langsung render data ke halaman HTML. Berbeda dengan React, Vue, atau yang lainnya, EJS tidak membutuhkan bundler, transpiler, atau runtime tambahan. Hanya file berekstensi `.ejs` dan Node.js sebagai runtime environment.

3. ### Cocok untuk Server-Rendered Page

   Untuk aplikasi yang hanya membutuhkan SSR sederhana (seperti admin panel, dashboard internal, atau email template), EJS sudah sangat cukup. Setidaknya lebih baik daripada HTML rasa vanilla dalam kemudahan render dan menyisipkan JavaScript🗿

---

## Kelemahan EJS

Sebagaimana alat yang sederhana, EJS juga punya banyak keterbatasan dan kadang bisa jadi penghambat di proyek modern.

1. ### Tidak Modular & Tidak Komponen

   EJS tidak mengenal konsep component seperti React atau Vue. Reuse tampilan hanya bisa dilakukan dengan `<%- include() %>` yang cepat berantakan saat skala membesar.

   **Contohnya**, ketika aplikasi tumbuh besar, kamu akan mengelola puluhan file include manual, yang bikin debugging jadi mimpi buruk. Jangan ulangi kesalahanku, pakai framework modern seperti react, vue, atau yang lainnya🗿

2. ### Tidak Reactive / Interaktif

   Karena EJS adalah templating server-side, ia tidak cocok untuk membuat UI yang interaktif atau real-time. Butuh JavaScript manual jika ingin DOM interaksi.

3. ### Tidak Efisien untuk SPAs

   Kalau kamu ingin Single Page Application (SPA) yang cepat dan seamless seperti React atau Vue, EJS bukan pilihannya.

   **Contohnya**, form yang reload seluruh halaman hanya untuk satu input bisa terasa jadul dan tidak efisien. Solusinya pakai tools CSR, SSG, ISR, di framework modern yang terkonfigurasi seperti Next.js, Astro.js, dan sejenisnya.

4. ### Kurangnya Tooling Modern

   Tidak ada hot reload (Harus manual seperti menggunakan Nodemon.js), tidak ada linting khusus, dan sedikit dukungan dari ekosistem tooling modern. Dokumentasi juga tergolong minim dan tidak aktif berkembang.

---

## Kapan Sebaiknya Menggunakan EJS?

Gunakan EJS jika kamu:

* **Belajar SSR**<br/>
  Jika ingin belajar konsep backend + frontend server-rendered, terutama menggunakan Express.js, EJS sangat kurekomendasikan sebagai pemula yang ingin belajar SSR Express.js.

* **Proyek Kecil**<br/>
  Membangun proyek kecil seperti CRUD, dashboard internal, admin panel. Bisa juga membuat prototipe cepat yang contohnya bisa kamu akses di resipotery berikut:
  
  Resipoteri frontend (EJS):<br/>
  [https://github.com/UniversitasNegeriSurabaya-Iyan165/oop_kafe-frontend](https://github.com/UniversitasNegeriSurabaya-Iyan165/oop_kafe-frontend)
  
  Resipoteri backend (Express):<br/>
  [https://github.com/UniversitasNegeriSurabaya-Iyan165/oop_kafe-backend](https://github.com/UniversitasNegeriSurabaya-Iyan165/oop_kafe-backend)

  *Btw code nya masih kacau, karena dipaksa OOP (Object Oriented Programming). Maklum, waktu itu masih pemula*😅

  Selain itu, bisa juga untuk membuat sistem dengan resource server terbatas (VPS kecil) seperti resipotery backend yang kucantumkan sebelumnya.

## Kapan Sebaiknya **Tidak** Menggunakan EJS?

Hindari EJS jika kamu:

* **Frontend Modern**<br/>
  Jauhkan sejauh-jauhnya jika kamu ingin membangun aplikasi frontend interaktif, dinamis yang kompleks, atau SPA. Ganti dengan tools yang lebih modern seperti React, Vue, dan lainnya.

* **Proyek Kompleks**<br/>
  Jauhkan juga sejauh-jauhnya jika kamu mengerjakan proyek kolaboratif yang membutuhkan arsitektur modular dan maintainable.
  
* **Upgrade Pengalaman**<br/>
  Jika mengincar pengalaman pengguna yang seamless dan modern, sudah waktunya untuk move on dari EJS.

---

## Kesimpulan

EJS adalah templating engine ringan dan sederhana, cocok sebagai jembatan awal belajar tentang bagaimana server mengirimkan data ke tampilan HTML. Dalam skenario tertentu seperti dashboard kecil, proyek pribadi, atau pembelajaran Express, EJS masih lumayan lah.

Namun untuk aplikasi modern dan kompleks, **EJS cepat terasa kudet, kuno, jadul**. Tidak ada reactivity, tidak ada komponen, tidak ada framework, dan tidak ada modularisasi yang layak untuk proyek besar.

**Jadi, apakah EJS cocok untukmu?**<br/>

Jika kamu pemula yang ingin memahami dasar web dinamis server-side dengan Express, itu bagus. Tapi kalau kamu sedang membangun sesuatu yang interaktif, scalable, dan kolaboratif atau sudah pro mending move on ke teknologi frontend modern.

<br/>

**Bonus funfact**
> Selama aku nyari loker, aku tidak pernah melihat ada spesifikasi EJS, antara aku kurang nyari atau memang sudah punah tanpa kuketahui🗿