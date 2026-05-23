# Link Vault

A minimal full-stack app to save, organize, and manage useful links in one place. Built as a personal “second brain” to keep track of resources without losing them across chats, tabs, and bookmarks.



## Preview

<table align="center">
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/e9b29b36-42ae-4480-bdeb-781a8ced9def" width="100%" alt="Home Page"/><br/>
      <b>Home Page</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/b3d1a46e-d0ef-4130-9198-9e4ad82e6558" width="100%" alt="Dashboard"/><br/>
      <b>Dashboard</b>
    </td>
  </tr>
</table>

---

## Features

- JWT-based authentication
- Create, view, and delete links
- Organize links with tags
- Search and filter functionality
- Responsive and clean UI
- Secure backend with production-ready practices

---

## Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS
- Lucide Icons
- Phosphor Icons

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing
- zod for validation

---

## Project Structure

```bash
/frontend   # Next.js frontend
/server     # Express.js backend
```

---

## Why I Built This

One of my friends used to save useful resources everywhere, WhatsApp chats, Telegram messages, browser bookmarks, random notes, and even screenshots. After a few weeks, finding those links again became frustrating because everything was scattered across different platforms.

I noticed I had the same problem while learning web development and DSA. Useful articles, tools, and resources kept getting lost over time.

So I built Link Vault, a simple place to save and organize everything properly, with tags, search, and quick access whenever needed.

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run the backend server:

```bash
node server.js
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Live Demo

[Link Vault Live Demo](https://secondbrain-link-vault.vercel.app)

---

