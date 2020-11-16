FROM amazonlinux:latest
RUN yum -y install nodejs

WORKDIR /ecs-app

COPY * ./
RUN npm install
RUN npm install @angular/cli@8.3.20
RUN chown -R node:node /ecs-app

ENV NODE_ENV=production
ENV ENV_ECS=true
USER node
EXPOSE $PORT

ENTRYPOINT ["node", "index.js"]