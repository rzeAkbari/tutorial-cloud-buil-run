FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm i
COPY ./build ./build
COPY ./server .
CMD [ "npm","run", "server" ]