# syntax=docker/dockerfile:1
FROM node:18-bullseye
RUN apt update
RUN npm i -g node-gyp typescript
WORKDIR /backend
COPY ./prisma /backend/prisma
COPY ./src /backend/src
COPY ./package.json /backend/package.json
COPY ./tsconfig.json /backend/tsconfig.json
RUN yarn
RUN tsc
CMD ["node", "lib/cli"]
