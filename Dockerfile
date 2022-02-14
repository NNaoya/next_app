FROM node:14.15.3-alpine

WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
COPY . .
RUN npm install
RUN npm run build

EXPOSE 80
CMD npm run start
