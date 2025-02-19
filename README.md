# Nexscribe - Laravel API & Next.js Frontend

Nexscribe is a **full-stack blogging platform** built with **Laravel** (backend) and **Next.js** (frontend). It includes **blogs, posts, users, and comments**, using API-driven architecture.

---

## **📌 Features**
- ✍ **User Authentication** (Login, Register, JWT/Sanctum)
- 📝 **Insights (Blog / Posts)** (Create, Read, Update, Delete)
- 💬 **Comments System**
- 👥 **User Profiles**
- 🚀 **API with Laravel & Next.js as Frontend**

---

## **🛠 Tech Stack**
### **Backend (Laravel API)**
- Laravel 11 (PHP 8.2+)
- MySQL / PostgreSQL
- Laravel Sanctum (Authentication)
- Eloquent ORM (for DB operations)
- Seeder & Migrations for data population

### **Frontend (Next.js)**
- Next.js 15 (React 19)
- Tailwind CSS for styling
- Axios for API calls
- React Query for data fetching

run command:   1st terminal / commmapt prompt
cd frontend
npm install
npm run dev

-------------------------------------------------------

## **📌 Installation & Setup**   : use 2nd for commands: terminal / commmapt prompt
run command:
-> cp .env.example .env

////////.env file   ////
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nexscibe
DB_USERNAME=root
DB_PASSWORD=
/////////////////run commands
cd api
composer install
php artisan key:generate
php artisan migrate --seed
php artisan serve

### **🔹 1. Clone the Repository**
```bash
git clone https://github.com/kedarcoding/nexscribe.git
cd BlogHorizon
