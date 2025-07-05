---
title: 'SASS: Senjata Styling Profesional yang Tak Selalu Perlu'
publishedAt: '5 Juli 2025'
author: 'Iyan Zuli'
image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3NzfGVufDB8fDB8fHww'
category: 'Styling tool'
isPinned: false
excerpt: 'SASS adalah CSS preprocessor yang memungkinkan kamu menulis styling lebih rapi, modular, dan efisien menggunakan variabel, mixin, dan nesting. Cocok untuk proyek skala menengah hingga besar.'
---

# Apa Itu SASS?

[SASS (Syntactically Awesome Stylesheets)](https://sass-lang.com) adalah sebuah preprocessor untuk CSS yang menambahkan fitur pemrograman ke dalam styling web. Dengan SASS, kamu bisa menggunakan variabel, fungsi (mixin), perhitungan, nesting, inheritance, dan modul untuk menulis CSS yang lebih efisien, terstruktur, dan mudah dikelola.

SASS hadir dalam dua sintaks: **SASS** (indentasi tanpa kurung kurawal) dan **SCSS** (lebih mirip CSS biasa, yang lebih umum digunakan). Setelah ditulis, file `.scss` akan dikompilasi menjadi CSS biasa yang bisa dijalankan oleh browser.

---

## Keunggulan SASS

SASS menjawab banyak kekurangan yang ada pada CSS murni, terutama untuk proyek besar dengan style yang kompleks.

### 🎯 Variabel

Dengan SASS, kamu bisa menyimpan nilai seperti warna, ukuran font, atau margin ke dalam variabel yang bisa digunakan berulang kali.

```scss
$primary-color: #FF5733;

.button {
  background-color: $primary-color;
}
