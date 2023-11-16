# syntax=docker/dockerfile:1

FROM node:18-bookworm-slim AS builder-nodejs
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npmmirror.com
RUN sed -e 's|http://security.debian.org/debian-security|http://mirrors.aliyun.com/debian-security|g' \
    -e 's|http://deb.debian.org/debian|http://mirrors.aliyun.com/debian|g' \
    -i /etc/apt/sources.list.d/debian.sources \
    && apt-get update && apt-get -y install git
RUN npm run build

FROM nginx:1.25-bookworm
LABEL maintainer="xiaguliuxiang <xiaguliuxiang@gmail.com>"
COPY --from=builder-nodejs /app/dist /app
RUN printf "server {\n\
    listen 80;\n\
    server_name localhost;\n\
    location / {\n\
        root /app;\n\
        index index.html;\n\
        try_files \$uri \$uri/ /index.html;\n\
    }\n\
}" > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
