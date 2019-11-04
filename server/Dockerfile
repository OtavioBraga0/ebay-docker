FROM node

RUN mkdir -p /srv/app/ebay-server
WORKDIR /srv/app/ebay-server

COPY package.json /srv/app/ebay-server
# COPY package-lock.json /srv/app/ebay-server

RUN yarn

COPY . /srv/app/ebay-server

CMD [ "yarn", "dev" ]