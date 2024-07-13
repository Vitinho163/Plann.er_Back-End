FROM node:21.7.2 AS dependencies

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

FROM node:21.7.2 as build

WORKDIR /usr/src/app

COPY . .
COPY --from=dependencies /usr/src/app/node_modules ./node_modules

RUN npm run build
RUN npm prune --omit=dev

FROM node:21.7.2-alpine AS deploy

WORKDIR /usr/src/app

ENV DATABASE_URL="file:./dev.db"

RUN npm i -g prisma

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/prisma ./prisma

RUN prisma migrate dev

EXPOSE 3333

CMD [ "npm", "start" ]