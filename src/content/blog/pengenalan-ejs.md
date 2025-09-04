---
title: 'EJS: Sederhana, Cepat, tapi Bukan untuk Semua Jenis Proyek'
publishedAt: '5 Agustus 2025'
author: 'Iyan Zuli'
image: 'https://images.unsplash.com/photo-1662116137257-6e5793c365ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh0bWx8ZW58MHx8MHx8fDA%3D'
category: 'Pengenalan Teknologi'
isPinned: false
excerpt: 'EJS adalah templating engine sederhana untuk Node.js yang cocok untuk membuat halaman HTML dinamis secara cepat. Ideal untuk proyek kecil dan dashboard, tapi kurang cocok untuk aplikasi modern yang kompleks dan interaktif.'
---

# Hah? EJS? Apa itu?

Ya, pertanyaan itu pasti akan muncul ketika aku bilang EJS wkwk. Tidak heran jika orang-orang tidak kenal dengan EJS karena EJS termasuk tools underated. Yang mengetahui EJS hanyalah orang-orang yang memelajari Express.js selaku backend developer secara mendalam. Penasaran? baca terus blog ini.

Kalau mau lihat website yang kubuat dengan EJS, bisa kunjungi link berikut:

- [surabayabestpoint.onrender.com](https://surabayabestpoint.onrender.com), dilengkapi dengan Express.js, website ini menampilkan tempat terbaik di Surabaya tetapi hanya sebatas prototype
- [oop_kafe-frontend](https://github.com/UniversitasNegeriSurabaya-Iyan165/oop_kafe-frontend), prototype aplikasi self service

## Defini EJS

[EJS (Embedded JavaScript Templates)](https://ejs.co) adalah templating engine sederhana untuk Node.js yang memungkinkan kamu menyisipkan kode JavaScript ke dalam file HTML. EJS digunakan untuk merender halaman HTML dinamis di sisi server dan sangat populer dalam arsitektur tradisional server-rendered.

Dengan sintaks mirip HTML, EJS menjadi pilihan utama untuk banyak proyek Express.js karena kemudahannya, terutama bagi pemula yang baru memulai dengan server-side rendering. EJS digunakan dengan tag seperti `<% %>` lalu menyisipkan baris atau kode JavaScript secara langsung.

EJS juga memiliki fitur layout, partials, dan block dengan library atau package [ejs-mate](https://www.npmjs.com/package/ejs-mate). Penggunaan library ejs-mate memungkinkan EJS untuk menggunakan prinsip framework frontend pada umumnya seperti react, Next.js, dan sejenisnya walau tetap hanya sebatas library (tidak memiliki kerangka kerja tersendiri).

---

## Sejarah EJS

EJS dipublish di Februari tahun 2011 oleh Matthew Eernisse yang teriinspirasi dari ERB (Embedded Ruby). Bukan hanya namanya yang mirip, tetapi syntax atau markup nya juga mirip, `<% %>`. EJS mulai menjadi populer ketika Express.js naik daun di sekitar tahun 2012-2014. Sejak saat itu, EJS digunakan pada banyak project internal dan aplikasi web tradisional khas kombinasi Express.js (SSR).

Namun, popularitasnya mulai menurun pada 2016 karena framework modern seperti React, Vue, dll menguasai pasar. Hal ini juga semakin menurun ketika Next.js dan Nuxt.js lebih modern dalam membuat SSR. Saat ini, EJS hanya digunakan untuk belajar, proyek kecil atau pribadi, atau perusahaan lama yang masih memertahankan EJS.


Sumber:

- [https://wikipedia.org](https://en.wikipedia.org/wiki/Embedded_JavaScript)


---

## Tujuan EJS

Walau sedikit dan tidak relevan dalam dunia kerja, EJS bisa jadi relevan dalam kasus khusus. Gunakan EJS pada beberapa hal berikut:

* **Belajar SSR**<br/>
  Jika ingin belajar konsep backend + frontend server-rendered, terutama menggunakan Express.js, EJS sangat kurekomendasikan sebagai pemula yang ingin belajar SSR Express.js.

  Contoh produk nya ialah [surabayabestpoint.onrender.com](https://surabayabestpoint.onrender.com). Saya membuat Surabaya BestPoint hanya untuk belajar SSR di Express.js 😁.

* **Proyek Kecil**<br/>
  Membangun proyek kecil seperti CRUD, dashboard internal, admin panel. Bisa juga membuat prototipe cepat yang contohnya bisa kamu akses di resipotery GitHub berikut:
  
  Resipoteri frontend (EJS):<br/>
  [oop_kafe-frontend](https://github.com/UniversitasNegeriSurabaya-Iyan165/oop_kafe-frontend)
  
  Resipoteri backend (Express):<br/>
  [oop_kafe-backend](https://github.com/UniversitasNegeriSurabaya-Iyan165/oop_kafe-backend)

  *Btw code nya masih kacau, karena dipaksa OOP (Object Oriented Programming). Maklum, waktu itu masih pemula*😅

  Selain itu, bisa juga untuk membuat sistem dengan resource server terbatas (VPS kecil).

---

## Real World Use Case

Saya tidak menemukan sumber secara resmi terkait website sekarang yang menggunakan EJS. Data survey Node.js dulu menunjukkan bahwa EJS pernah di pakai pada GoDaddy, PayPal, dan Upwork pada server Node.js mereka. Namun sayang data survey tersebut sudah tidak ada 😔.

Terdapat satu situs yang dapat menampilkan website yang dibuat dengan EJS tetapi tingkat keakuratannya kurang jadi jangan dijadikan patokan. Website tersebut ialah [https://www.whatruns.com](https://www.whatruns.com/technology/ejs).

---

## Contoh Perbandingan

Template engine yang saya kuasai untuk saat ini hanya EJS. Jadi saya tidak dapat membandingkan dengan tools lain yang sepadan. Jangan, jangan bilang buat dibandingin sama React.js, sama sekali engga sepadan 🗿

---

## Kelebihan dan kekurangan EJS

Meskipun sederhana, EJS memiliki beberapa keunggulan yang membuatnya tetap relevan dalam pengembangan web tertentu. Tetapi jangan kaget kalau kekurangannya lebih fatal 🗿. EJS punya banyak keterbatasan dan kadang bisa jadi penghambat di proyek modern.


### Kelebihan EJS

1. ### Sangat Mudah Dipelajari

   Dengan sintaks yang mirip HTML dan logika JavaScript yang familiar, EJS sangat cocok untuk pemula. Dokumentasi nya pun juga tergolong mudah dipelajari jika sudah mengenal template engine.

   **Contoh Penggunaan:**<br/>
   `<h1>Halo <%= user.name %>!</h1>`

   **Funfact**, seorang mahasiswa bisa membuat halaman dinamis dari backend Express hanya dalam 5-10 menit tanpa framework frontend (hanya bermodal EJS).

2. ### Kemudahan Integrasi dan Build

   EJS terintegrasi dengan baik ke dalam Express cukup set `view engine: 'ejs'`, dan kamu bisa langsung render data ke halaman HTML. Berbeda dengan React, Vue, atau yang lainnya, EJS tidak membutuhkan bundler, transpiler, atau runtime tambahan. Hanya file berekstensi `.ejs` dan Node.js sebagai runtime environment.

3. ### Cocok untuk Server-Rendered Page Sederhana

   Untuk aplikasi yang hanya membutuhkan SSR sederhana (seperti admin panel, dashboard internal, atau email template), EJS sudah sangat cukup. Setidaknya lebih baik daripada HTML rasa vanilla dalam kemudahan render dan menyisipkan JavaScript 🗿

---

### Kekurangan EJS

1. ### Tidak Modular & Tidak Komponen

   EJS tidak mengenal konsep component seperti React atau Vue. Reuse tampilan hanya bisa dilakukan dengan `<%- include() %>` yang cepat berantakan saat skala membesar.

   **Contohnya**, ketika aplikasi tumbuh besar, kamu akan mengelola puluhan file include manual, yang bikin debugging jadi mimpi buruk. Jangan ulangi kesalahanku, pakai framework modern seperti react, vue, atau yang lainnya 🗿

2. ### Tidak Reactive / Interaktif

   Karena EJS adalah templating server-side, ia tidak cocok untuk membuat UI yang interaktif atau real-time. Butuh JavaScript manual jika ingin DOM interaksi. Alhasil proses development memakan banyak waktu hanya untuk satu komponen yang kompleks.

3. ### Tidak Efisien untuk SPAs

   Kalau kamu ingin Single Page Application (SPA) yang cepat dan seamless seperti React atau Vue, EJS bukan pilihannya.

   **Contohnya**, form yang reload seluruh halaman hanya untuk satu input bisa terasa jadul dan tidak efisien. Solusinya pakai tools CSR, SSG, ISR, di framework modern yang terkonfigurasi seperti Next.js, Astro.js, dan sejenisnya.

4. ### Kurangnya Tooling Modern

   Tidak ada hot reload (Harus manual seperti menggunakan [Nodemon.js](https://nodemon.io/)), tidak ada linting khusus, dan sedikit dukungan dari ekosistem tooling modern. Dokumentasi juga tergolong minim dan tidak aktif berkembang.

---

## Getting Started

Saya akan menjelaskan untuk cara instalasinya saja berdasarkan dokumentasi EJS.

1. **Instalasi**
   
   Jalankan di terminal dengan NPM:
   ```bash
   npm install ejs
   ```
   Saya g tau kalau bisa menggunakan package manager lain seperti yarn atau pnpm. Coba saja, seharusnya bisa.

Oke, itu saja, untuk seterusnya bisa tinggal baca dokumentasi untuk syntax-syntax nya 🗿. Saya tinggalkan link dokumentasi [disini](https://ejs.co/).

---

## Kesimpulan

EJS adalah templating engine ringan dan sederhana, cocok sebagai jembatan awal belajar tentang bagaimana server mengirimkan data ke tampilan HTML. Dalam skenario tertentu seperti dashboard kecil, proyek pribadi, atau pembelajaran Express, EJS masih **lumayan** lah.

Namun untuk aplikasi modern dan kompleks, EJS rasanya seperti **kudet**, **kuno**, **jadul**. Tidak ada reactivity, tidak ada komponen, tidak ada framework, dan tidak ada modularisasi yang layak untuk proyek besar.

**Jadi, apakah EJS cocok untukmu?**<br/>

Jika kamu pemula yang ingin memahami dasar web dinamis server-side dengan Express, itu bagus. Tapi kalau kamu sedang membangun sesuatu yang interaktif, scalable, dan kolaboratif atau sudah pro mending move on ke teknologi frontend modern.

<br/>

**Bonus funfact**
> Selama aku nyari loker, aku tidak pernah melihat ada spesifikasi EJS, antara aku kurang nyari atau memang sudah punah tanpa kuketahui 🗿

> Catatan dari penulis terkait EJS:
> 
> *Tidak masalah mengguankan EJS hanya untuk belajar Express.js.
> Tetapi jika ingin update pengalaman frontend yang modern, sangat kusarankan untuk move on ke framework atau tools modern seperti React, Next.js, Vue, Astro.js, dan sejenisnya.*