FROM node:20-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/build ./build
COPY package*.json ./
RUN npm ci --only=production

EXPOSE 3000
CMD ["node", "build"]