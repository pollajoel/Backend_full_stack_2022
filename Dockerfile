FROM node:10.16.0 

COPY . /app
WORKDIR /app
RUN npm install
RUN npm rebuild bcrypt --build-from-source
RUN npm i sqlite3

CMD ["npm", "start"]