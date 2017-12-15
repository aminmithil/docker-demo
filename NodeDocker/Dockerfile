FROM mhart/alpine-node

WORKDIR /src

COPY package.json /src

COPY server.js /src

RUN npm install

EXPOSE 8081

CMD ["node", "/src/server.js"]

