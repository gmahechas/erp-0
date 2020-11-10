FROM node:12.19.0-alpine AS builder

ARG port
ARG ppath

WORKDIR /app

COPY $ppath/package.json $ppath/yarn.lock ./
RUN yarn install
COPY $ppath/ ./

RUN yarn build

EXPOSE $port
CMD ["node", "dist/main"]