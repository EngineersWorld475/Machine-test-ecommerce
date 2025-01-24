# E-Commerce Website

An e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that features user authentication and an admin panel for managing categories and subcategories.

---

## Features

### User Features

- **User Authentication**: Secure registration and login functionality using Redux Toolkit.
- **Role-Based Access Control**: Users are assigned roles (`admin` or `user`) during registration.
- **State Management**: Global state managed with Redux Toolkit and persisted using Redux-Persist.

### Admin Features

- **Admin Panel**: Accessible only to users with the `admin` role.
- **Category Management**: Admins can add, view, update, and delete categories.
- **Subcategory Management**: Admins can add, view, update, and delete subcategories under specific categories.

---

## Technology Stack

### Frontend

- **React.js**: Frontend framework for building the user interface.
- **Redux Toolkit**: For global state management.
- **Redux-Persist**: For persisting user session data.
- **CSS**: For styling the application.

### Backend

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: Database for storing user, category, and subcategory data.
- **Mongoose**: ODM library for MongoDB.

---

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   - For the backend:
     ```bash
     cd server
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../client
     npm install
     ```

3. **Environment Variables**

   - Create a `.env` file in the `backend` folder and add the following:
     ```env
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     ```

4. **Run the Application**

   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd ../client
     npm run dev
     ```

5. **Access the Application**

   - Open your browser and navigate to `http://localhost:5173` for the frontend.
   - The backend API will run on `http://localhost:5000` by default.

---

## Folder Structure

### Backend (`/server`)

```
server
├── controllers
│   ├── authController.js
│   ├── categoryController.js
│   └── subcategoryController.js
├── models
│   ├── User.js
│   ├── Category.js
│   └── Subcategory.js
├── routes
│   ├── authRoutes.js
│   ├── categoryRoutes.js
│   └── subcategoryRoutes.js
├── middleware
│   ├── errorMiddleware.js
│   └── authMiddleware.js
├── server.js
└── config
    └── db.js
```

### Frontend (`/client`)

```
client
├── src
│   ├── app
│   │   └── store.js
│   ├── features
│   │   ├── auth
│   │   │   ├── authSlice.js
│   │   │   ├── authService.js
│   │   │   └── authActions.js
│   │   └── category
│   │       ├── categorySlice.js
│   │       └── categoryService.js
│   ├── pages
│   │   ├── AdminPanel.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Home.jsx
│   ├── components
│   │   └── Navbar.jsx
│   └── index.jsx
```

---

## Future Improvements

- Implement product management for admins.
- Add product filtering and search functionality for users.
- Enable product image uploads.
- Enhance UI/UX with a responsive design.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

[Sanjay G Nair](https://github.com/your-username)

---

## Acknowledgments

- Special thanks to the creators of the MERN stack technologies.

