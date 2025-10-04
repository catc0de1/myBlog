---
title: 'Cheat-sheet Conventional Commit di Git, Sangat Disarankan'
publishedAt: '5 Oktober 2025'
author: 'Iyan Zuli'
image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
category: 'Cheatsheet'
isPinned: true
excerpt: 'Conventional commit di git sangat berperan dalam keterbacaan di version control system seperti git atau bahkan repository seperti GitHub. Tidak wajib tetapi sangat disarankan'
tags:
  - git
  - GitHub
index: 4
---

# Kenapa Conventional Commit di Git itu Penting? Bukannya Kita Bebas Mengetik Commit?

Jika kamu adalah seorang developer dan baru pertama kali mendengar ini, maka kamu terindikasi rookie. Dan jika sudah push commit tanpa mengetahui ini, itu tidak masalah, rookie mistake bisa dimaklumi karena saya dulu juga begitu. Setelah membaca sekilas definisi dan cheat sheet nya, harapannya kamu menerapkan ini untuk kedepannya supaya mengikuti best practice & tren, memudahkan pengembangan, dan terlihat keren.

Sumber pembuatan cheat sheet conventional commits berasal dari pengalaman pribadi serta sumber external sebagai berikut:

- [conventional commits](https://www.conventionalcommits.org/)
- [Angular commits](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

---

## Definisi

**Conventional Commits** adalah aturan commits yang telah disepakati oleh komunitas developer sebagai standar commit untuk kemudahan tracking version control system seperti git. Meskipun tidak wajib, aturan ini sangat disarankan dan sudah diterapkan oleh mayoritas developer. Conventional ini juga boleh dibuat aturan tersendiri untuk pattern commits, misalnya dalam suatu perusahaan ingin membuat aturannya tersendiri. Meskipun fokusnya adalah untuk developer, conventional commit dapat diterapkan di luar bidang itu seperti data analyst, data science, dan lain sebagainya dengan sedikit perbedaan.

Penggunaan commit dapat dilakukan dengan `git commit` lalu memasuki editor vim, nano, atau sejenisnya tergantung os. JIka tidak mau memasuki editor, bisa menambahkan `-m` yang akan seperti ini:

```bash
git commit -m "ini pesan commit"
```

Btw bisa juga memakai extension nya di VSCode kalau mau.


## Kenapa Penting?

- Memudahkan melacak perkembangan project dalam git
- Diterapkan oleh mayoritas sehingga team hingga contributor dapat memahami dengan mudah
- Semantik, sesuai best practice
- Otomatis membuat CHANGELOGs yang rapi
- Trigger serta mempermudah build dan CI/CD Pipeline

---

## Cheat Sheets

```
{tipe}{(scope, opsional)}: {deskripsi}

{body, opsional}

{footer(s), opsional}
```

```bash
git commit -m "<type>(<optional scope>): <description>" \
  -m "<optional body>" \
  -m "<optional footer(s)>"
```

Struktur diatas adalah commit versi lengkap, tanpa kurung kurawal. Tidak harus semua, minimal ada tipe dan deskripsi sedangkan body, scope, dan footer bersifat opsional. Berikut ialah penjelasannya satu per satu komponen:

1. **Deskripsi**
   
   Berperan sebagai inti dari pesan perubahannya dan **wajib** ada. Berikut aturannya:
   
   - Berisi tentang **apa yang diubah**, bukan bagaimana
   - **Singkat** dan **jelas** (max 72 char, best practice dari git)
   - **Tanpa** kaptial di awal dan **tanpa** tanda baca di akhir

   </br>

2. **Tipe**
   
   Berperan sebagai kategori perubahan dan **wajib** ada. Berikut aturannya:
   
   - **Singkat** dan menggunakan **lowercase**
   - **Disarankan** memakai kata kunci standar
  
   </br>

   **Kata Kunci Standar**

   Minimal kata kunci standar yang digunakan ialah **feat** dan **fix**, tetapi disarankan untuk menerapkan semua. Jika dalam kasus tertentu kata kunci standar tidak cukup, membuat kata kunci custom adalah ide bagus. Kata kunci ini berlaku untuk UI maupun API.
   
   1. **feat** (new feature/function)
    
      Perubahan yang **berdampak** pada **user**. Gunakan jika:
      
      - menambahkan fitur baru
      - menambahkan fungsionalitas baru
      
      </br>
  
      Contoh:
      
      - `feat: add new ui component in navbar`
      - `feat: add image converter system`
      - `feat: add session and cookies system`

      </br>

   2. **fix** (fix a bug/error)
      
      Perubahan yang **berdampak** pada **user**. Gunakan jika:

      - memperbaiki bug atau error
      - memperbaiki kesalahan tujuan program

      </br>

      Contoh:

      - `fix: remove toast spam in register page`
      - `fix: resolve undefined uuid`
      - `fix: change button color with correct theme`

      </br>

   3. **perf** (performance improvments)

      Perubahan yang **berdampak** pada **user**. Gunakan jika:

      - meningkatkan performa program (speed, memory, dll)

      </br>

      Contoh:

      - `perf: only render used client components`
      - `perf: simplify query builder`
      - `perf: delete unused assets`

      </br>

   4. **refactor** (code refactoring without changing behavior)
      
      Perubahan yang **tidak berdampak** pada **user**. Gunakan jika:

      - mengubah struktur code tanpa menambah fitur atau memperbaiki bug
      - membuat program lebih mudah dibaca developer
      - membersihkan program

      </br>

      Contoh:

      - `refactor: separate controller into modular services`
      - `refactor: using async await istead promise`
      - `refactor: renaming column variable using snake_case convention`

      </br>

   5. **style** (change code style only)

      Perubahan yang **tidak berdampak** pada **program**. Gunakan jika:

      - format code (Prettier, ESLint, dll)
      - mengubah gaya penulisan code tanpa mengubah program (indentation, whitespace, line break, dll)

      </br>

      Contoh:

      - `style: change indentation from 4 to 2`
      - `style: format code with ESLint`
      - `style: change Prettier rules`

      </br>

   6. **test** (test changes)

      Perubahan pada **unit testing**. Gunakan jika:

      - menambah unit testing
      - memperbaiki unit testing

      </br>

      Contoh:

      - `test: add unit test for auth middleware`
      - `test: improve API request validation test`
      - `test: fix performance latency checks`

      </br>

   7. **docs** (documentations)

      Perubahan pada **dokumentasi**. Gunakan jika:

      - menambah/mengubah dokumentasi (README, CHANGELOG, dll)
      - menambah/mengubah code documentation (comments, dll)
      - menambah/mengubah docs generate (swagger, dll)

      </br>

      Contoh:

      - `docs: update README to include installation instructions`
      - `docs: apply conventional comments in c++ for variables`
      - `docs: add video links usage in notes.txt`

      </br>

   8. **build** (build process / dependencies)

      Perubahan pada **production**. Gunakan jika:

      - mengubah/mengupdate konfigurasi build
      - mengubah/mengupdate dependencies yang berdampak pada build
      - mengkonfigurasi devops (docker, kurbenetes, dll)

      </br>

      Contoh:

      - `build: upgrade tauri to v2.0`
      - `build: migration from npm to pnpm`
      - `build: update docker image`

      </br>

   9.  **ci** (continuous integration)

       Perubahan pada **konfigurasi CI/CD**. Gunakan jika:

       - menambah/mengubah konfigurasi CI/CD
       - update workflows (GitHub action, dll)

       </br>

       Contoh:

       - `ci: add health check in GitHub Action`
       - `ci: configure jenkins for integration test`
       - `ci: add security scan in GitLab`

       </br>

   10. **chore** (routine task / miscellaneous)

       Perubahan yang **tidak berdampak** pada **program**. Gunakan jika:

       - urusan maintenance & routine task
       - mengupdate devDependencies
       - mengkonfigurasi project settings (package.json. .gitignore, dll)
       - memindahkan atau mengganti nama file/folder
       - perubahan lain yang tidak termasuk ke dalam tipe-tipe sebelumnya

       </br>

       Contoh:

       - `chore: update .gitignore to include .editorconfig`
       - `chore: update @types/node to latest version`
       - `chore: renaming folder with kebab-case`

       </br>

   11. **revert** (revert a previous commit)

       Perubahan untuk berpindah ke commit sebelumnya. Gunakan jika:

       - kembali/rollback ke commit sebelumnya jika dibutuhkan

       </br>

       Contoh(default dari git):

       - `revert: "feat: add new ui component in navbar"`
       - `revert: "fix: resolve undefined uuid"`
       - `revert: "build: upgrade tauri to v2.0"`

       </br>

3. **Scope**
   
   Scope adalah bagian yang bersifat **opsional**40px pada conventional commit. Scope menjelaskan area, modul, atau bagian code yang terpengaruh pada commit. Berikut ialah aturannya:

   - berada tepat **sesudah** `tipe` dan **sebelum** ":".
   - singkat padat jelas
   - **lowercase** dan **tidak ada** tanda baca
   - boleh menggunakan lebih dari satu scope, dipisahkan dengan koma tanpa spasi (**tetapi ini tidak lazim**)
   - nama scope **bebas**, ditentukan project/tim. contoh:
     - **modul**: auth, payment, session
     - **file**: readme, yaml, json
     - **komponen**: navbar, button, dto
     - **layer**: model, view, controller
     - **area**: api, ui, core

   </br>

   Contoh:
   
   - `feat(session): add session and cookies system`
   - `docs(readme): update README to include installation instructions`
   - `fix(ui): change button color with correct theme`

   </br>

4. **Body**
   
   Body adalah bagian yang bersifat **opsional** pada conventional commit. Body berisi penjelasan tambahan dari deskripsi commit seperti apa, kenapa dan bagaimana. Berikut ialah aturannya.

   - tambahkan satu baris kosong sesudah tipe & deskripsi
   - **tidak ada** batasan char
   - **boleh** menggunakan huruf kapital dan tanda baca
   - **boleh** multi line seperti paragraf
   - **boleh** menggunakan bullet list

   </br>

   Contoh:
   
   1. ```
      chore: renaming folder with kebab-case

      Renamed folders to kebab-case for consistency.
      ```

   2. ```
      refactor(api): separate controller into modular services

      The controller had grown too large and was handling multiple
      responsibilities, making it hard to maintain and test. 

      This commit extracts the logic into separate modular services:
       - UserService for handling user operations
       - AuthService for authentication and token management
       - NotificationService for sending system notifications

       This separation improves readability, maintainability, and
       testability of the codebase without changing external behavior.
       ```

   </br>

5. **Footer(s)**
   
   Footer(s) adalah bagian yang bersifat **opsional** pada conventional commit. Berikut ialah aturannya:

   - strukturnya berupa `<token>: nilai`
   - footer **Boleh** lebih dari satu
  
   <br/>
   
   Berikut jenis-jenis token pada footer secara umum:
   
   1. **BREAKING CHANGE**
   
      - **harus** uppercase dan dengan spasi
      - dipakai untuk menandai perubahan yang tidak kompatibel, *backward incompatible*
      - bisa digantikan dengan `!` sebagai penanda `BREAKING CHANGE` tepat sebelum `:` dan sesudah `type` atau `scope` jika ada. (*tetapi best practice tetap menyertakan BREAKING CHANGE*)
   
      <br/>

      Contoh:

      1. ```
         feat: remove deprecated auth API

         BREAKING CHANGE: All clients must update to use /auth/jwt endpoint instead of /auth/session.
         ```
      2. ```
         feat!: remove deprecated auth API

         BREAKING CHANGE: All clients must update to use /auth/jwt endpoint instead of /auth/session.
         ```
      3. ```
         refactor(auth)!: remove deprecated login methods

         BREAKING CHANGE: `loginWithToken` has been removed. Use `authenticate` instead.
         ```


      <br/>

   2. **Referensi issue / tiket**
      - menghubungkan commit dengan issue atau tiket
      - untuk nilai, ditambahkan `#` tepat sebelum nilai
      - Terdapat beberapa jenis:
        - `closes` commit ini menutup issue dari `nilai`
        - `fixes` commit ini memperbaiki issue dari `nilai`
        - `refs` commit ini merujuk ke issue dari `nilai` tanpa menutupnya

      <br/>

      Contoh:
      
      1. ```
         fix: handle null pointer in profile service

         Fixes #234
         Refs #235
         ```

      <br/>

   3. **Metadata**

      - menambahkan metadata seperti info penulis, contributor, reviewer, dll
      - konvensinya **harus** kebab-case
      - contoh umum:
        - Reviewed-by
        - Co-authored-by
        - Signed-off-by

      <br/>

      Contoh:

      1. ```
         fix: handle null pointer in profile service

         Reviewed-by: Alice
         Co-authored-by: Bob <bob@example.com>
         ```

      <br/>

---

## Ringkasan

Berikut adalah poin penting dari cheat sheet conventional commits:

|   Tipe   |Tujuan|
|----------|---------|
|feat      |Menambahkan fitur atau fungsi baru yang berdampak ke user|
|fix       |Memperbaiki bug, error, atau kesalahan yang berdampak ke user|
|perf      |Meningkatkan performa seperti speed, memory, dll|
|refactor  |Mengubah atau membersihkan struktur code untuk keterbacaan oleh developer dan tidak mengubah tujuan program|
|style     |Mengubah gaya dari code seperti indentasi, eol, dll serta tidak mengubah tujuan program|
|test      |Menambah, mengubah atau memperbaiki unit testing|
|docs      |Menambah atau mengubah dokumentasi seperti README, comment, dll|
|build     |Perubahan pada production seperti konfigurasi build, dependencies, devops|
|ci        |Perubahan pada konfigurasi CI/CD|
|chore     |Maintenance, routine task, update devDependencies, konfigurasi project (package.json, .gitignore, dll), ganti nama. Perubahan lain yang tidak termasuk pada tipe sebelumnya|
|revert    |Perubahan untuk berpindah ke commit sebelumnya|

---

## Kesimpulan

Conventional commits pada git sangat disarankan. Jika belum terbiasa menerapkannya, terapkan secara perlahan dimulai dari `feat` dan `fix` lalu bertahan ke tipe yang lain dan pastinya jangan lupa deskripsinya. Untuk scope, body, footer bisa belakangan saja. *Hope you enjoy it Developers* ^-^

<br/>

> Catatan dari penulis terkait Bootstrap CSS:
> 
> *Tidak perlu menghafal cheat sheet. Jika lupa, cukup lihat saja cheat sheet nya disini. 
> Kalau tetap mau menghafalkannya supaya tidak repot membuka cheat sheet lagi, cukup praktekan saja, biarkan tubuhmu yang menghafal berdasarkan pengalaman dan kebiasaan, otakmu hanya untuk berfikir.*

<br/>

**Bonus funfact**
> Developer profesional masih mondar-mandir lihat cheat sheet, karena mereka tau kalau menghafal itu useless dan sangat sulit menghafal sebanyak itu.