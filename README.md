# Web App: Serverless E-Commerce 🌐

This is a lightweight serverless e-commerce web application that allows users to browse products, register/login, and simulate purchases. Built on AWS with a static frontend hosted via Amazon S3 and backend powered by Lambda + API Gateway.

---

## 📊 Features

* User authentication (register + login)
* Buy products (saved per user)
* Purchased items view
* Responsive frontend (HTML/CSS/JS)
* AWS serverless backend with API Gateway + Lambda
* Storage in DynamoDB
* Hosted with S3

---

## 💪 Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JS
* **Backend:** AWS Lambda (Node.js)
* **Database:** Amazon DynamoDB
* **API:** Amazon API Gateway
* **Hosting:** Amazon S3

---

## 👥 User Flows

* **Register:** Enter username & password (stored in DynamoDB)
* **Login:** Validates credentials
* **Buy Product:** Adds to user's purchase history in DynamoDB
* **View Purchases:** Auto-loaded on login from DB

---

## 📸 Screenshots

👉 [See full screenshots in GitHub issue](https://github.com/ujer23/serverless-e-commerce/issues/1#issue-3216620731)

<img width="1366" height="682" alt="Image" src="https://github.com/user-attachments/assets/71934dbc-f006-4291-b1af-5833da050f89" />

<img width="1366" height="679" alt="Image" src="https://github.com/user-attachments/assets/836d1384-2b0c-44fd-b5d6-2d9140d26092" />

<img width="1366" height="690" alt="Image" src="https://github.com/user-attachments/assets/d2f90dd9-beab-4d46-aa6e-325a16187998" />

<img width="1366" height="680" alt="Image" src="https://github.com/user-attachments/assets/14a85ec1-ec75-400f-a281-173a517d5a52" />

<img width="1366" height="675" alt="Image" src="https://github.com/user-attachments/assets/19df3ee0-fdd7-4218-b2e3-b8ed2c4cb090" />

<img width="1366" height="682" alt="Image" src="https://github.com/user-attachments/assets/cfafcce3-a440-4ce8-b676-db6856a732b0" />

---

## 📁 Folder Structure

```
trendwave/
├── index.html           # Main webpage
├── script.js            # App logic & API calls
├── style.css            # Optional external styles (currently inline)
├── favicon.ico          # Logo in browser tab
├── product images/      # bp.jpg, laptop.jpg, etc
```

---

## 🛋️ AWS Services Used

* **Amazon S3** – Hosts static files (HTML, JS, images)
* **API Gateway** – Exposes REST endpoints
* **AWS Lambda** – Handles backend logic (register/login/purchase)
* **DynamoDB** – Stores user accounts and purchases

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Author

Made with ❤️ by [Ujer Kazi](https://www.linkedin.com/in/ujer-kazi/)

---

## ✉️ Contributing

Feel free to open issues or submit PRs for improvements. Contributions are welcome!
