
FROM mhart/alpine-node
COPY . /app
WORKDIR /app
RUN npm init -y
RUN npm i finalhandler --save
RUN npm i serve-static --save
EXPOSE 8083
CMD node app.js
