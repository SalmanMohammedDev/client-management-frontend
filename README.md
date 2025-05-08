# Getting Started with Create React App

# Client Management Frontend

This is the React frontend for the Client Management system. It communicates with the backend API and provides a modern user interface using **React**, **React Router**, and **Bootstrap**.

---

## 🚀 Features

- React with functional components
- Routing via React Router
- Bootstrap for responsive UI
- REST API integration


---

## 🐳 Docker Setup

The frontend is containerized for production using a **multi-stage Dockerfile**.

### 📝 Dockerfile Explanation


# Build stage
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


### 🔧 Build and Run with Docker

1. **Build image**


docker build -t client-management-frontend .


2. **Run container**


docker run -p 8080:80 client-management-frontend


---

## 🌐 Environment

Make sure the frontend can reach the backend API (e.g., via environment config or proxy).

---
## 🔗 Related Repositories

- 📦 [Client Management Backend](https://github.com/salmanmohammeddev/client-management-backend)

