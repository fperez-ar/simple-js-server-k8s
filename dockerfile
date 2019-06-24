FROM node:8.11.2-alpine
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3600:3600

CMD ["npm", "start"]
