FROM node:14-alpine
ENV PORT="7001"
ENV SAVE_PATH="/reminds"
ENV PASSWORD="admin"
VOLUME $SAVE_PATH 
COPY dist /dist
COPY server /server
WORKDIR /server
EXPOSE 7001
CMD node app.js $PORT $SAVE_PATH $PASSWORD