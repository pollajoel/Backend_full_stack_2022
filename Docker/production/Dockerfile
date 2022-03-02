FROM node:16-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --production
# Copy app files
COPY . .
# Build
CMD npm build

FROM node:14-alpine AS production
# Copy built assets/bundle from the builder
COPY --from=builder /app/build .
EXPOSE 80
# Start the app
CMD node app.js