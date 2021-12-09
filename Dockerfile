# Dockerfile
FROM node:12.22.1-stretch
LABEL Name="Express Typescript Web"
LABEL version="1.0"
LABEL Maintainer="Nick Jiang<congtao.jiang@outlook.com>"

WORKDIR /app

COPY . /app

# RUN yarn install --dev  # installs our app dev dependencies

EXPOSE 3000

CMD ["node", "dist/index.js"]