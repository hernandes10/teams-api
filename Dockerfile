FROM node:17.3.0


WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD [ "npm", "run", "dev" ]