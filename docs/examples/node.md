---
title: "Node"
icon: "node"
---

## Simple

```
run: npm start --port 4000 --host 0.0.0.0
```

## Express Server

```
script:
  npm ci --production
  npm run build
run: node server.js --port=4000
```

## NestJS

```
script:
  npm install
  npm run build
  npx prisma migrate deploy
run: npm run start:prod -p 3000
```

## NextJS

```
script:
  npm install
  npm run export
run: serve out -p 8080
```

## WEBPACK / VITE

Simply specify your output folder for your static are exported to. Deploy will look for index.html

```
run: dist
```
