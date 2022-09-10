# FROM node:14.20.0

# WORKDIR /app/website

# EXPOSE 3000 35729
# COPY ./docs /app/docs
# COPY ./website /app/website
# RUN yarn install

# CMD ["yarn", "start"]

# Stage 1
FROM node:14.20.0 as node
WORKDIR /app
COPY . .
WORKDIR /app/website
RUN npm install
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY --from=node /app/website/build/geo-smart /usr/share/nginx/html
