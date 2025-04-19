# 🧑‍💼 Employee Management System

A simple yet powerful full-stack **Employee Management Web Application** built using **Next.js 14 (App Router)**, **MongoDB**, and **Tailwind CSS**. This project is part of my internship at **Prodigy InfoTech**.

## 🚀 Features

- 🔐 User Authentication (Register & Login)
- 👤 Add, View, Update, and Delete Employees
- 🧭 Dashboard to manage all employee data
- 🌐 Connected to MongoDB database
- 🎨 Beautiful and responsive UI with Tailwind CSS
- 💡 Built using latest Next.js App Router (v14+)

---

## 📸 Screenshots



---![Screenshot 2025-04-19 121450](https://github.com/user-attachments/assets/281a3f2a-e9f6-43a8-9602-0af8f608369a)
![Screenshot 2025-04-19 121459](https://github.com/user-attachments/assets/71241825-091f-4101-affd-b3409d21b0a1)



## 🛠️ Tech Stack

| Category       | Tech                      |
|----------------|---------------------------|
| Frontend       | Next.js 14                |
| Styling        | Tailwind CSS              |
| Backend        | Node.js, Next.js API Routes |
| Database       | MongoDB (Cloud)           |
| Auth           | JWT (JSON Web Tokens)     |
| Hosting        | Vercel / GitHub           |

---

## 📂 Project Structure

```
employee-management-app/
│
├── app/
│   ├── auth/              # Login/Register UI
│   ├── dashboard/         # Protected Dashboard Page
│   └── layout.js          # Root Layout
│
├── models/
│   └── employee.js        # Mongoose Schema
│
├── pages/api/
│   ├── auth/              # Login & Register APIs
│   └── employees/         # CRUD APIs
│
├── utils/
│   └── db.js              # MongoDB connection
│
├── public/                # Icons/Images
├── .env.local             # Environment Variables
├── package.json
└── README.md
```

---

## 🧑‍💻 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/codemy3/PRODIGY_FS_02.git
cd employee-management-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. **Run the development server**

```bash
npm run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000)

---

## 📌 To-Do (optional features)

- ✅ Add Pagination or Search
- ✅ Employee Image Upload
- ✅ Admin Role System
- ✅ Export data (PDF/Excel)

---

## 📄 License

This project is open-source and free to use for learning purposes.

---

## ✨ Acknowledgments

Thanks to [Prodigy InfoTech](https://prodigyinfotech.dev/) for the internship opportunity. 💼  
Built with 💻 by **Maithri** 🚀
