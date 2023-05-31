FROM node:alpine3.16 as node_builder
WORKDIR /front
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview","--", "--host" ] 

