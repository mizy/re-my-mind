FROM node:14-alpine
VOLUME /reminds
COPY dist /dist
COPY server /server
WORKDIR /server
# RUN npm i
EXPOSE 7001
CMD sh start.sh