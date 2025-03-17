# Global Identity

Global Identity, kullanıcıların kimlik bilgilerini yönetmelerini ve hedef ülkelerini seçmelerini sağlayan bir React uygulamasıdır.

## 🚀 Proje Kurulumu

Projeyi çalıştırmak için aşağıdaki adımları takip edin:

### 1️⃣ Depoyu Klonlayın
```bash
git clone https://github.com/kullaniciadi/global-identity.git
cd global-identity
```

### 2️⃣ Gerekli Paketleri Yükleyin
```bash
npm install
```

### 3️⃣ Tailwind CSS Yapılandırması
Tailwind'in çalıştığından emin olmak için `tailwind.config.js` ve `postcss.config.js` dosyalarının oluşturulduğunu doğrulayın:
```bash
npx tailwindcss init -p
```
Eğer Tailwind CSS yüklenmemişse, şu komutla yükleyebilirsiniz:
```bash
npm install tailwindcss postcss autoprefixer
```

### 4️⃣ Uygulamayı Başlatın
```bash
npm start
```

## 📂 Proje Yapısı

```
/global-identity
│-- public/          # Statik dosyalar (favicon, index.html vb.)
│-- src/
│   │-- assets/      # Görseller ve medya dosyaları
│   │-- components/  # React bileşenleri
│   │-- styles/      # CSS ve Tailwind dosyaları
│   │-- App.tsx      # Ana uygulama bileşeni
│   │-- index.tsx    # Root render işlemi
│-- tailwind.config.js # Tailwind yapılandırması
│-- postcss.config.js  # PostCSS yapılandırması
│-- tsconfig.json   # TypeScript yapılandırması
│-- package.json    # Proje bağımlılıkları ve komutları
│-- README.md       # Proje dökümantasyonu
```

## 🔥 Kullanılan Teknolojiler

- **React** (TSX ile)
- **Tailwind CSS**
- **TypeScript**
- **Material UI Icons**

## 🛠 Karşılaşılabilecek Hatalar & Çözümleri

### Tailwind CSS Çalışmıyor
Eğer Tailwind sınıfları görünmüyorsa, aşağıdaki adımları deneyin:
```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
`index.css` içine şu satırları eklediğinizden emin olun:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `Module Not Found` Hatası
Bazı modüller eksikse, aşağıdaki komutları çalıştırın:
```bash
npm install
npm start
```

### `react-scripts: command not found` Hatası
Eğer `npm start` çalışmıyorsa, şu komutları deneyin:
```bash
npm install react-scripts
```

## 📜 Lisans
Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.

---
📌 **Geliştirici:** [@tolgacavga](https://github.com/cavga1903)
🚀 **Proje Linki:** [GitHub](https://cavga1903.github.io/global-identity-9/)
