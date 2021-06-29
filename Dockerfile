FROM node:14-alpine
VOLUME /reminds
COPY dist /dist
WORKDIR /server
COPY server ./
RUN npm i
EXPOSE 7001
CMD ["/bin/bash","start.sh"]