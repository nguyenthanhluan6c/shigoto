FROM mysql:5.7.22

RUN apt-get update -qq \
  && apt-get install libmysqlclient-dev -y --force-yes

COPY docker/db/my.cnf /etc/mysql/conf.d/
