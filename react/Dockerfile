# Single-stage: build and serve the React app in one Node.js image.
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm install --global serve

EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "80"]
