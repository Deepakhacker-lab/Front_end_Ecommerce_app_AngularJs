# FROM node as build
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY . /app
# ARG configuration=production
# RUN npm run build -- --outputPath=./dist/out 

# # Stage 2, use the compiled app, ready for production with Nginx
# FROM nginx

# COPY --from=build /app/dist/out/ /usr/share/nginx/html
# COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
FROM nginx:1.17.1-alpine
COPY /dist/todo /usr/share/nginx/html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf


#build option
# ### STAGE 1: Build ###
# FROM node:12.7-alpine AS build
# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build
### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
# COPY nginx-custom.conf /etc/nginx/nginx.conf
# COPY /dist/todo /usr/share/nginx/html