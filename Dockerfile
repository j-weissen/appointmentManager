FROM node:18-alpine

ARG PB_VERSION=0.15.3

RUN apk add --no-cache \
    unzip \
    ca-certificates

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /app/

COPY frontend/ /tmp/frontend/
WORKDIR /tmp/frontend
RUN npm i && npm run build
RUN ls
RUN mkdir ../pb_public
RUN cp -r dist /app/pb_public


EXPOSE 80

# start PocketBase
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:80"]
