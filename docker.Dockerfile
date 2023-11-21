FROM node:21.2.0
WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN npm i
CMD ["npm", "run", "start"]
