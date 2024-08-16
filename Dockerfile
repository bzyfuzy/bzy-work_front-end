FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN yarn 

COPY . .

RUN yarn build
EXPOSE 4321
CMD [ "node", "./dist/server/entry.mjs" ]