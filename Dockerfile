FROM node:slim AS install
WORKDIR /app
COPY package*.json .
RUN npm ci --omit=dev

FROM node:slim AS build
WORKDIR /app
COPY package*.json .
RUN npm ci --only=dev
COPY . .
RUN npm run prod

FROM gcr.io/distroless/nodejs
WORKDIR /app
COPY --from=install /app/node_modules node_modules
COPY --from=build /app/build .
ENV PORT 8080
EXPOSE 8080
CMD ["service.js"]
