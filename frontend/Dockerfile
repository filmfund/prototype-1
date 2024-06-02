# syntax=docker/dockerfile:1
FROM node:18-bullseye
WORKDIR /app
COPY svelte-pwa /app
RUN yarn
RUN yarn build
CMD ["yarn", "preview", "--host"]
