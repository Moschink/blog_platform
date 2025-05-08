
---

### 📄 Project Overview

This is a simple blog web application built with **React.js** for the frontend and uses **Axios** to interact with a **local JSON server** as the backend database 
and it's having both Admin and User section in one page.

### ⚙️ Setup & Usage

* The frontend is developed using **React.js**.
* Blog posts are stored in a **local JSON database**, accessed via **Axios HTTP requests**.
* Ensure that all necessary servers are running:

  * Start the **JSON server** to serve the database.
  * Start the **React development server** to run the frontend.

### 📌 URLs

 **Frontend (React app):**
  `http://localhost:3002/` – Home page of the blog application.

 **Backend (JSON server):**
  `http://localhost:3001/posts` – Endpoint displaying all blog posts in JSON format.

### ✏️ Notes

 When a post is **added** or **deleted**, the application **requires a manual refresh** for the changes to reflect on the UI.
  This behavior is due to the current state management and data fetching setup.

---

