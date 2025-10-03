---
title: 'Bootstrap CSS: Framework CSS yang siap saji, tinggal dipakai'
publishedAt: '5 September 2025'
author: 'Iyan Zuli'
image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
category: 'Pengenalan'
isPinned: true
excerpt: 'Bootstrap CSS adalah framework CSS untuk membangun style dengan cepat karena sudah disediakan komponen-komponen UI nya. Cocok untuk kebutuhan styling yang cepat.'
tags:
  - bootstrap
  - css
index: 3
---

# Apa Itu Bootstrap CSS? Tinggal copas terus?

Dalam pembuatan website, ada bagian yang tidak lepas yaitu sisi frontend atau bagaimana konten dalam website ditampilkan ke klien. Salah satu bagian frontend adalah styling dalam UI/UX. Dalam pembuatan UI/UX, umumnya menggunakan [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (tidak tau jika ada tools styling selain CSS 🗿). Namun, jika menggunakan UI from scratch dengan CSS sendiri, itu akan memakan waktu lebih lama dan code nya rawan kacau. Nah disitulah Bootstrap CSS lahir sebagai penyelamat developer tahun 2011 an.

Selama saya menggunakan Bootstrap CSS, terdapat tantangan dan keseruan yang cukup mencolok. Tantangannya ialah kamu harus custom style supaya style nya tidak terlihat seperti template. Sedangkan letak keseruannya ialah bikinnya cepet 😎. Biar lebih paham, akan kujelaskan secara detail tentang Apa itu Bootstrap CSS dan pengalaman saya dalam menggunakan Bootstrap CSS. Contoh website yang saya buat dengan Bootstrap CSS ialah sebagai berikut:
- [surabayabestpoint.onrender.com](https://surabayabestpoint.onrender.com), website yang menampilkan tempat terbaik di Surabaya (masih tahap prototyping 😔)
- [software-techs-portal.vercel.app](http://software-techs-portal.vercel.app), tepat sekali, blog ini sendiri 😅

---

## Definisi Bootstrap CSS

[Bootstrap CSS](https://getbootstrap.com/) adalah framework CSS open-source dengan tujuan mempermudah developer membangun tampilan website yang rapi, modern, dan responsive tanpa harus menulis CSS dari nol. Bootstrap cukup populer dalam industri, dapat dikembangkan sendiri secara pribadi, serta terdapaat beberapa paket fitur komponen UI atau frontend. Selain itu, Bootstrap CSS juga di build dan custom oleh [SASS](https://sass-lang.com/), memanfaatkan sistem grid serta *reusable component*, dan dilengkapi dengan Plugin JavaScript. 

Penggunaan Bootstrap CSS tergolong mudah, tentunya jika sudah belajar CSS terlebih dahulu. Beberapa komponen penting atau menonjol dalam Bootstrap CSS antara lain:
- *Responsive grid system*
- Komponen UI siap pakai (tinggal copas 😋)
- *Utility class*
- Desain yang konsisten
- Support komponen JavaScript

contoh pemakaian sederhana:
```html
<h1 class="text-primary">Hello</h1>
```

Dari potongan tersebut, hasilnya ialah text pada `h1` berwarna biru. Selain itu, Bootstrap CSS menonaktifkan style bawaan dari HTML itu sendiri lalu mengganti nya dengan gaya Bootstrap CSS, contohnya komponen `h1` tidak memiliki ukuran khusus khas HTML sehingga style khas Bootstrap terkesan modern.

---

## Sejarah Bootstrap CSS

Bootstrap CSS dibuat oleh **Mark Otto** dan **Jacob Thornton** sebagai engineer di Twitter pada tahun sekitar 2010 - 2011. Pada awalnya, nama Bootstrap CSS ialah Twitter Blueprint yang dipakai Twitter secara internal untuk menyatukan gaya visual yang sebelumnya berantakan seperti tiap developer membuat CSS sendiri sehingga tidak konsisten dan susah dimaintenance. Pada 19 Agustus 2011, Bootstrap CSS rilis sebagai framework open-source lalu namanya berganti menjadi Twitter Bootstrap dikarenakan memiliki kontribusi pada Hackathon. Namanya juga berganti lagi menjadi Bootstrap CSS dan terus berkembang karena dukungan dari developer Twitter.

Pada 31 Januari 2012, Bootstrap CSS versi 2.0 rilis yang menambahkan fitur grid dan responsive yang membuat Bootstrap CSS semakin meningkat. Tetapi tak lama kemudian, kedua pendiri dari Bootstrap CSS keluar dari Twitter lalu memutuskan untuk menjadikan Bootstrap CSS menjadi project independen. Masa keemasan Bootstrap CSS terjadi pada sekitar 2015-2018 dimana Bootstrap CSS digunakan oleh beberapa perusahaan besar hingga pernah menjadi standar de facto untuk website cepat jadi atau prototyping. Kepopuleran Bootstrap mulai menurun ketika [Tailwind CSS](https://tailwindcss.com/) mulai booming. Untuk sekarang, Bootstrap CSS sudah memasuki versi 5 dengan beberapa fitur yang bagus, tetap dipakai pada perusahaan-perusahaan besar, serta komunitas yang stabil.


Sumber:

- [https://wikipedia.org](https://en.wikipedia.org/wiki/Bootstrap_%28front-end_framework%29?)
- [https://getbootstrap.com/docs/3.3/about](https://getbootstrap.com/docs/3.3/about/)

---
## Tujuan Bootstrap CSS

Bootstrap CSS diciptakan untuk membuat style website yang modern, cepat, atau konsisten. Bootstrap CSS adalah pilihan tepat jika kamu ingin membangun:

- **Website cepat jadi**<br/>
   Contohnya seperti kebutuhan protoyping atau website yang membutuhkan kecepatan development misalnya deadline dekat(kasihan🥲). 

- **UI modern atau klasik**<br/>
   Bootstrap CSS membawa nuansa klasik. Jika dikustom dan dipakai dengan benar, maka Bootstrap CSS sudah cukup untuk menampilkan UI yang modern.

- **Website yang didukung SASS atau plugin JavaScript**<br/>
   Jika website sudah terdapat atau berencana menggunakan SASS atau plugin JavaScript, maka Bootstrap CSS cocok untuk itu karena sudah disediakan utilitas nya dari dokumentasi secara resmi.

---

## Real World Use Case

Kalau kamu adalah developer frontend tahun 2020 an, pasti sudah menganggap Bootstrap CSS sudah sepi digunakan. Siap-siap saja untuk melihat beberapa website yang dibuat dengan Bootstrap CSS. Berikut ialah beberapa website yang dibuat dengan Bootstrap CSS:

- Spotify - [https://open.spotify.com](https://open.spotify.com)
- NASA - [https://www.nasa.gov](https://www.nasa.gov)
- Udemy - [https://www.udemy.com](https://www.udemy.com/)
- GitHub - [https://www.github.com](https://www.github.com/)
- Dan masih banyak lagi

Kamu dapat melihat showcase lengkap nya dari link berikut:
- [bootswatchr.com](https://bootswatchr.com/bootstrap-in-the-real-world) - artikel tentang website yang menggunakan Bootstrap CSS
- [www.wappalyzer.com](https://www.wappalyzer.com/technologies/ui-frameworks/bootstrap/) - data tentang website yang dibuat dengan Bootstrap beserta trafic nya

---

## Contoh Perbandingan

Saya akan membandingkan secara sederhana dan umum untuk perbandingan Bootstrap CSS dengan tools lain. Dalam pembuatan style UI, saya akan membandingkan Bootstrap CSS dengan [Tailwind CSS](https://tailwindcss.com/)

| Pembanding             | Tailwind CSS             | Bootstrap CSS                                         |
|------------------------|--------------------------|-------------------------------------------------------|
| Tujuan                 | Kecepatan & Kustomasi    | Lebih berfokus pada kecepatan                         |
| Kemudahan belajar      | Mudah                    | Mudah                                                 |
| Kecepatan pengembangan | Cepat                    | Lebih cepat dari Tailwind CSS                         |
| Kustomasi style        | Tinggi                   | Tinggi, tetapi membutuhkan konfigurasi tambahan       |
| Komunitas              | Luas                     | Luas, tetapi lebih kecil dari Tailwind CSS (*stabil*) |
| Dokumentasi            | Lengkap & Mudah dipahami | Lengkap & Mudah dipahami                              |

(*kok perbedaannya sedikit ya kalau ditinjau dari pengalamanku dan pengetahuanku* 😑)
>**Sekali lagi, perbandingan tersebut hanya gambaran kasar saja, real use case pasti berbeda sesuai dengan kebutuhan dan cara menggunakannya.*

---

## Kelebihan dan Kekurangan Bootstrap CSS

Bootstrap CSS memang menduduki salah satu top dari framework styling. Namun, Bootstrap CSS memiliki beberapa hal yang perlu dipikirkan ketika memulai project baru. Berikut ialah kelebihan dan kekurangan dari Bootstrap CSS:

### Kelebihan Bootstrap CSS

1. **Kecepatan dalam membuat UI**

   Bootstrap CSS memang di desain untuk kecepatan pembuatan style UI. Salah satu fitur nya adalah terdapat UI siap pakai, reusable component, komponen yang otomatis responsive, contoh dalam dokumentasi lengkap (lagi-lagi tinggal apa? ya copas 🤣). Jadi tidak perlu untuk memulai styling dengan menulis CSS dari nol.
   
   **Contohnya**, website blog pribadi yang saya buat ini memerlukan waktu dibawah setengah hari untuk membuat full UI dari tiap komponen, halaman, hingga responsive nya 😁

2. **Tampilan Modern**

   Bootstrap CSS mereset style HTML lalu menggantnya dengan tampilan khas Bootstrap CSS yang konsisten. Gaya Bootstrap CSS memberikan nuansa klasik. Namun, ketika style Bootstrap CSS dikustomasi, maka akan menghasilkan style yang modern.

   **Contohnya**, selain blog ini, website [Surabaya BestPoint](https://surabayabestpoint.onrender.com/) juga memiliki tampilan yang tergolong konsisten dan modern. (*Namun sayangnya website tersebut hanyalah eksperimental sehingga tidak dapat dicoba seecara menyeluruh* 😔)

3. **Dukungan SASS dan plugin JavaScript**

   Jika website menggunakan SASS, maka Bootstrap CSS memiliki kelebihan dalam hal itu karena support secara langsung sejak versi 5. Selain itu Bootstrap CSS juga menyediakan beberapa plugin JavaScript yang siap pakai.

   **Contohnya**, website [Surabaya BestPoint](https://surabayabestpoint.onrender.com/) juga menambahkan beberapa plugin JavaScript untuk beberapa komponen seperti pik a date sehingga mempercepat dan mempermudah pengembangan.


### Kekurangan Bootstrap CSS

1. **Tampilan template**

   Jika UI dari Bootstrap CSS tidak dikustom, maka akan ketahuan bahwa style tersebut merupakan bawaan Bootstrap CSS (generik). Hal ini mengakibatkan UI menjadi kurang unik atau bisa jadi kaku jika terlalu mengandalkan pada template Bootstrap CSS.

   **Contohnya**, cuma modal lihat saja, pasti kalian tau kalau website [Surabaya BestPoint](https://surabayabestpoint.onrender.com/) memakai Bootstrap CSS 😅.

2. **Kurang fleksibel**

   Fleksibilitas dan kustomasi Bootstrap CSS kurang jika dibandingkan dengan Tailwind CSS. Walaupun sebenarnya Bootstrap CSS juga bisa custom secara pribadi tetapi memerlukan waktu untuk konfigurasi Bootstrap CSS lokal nya. Jika sedari awal memang berencana membuat UI yang benar-benar unik, kustom, atau tidak menganut template tertentu (seperti Bootstrap CSS), maka pertimbangkanlah Tailwind CSS.

3. **Bisa berat jika tidak diatur dengan benar**

   Karena berisi banyak komponen, ukuran default cukup besar. Hal ini bisa memperlambat load time saat mengakses halaman website. Masalah seperti ini bisa diatasi jika dilakukan kompresi Bootstrap CSS seperti *tree-shaking* atau *custom-build* sebelum build project supaya hanya komponen yang dipakai yang akan dibundle.
   
   **Contohnya**, sering terjadi pada website-website kecil yang menggunakan Bootstrap CSS yang akibatnya hanya beberapa fitur yang dipakai sedangkan sisanya menjadi beban CSS dan JavaScript. Kebanyakan kesalahan ini terjadi pada newbie (*first time*) atau tahap belajar.

4. **Ketergantungan JQuery (dulu)**
   
   Dulu pada versi dibawah 5, Bootstrap CSS hanya bergantung pada [JQuery](https://jquery.com/) yang mana popularitasnya menurun. Namun pada versi 5, Bootstrap CSS sudah bergantung ke JavaScript Vanilla alih-alih [JQuery](https://jquery.com/).
   
   (*maksudnya kalau bekerja dengan web yang memiliki versi Bootstrap CSS dibawah 5, siap-siap bertemu dengan legenda frontend* 🗿).

---

## Getting Started

Dokumentasi Bootstrap CSS secara lengkap dapat dilihat dengan link sebagai berikut:

[https://getbootstrap.com](https://getbootstrap.com)

Jika ingin memulai secara cepat, saya akan menjelaskan beberapa step nya:

1. **Prerequisites**
   
   Sebelum menggunakan Bootstrap CSS, sangat direkomendasikan untuk memelajari CSS terlebih dahulu, berikut saya cantumkan link untuk memelajari CSS via dokumentasi:

   - [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
   - [https://web.dev/css?hl=id](https://web.dev/css?hl=id)
   - [https://www.w3schools.com/css/](https://www.w3schools.com/css/)
  
   (*atau bisa memelajari selain dokumentasi seperti video tutorial atau AI. It's up to u, tetapi dokumentasi tetap harus dipegang*)

   Dan sebelum memulai menggunakan Bootstrap CSS, diperlukan browser modern seperti Chrome, Firefox, Edge, Opera, Safari, dan lain-lain.

2. **Instalasi**

   Untuk instalasi, ada beberapa cara diantaranya mengunduh file Bootstrap CSS secara langsung di dokumentasi nya, menggunakan CDN, atau mengunduh via package manager. Akan saya contohkan mengunduh dengan package manager di terminal sebagai berikut:

   Jika menggunakan npm:
   ```bash
   npm install bootstrap@5.3.8
   ```

   Atau jika menggunakan yarn:
   ```bash
   yarn add bootstrap@5.3.8
   ```

   Atau jika menggunakan Bun:
   ```bash
   bun add bootstrap@5.3.8
   ```

   Atau jika menggunakan RubyGems (rekomndasi dengan bundler):
   ```bash
   gem 'bootstrap', '~> 5.3.8'
   ```
   tanpa bundler:
   ```bash
   gem install bootstrap -v 5.3.8
   ```

   Atau jika menggunakan Composer:
   ```bash
   composer require twbs/bootstrap:5.3.8
   ```

   Atau jika menggunakan NuGet:
   ```bash
   Install-Package bootstrap
   ```

   (*banyak amat* 🗿)
   
Ok, untuk getting startednya itu saja wkwk. Untuk yang selebihnya hanya tentang tata cara menggunakannya, akan saya tinggalkan link dokumentasi nya [disini](https://getbootstrap.com).

---

## Kesimpulan

Bootstrap CSS berfokus pada kecepatan dalam pengembangan hingga tahap responsive dengan hasil yang modern dan konsisten. Bootstrap CSS juga terintegrasi secara resmi dengan SASS dan plugin JavaScript. Namun kelemahan besarnya ialah tidak boleh terpaku pada template Bootstrap supaya website yang dihasilkan tidak generik, pasaran, atau yang paling parah ialah tidak sesuai dengan design UI/UX awal.

<br/>

**Jadi, Kapan Sebaiknya Menggunakan Bootstrap CSS?**

Gunakan Bootstrap CSS jika ingin prototyping cepat, membuat website yang cepat jadi, tidak memusingkan design UI/UX, atau website yang terintegrasi dengan SASS dan plugin JavaScript lain. Perusahaan-perusahaan lama identiknya menggunakan Bootstrap CSS, sehingga pelajari lah Bootstrap CSS sesuai dengan target perusahaan yang diinginkan.

---

<br/>

> Catatan dari penulis terkait Bootstrap CSS:
> 
> *Yang aku sukai dari Bootstrap CSS adalah kecepatan dalam pengembangannya.
> Atau aku sendiri yang engga suka desain UI/UX yang pada akhirnya mengandalkan Bootstrap CSS? 😅
> Saranku pelajari dulu CSS sampai bisa, setelah itu aku lebih menyarankan memelajari Tailwind CSS terlebih dahulu karena lebih menjamin.
> Jika kamu berhasil memalajari Tailwind CSS, maka akan sangat mudah untuk memelajari Bootstrap CSS dan begitu juga sebaliknya.*