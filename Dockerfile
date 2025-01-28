FROM node:lts-buster
RUN git clone https://github.com/watson-xd3/WATSON-XD-BOT/root/WATSON-XD-BOT
WORKDIR /root/WATSON-XD-BOT
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]