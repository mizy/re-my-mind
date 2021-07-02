FROM node:14-alpine
ENV PORT="7001"
ENV DATA_PATH="/reminds"
VOLUME $DATA_PATH
COPY dist /dist
WORKDIR /server
COPY server ./
RUN npm i
EXPOSE 7001
CMD ["node","app.js","7001","/reminds"]