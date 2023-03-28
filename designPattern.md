Pada aplikasi yang telah dibuat, saya menggunakan beberapa design pattern, yaitu:

Model-View-Controller (MVC)
MVC adalah design pattern yang memisahkan aplikasi menjadi tiga bagian utama: model, view, dan controller. Model berisi data dan logika bisnis, view berisi tampilan UI, sedangkan controller berisi logika pengontrolan antara model dan view. Dalam aplikasi Vue, model diwakili oleh data pada instance Vue, view diwakili oleh komponen Vue, sedangkan controller diwakili oleh method pada instance Vue.

Singleton
Singleton adalah design pattern yang memastikan hanya ada satu instance dari sebuah kelas pada waktu yang sama. Pada aplikasi ini, saya menggunakan singleton untuk memastikan hanya ada satu instance dari ApolloClient pada aplikasi. Hal ini dilakukan agar tidak perlu membuat koneksi baru setiap kali melakukan permintaan ke server GraphQL, sehingga mempercepat waktu respon.

Observer
Observer adalah design pattern yang memungkinkan objek-objek lain untuk menerima notifikasi ketika terjadi perubahan pada objek yang diamati. Pada aplikasi ini, saya menggunakan observer untuk memperbarui data pada komponen Vue secara otomatis ketika data pada server berubah. Hal ini dilakukan dengan menggunakan fitur watchQuery pada ApolloClient, sehingga aplikasi akan mengikuti perubahan data pada server secara real-time.

Decorator
Decorator adalah design pattern yang memungkinkan penambahan responsibilitas pada objek tanpa mengubah struktur dasarnya. Pada aplikasi ini, saya menggunakan decorator pada komponen Vue dengan mengimpor komponen Ant Design Vue dan menambahkan fitur-fitur responsif pada tampilan UI.

Factory
Factory adalah design pattern yang memungkinkan pembuatan objek-objek dengan cara yang fleksibel. Pada aplikasi ini, saya menggunakan factory pada file utils/apollo.js untuk membuat instance dari ApolloClient. Hal ini memungkinkan kita untuk membuat instance dengan konfigurasi yang berbeda-beda untuk kebutuhan yang berbeda.