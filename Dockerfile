FROM public.ecr.aws/docker/library/node:20-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV BACKEND_URL=http://backend:8000
RUN npm run build

FROM public.ecr.aws/docker/library/node:20-slim
WORKDIR /app

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

ENV NODE_ENV=production
ENV PORT=3000
ENV BACKEND_URL=http://backend:8000
EXPOSE 3000

CMD ["node", "server.js"]
