FROM docker:dind
WORKDIR /main
RUN apk add --update nodejs npm
RUN npm install dockerode
COPY . .
