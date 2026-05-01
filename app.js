const blogs = [
  {
    id: 1,
    title: "JWT",
    content: "1)JWT (JSON Web Token)JWT is used for authentication (login system).2)It stores user data in encoded format (not plain text).3)It has 3 parts: Header, Payload, Signature.4)It is sent between client and server for secure communication.5)It is stateless (server does not store session data). is used for login systems. 6)It helps keep users logged in securely.7) It stores user data in a safe encoded format."
  },
  {
    id: 2,
    title: "Mongoose",
    content: "1)Mongoose is a tool for MongoDB. 2)It helps us create schemas and manage database data easily in Node.js.3)Mongoose is used with MongoDB in Node.js.It helps create schemas (structure of data).4)It makes database work easy and organized.5)It provides validation (checks data before saving).6)It supports CRUD operations (Create, Read, Update, Delete)."
  },
  {
    id: 3,
    title: "Bcrypt",
    content: "Bcrypt is used to hash passwords. It converts passwords into secure codes so hackers cannot read them."
  },
  {
    id: 4,
    title: "Express",
    content: "Express.js is a backend framework. It helps us create APIs and handle server requests easily."
  },
  {
    id: 5,
    title: "React",
    content: "React is a frontend library. It helps us build fast and interactive user interfaces."
  }
];

// ===== INDEX PAGE =====
const container = document.getElementById("blogContainer");

if (container) {
  blogs.forEach(blog => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `<h3>${blog.title}</h3>`;

    card.onclick = () => {
      window.location.href = `blog.html?id=${blog.id}`;
    };

    container.appendChild(card);
  });
}

// ===== DETAIL PAGE =====
const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

if (blogId) {
  const blog = blogs.find(b => b.id == blogId);

  if (blog) {
    document.getElementById("title").textContent = blog.title;
    document.getElementById("content").textContent = blog.content;
  }
}

// ===== BACK BUTTON =====
function goHome() {
  window.location.href = "index.html";
}

// ===== THEME TOGGLE =====
const toggleBtn = document.getElementById("themeToggle");

toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});