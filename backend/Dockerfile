# syntax=docker/dockerfile:1
FROM node:18-bullseye
RUN apt update
RUN npm i -g node-gyp typescript
WORKDIR /backend
COPY ./prisma /backend/prisma
COPY ./package.json /backend/package.json
RUN yarn
COPY ./src /backend/src
COPY ./tsconfig.json /backend/tsconfig.json
RUN tsc
CMD ["sh", "-c", "yarn prisma db push && node lib/cli"]
