# syntax=docker/dockerfile:1
FROM node:20-alpine

WORKDIR /app

# Copy over only what you need for runtime
COPY build ./build
COPY package.json package-lock.json ./

# Install only prod dependencies
RUN npm ci --only=production

EXPOSE 3000

CMD ["node", "build"]
