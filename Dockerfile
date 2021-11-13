FROM node:16.13-alpine

ENV DISCORD_BOT_TOKEN=YOUR-DISCORD-KEY

RUN mkdir -p /home/wanderley

COPY . /home/wanderley

WORKDIR /home/wanderley

RUN npm install

CMD ["node", "./src/index.js"]