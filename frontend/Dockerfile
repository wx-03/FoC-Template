# syntax=docker/dockerfile:1
#
# AI Assistance Disclosure:
# Tool: GitHub Copilot, date: 2026-09-28
# Scope: Added a production nginx image and a Node development image following existing service conventions.
#        No requirements, architecture, schema, or API decisions were made by the AI tool.
# Author review:

FROM node:24-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

FROM base AS dev
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

FROM base AS build
RUN npm run build

FROM nginx:1.27-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80