FROM node

RUN mkdir -p /srv/app/ebay-client
WORKDIR /srv/app/ebay-client

COPY package.json /srv/app/ebay-client
# COPY package-lock.json /srv/app/ebay-client

RUN yarn

COPY . /srv/app/ebay-client

CMD [ "yarn", "start" ]