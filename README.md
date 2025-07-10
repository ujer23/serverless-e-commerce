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

## 🧩 Deployment Steps

Here’s how to deploy this project using AWS:

### 1. **Frontend (S3 Static Website Hosting)**

* Go to S3 Console
* Create a bucket (e.g. `trendwave-frontend`)
* Enable static website hosting
* Upload: `index.html`, `script.js`, product images
* Set permissions to allow public read access

### 2. **Backend (API + Lambda)**

* Create an **HTTP API** in API Gateway
* Define routes:

  * `POST /registerUser`
  * `POST /loginUser`
  * `POST /insertProduct`
  * `GET /getProducts`
* For each route:

  * Create and link to an AWS Lambda function (Node.js)
  * Ensure all Lambdas have DynamoDB access

### 3. **DynamoDB Tables**

* **Users Table**

  * Primary Key: `userid`
* **Purchases Table**

  * Partition Key: `userid`
  * Sort Key: `timestamp`

### 4. **CORS & Permissions**

* Enable CORS in API Gateway
* Add `Access-Control-Allow-Origin` headers

### 5. **Test Everything**

* Load the S3 link in browser
* Register → Login → Buy → See purchases

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Author

Made with ❤️ by [Ujer Kazi](https://www.linkedin.com/in/ujer-kazi/)

---

## ✉️ Contributing

Feel free to open issues or submit PRs for improvements. Contributions are welcome!
