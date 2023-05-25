FROM node:16-alpine

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 80

ENTRYPOINT [ "npm" ]

CMD [ "start" ]