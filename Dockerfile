# Étape 1: Construire l'application
FROM node:18 AS builder

WORKDIR /usr/src/app

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

# Étape 2: Exécution de l'application
FROM node:18

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY pnpm-lock.yaml ./
COPY package.json ./

RUN npm install -g pnpm
RUN pnpm install --prod

CMD ["pnpm", "start:prod"]
