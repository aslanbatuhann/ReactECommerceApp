# Turkcell Geleceği Yazanlar 401 E-Ticaret Projesi

![Geleceği Yazanlar Logo](https://gelecegiyazanlar.turkcell.com.tr/themes/custom/gyz/logo.svg)

- MongoDB ve Redis'i yükleyebilmek için backend içerisindeki docker-compose dosyası çalıştırılmalıdır. ( Bilgisayarınızda docker ve compose yüklü olmalıdır. [Docker indirmek ve bilgi almak için tıklayın](https://docs.docker.com/get-docker/ "Docker Web Site"))
 Bunun için backend dizinine gidilerek docker-compose up komutu çalıştırışlır.

-  `cd backend`
- `docker-compose up -d`

![Ekran Alıntısı1](https://user-images.githubusercontent.com/104254584/225823692-a6593e77-f5b6-41d3-8609-beabe7541487.PNG)

- backend dizininde .env dosyası oluşturulur ve içerisine gerekli bilgiler girilir.
 
```
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=sdgkMKEVlm3v23kl_n423vGG3b_TVnm234xnv23x
JWT_REFRESH_SECRET=rerv1jv15v1CVBnasd23jnv13123nvrqwr23
```

- MongoDB compass uygulamasında Yeni bir DB oluşturulur. ([MongoDB Compass İndirmek için tıklayın](https://studio3t.com/download/ "İndirmek için tıklayın"))

- mongodb://localhost:27017 adresine bağlantı kurulur.
- Create Database diyerek "test" isimli bir database oluşturulur ve bir collection girilir. Ardından sıra ile diğerleride eklenir.

- Bu işlemin ardından "Add Data -> Import File" diyerek backend dizininde yer alan assets klasöründeki json dosyalarını ilgili collectionlara eklenir.

- backend dizininde `npm run dev` komutu çalıştırarak backend ayağa kaldırılır.

![Ekran Alıntısı2](https://user-images.githubusercontent.com/104254584/225823759-c87f8c42-5f09-4f1a-b33f-2e69112ba259.PNG)

- http://localhost:4000/ adresinde istek atarak backend'in ayakta olduğunu doğrulayabilirsiniz.

## Front-End Ayağa Kaldırma

- client dizinine giderek `npm start` komutu ile react projesi ayağa kaldırılır.

![Ekran Alıntısı3](https://user-images.githubusercontent.com/104254584/225824234-4e1082dd-0bfc-4a58-b917-a2a557e68c2e.PNG)

![Ekran Alıntısı4](https://user-images.githubusercontent.com/104254584/225824513-ef8512e2-de0a-4bd2-82e3-2347c992b0b2.PNG)

![Ekran Alıntısı4](https://user-images.githubusercontent.com/104254584/225824600-e4b17b70-73cf-45cb-922b-92c7652f3d15.PNG)

![Ekran Alıntısı8](https://user-images.githubusercontent.com/104254584/225824710-33fa1bca-6e29-436f-bfbe-45fcc3741083.PNG)

![Ekran Alıntısı9](https://user-images.githubusercontent.com/104254584/225824735-bdfebc0f-9354-4c17-ad89-32ebd22248f0.PNG)

![Ekran Alıntısı10](https://user-images.githubusercontent.com/104254584/225824761-1a35b569-032e-4037-8a77-71ef05b94d72.PNG)

![Ekran Alıntısı11](https://user-images.githubusercontent.com/104254584/225824777-8a827895-1ede-4913-b617-67e8fdf126cf.PNG)
