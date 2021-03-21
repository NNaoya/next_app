FROM node:14.15.3-alpine

WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .

EXPOSE 80
