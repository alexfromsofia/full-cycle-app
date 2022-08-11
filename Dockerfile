FROM node:lts-alpine

ENV CLIENT_PORT=8080
ENV SERVER_PORT=3000
ENV NODE_ENV=production
ENV ORIGIN=localhost

EXPOSE 3000
EXPOSE 8080

WORKDIR /

COPY package.json ./
COPY .env.example ./

RUN npm install

COPY . .

CMD \
  # OCI compatible image https://opencontainers.org/
  # TODO: ENV variables  
  # Build SSR app
  npm run build && \
  # Serve @ port 3000
  npm run serve

