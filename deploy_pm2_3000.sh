#!/usr/bin/env bash
set -euo pipefail

APP_NAME="${APP_NAME:-puarin-prj}"
PORT="${PORT:-3000}"
SERVER_ENTRY="dist/puarin-prj/server/server.mjs"

echo "==> Deploying ${APP_NAME} with PM2 on port ${PORT}"

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: Node.js is not installed."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "ERROR: npm is not installed."
  exit 1
fi

if ! command -v pm2 >/dev/null 2>&1; then
  echo "ERROR: pm2 is not installed. Install it with: npm i -g pm2"
  exit 1
fi

if [ ! -f package-lock.json ]; then
  echo "ERROR: package-lock.json not found. Run this in project root."
  exit 1
fi

echo "==> Installing dependencies"
npm ci

echo "==> Building project (SSR)"
npm run build

if [ ! -f "${SERVER_ENTRY}" ]; then
  echo "ERROR: ${SERVER_ENTRY} not found after build."
  exit 1
fi

echo "==> Starting/Restarting PM2 app"
if pm2 describe "${APP_NAME}" >/dev/null 2>&1; then
  PORT="${PORT}" NODE_ENV=production pm2 restart "${APP_NAME}" --update-env
else
  PORT="${PORT}" NODE_ENV=production pm2 start "${SERVER_ENTRY}" --name "${APP_NAME}" --time
fi

echo "==> Saving PM2 process list"
pm2 save

echo "==> Done. App '${APP_NAME}' is running on port ${PORT}."
echo "==> Check: pm2 status && pm2 logs ${APP_NAME}"
