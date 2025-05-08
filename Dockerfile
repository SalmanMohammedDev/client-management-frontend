# Stage 1: Build React app
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies efficiently
COPY package*.json ./
RUN npm install --omit=dev

# Copy the rest and build
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx (smallest image)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default Nginx files & copy only the React build
RUN rm -rf ./*
COPY --from=builder /app/build ./

# Expose port 80
EXPOSE 80

# Use optimized Nginx config
CMD ["nginx", "-g", "daemon off;"]
