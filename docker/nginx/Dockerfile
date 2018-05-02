FROM nginx:1.13-alpine

ENV TZ=Asia/Tokyo
RUN apk add --no-cache openssl

RUN rm -rf /etc/nginx/conf.d/*
ADD docker/nginx/nginx.conf /etc/nginx/conf.d/app.conf

ENV DOCKERIZE_VERSION v0.6.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

CMD dockerize -wait tcp://app:3000 -wait-retry-interval 10s -timeout 300s /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf

EXPOSE 80
