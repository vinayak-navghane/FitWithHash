from node:20-alpine

WORKDIR /app

COPY package* .

run npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]