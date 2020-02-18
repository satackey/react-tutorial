FROM node:12.16.0-alpine

RUN yarn global add create-react-app

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# COPY . /app
# RUN yarn build