Tahapan deployment pada VMware, EC2 Instance, atau AWS Lambda mungkin agak berbeda-beda, tetapi secara umum terdapat beberapa tahapan yang perlu dilakukan, antara lain:

Persiapan
Sebelum melakukan deployment, kita perlu melakukan persiapan terlebih dahulu. Hal-hal yang perlu dipersiapkan antara lain:

Membuat akun di VMware, AWS, atau provider lain yang akan digunakan
Membuat instance atau mesin virtual yang akan digunakan untuk deployment
Memastikan konfigurasi instance sudah sesuai dengan kebutuhan aplikasi (misalnya, memilih tipe instance yang tepat, menambahkan storage tambahan, dsb.)
Memastikan OS dan software pada instance sudah terinstal dan terkonfigurasi dengan benar (misalnya, memasang database server, memasang web server, dsb.)
Pengaturan jaringan
Sebelum aplikasi dapat diakses secara publik, kita perlu mengatur jaringan terlebih dahulu. Hal-hal yang perlu dilakukan antara lain:

Menambahkan alamat IP publik atau domain ke instance
Mengatur firewall untuk mengizinkan akses ke aplikasi (misalnya, membuka port HTTP atau HTTPS)
Memastikan konfigurasi jaringan sudah sesuai dengan kebutuhan aplikasi (misalnya, memilih subnet yang tepat, menambahkan rule ke security group, dsb.)
Deployment
Setelah persiapan dan pengaturan jaringan selesai, kita dapat melakukan deployment aplikasi. Hal-hal yang perlu dilakukan antara lain:

Meng-upload file aplikasi ke instance (misalnya, dengan menggunakan SCP)
Menginstal dependensi dan menyiapkan environment (misalnya, dengan menggunakan package manager seperti npm atau pip)
Menjalankan aplikasi (misalnya, dengan menggunakan systemd atau docker)