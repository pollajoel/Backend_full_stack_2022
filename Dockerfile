FROM node:10.16.0 AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN rm -rf node_modules/bcrypt
RUN npm cache clear --force
RUN npm rebuild bcrypt --update-binary
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 4000
# Start the app
CMD [ "npm", "start" ]