# Single-stage Node.js application image.
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY app.js ./

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
