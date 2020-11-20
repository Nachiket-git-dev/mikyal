FROM amazonlinux:latest
RUN curl --silent --location https://rpm.nodesource.com/setup_12.x | bash -
RUN yum -y install nodejs

WORKDIR /ecs-app

COPY . ./
RUN npm install
RUN npm install @angular/cli@8.3.20

ENV NODE_ENV=production
ENV ENV_ECS=true
#USER node
#EXPOSE $PORT
#RUN chown -R node:node /ecs-app

ENTRYPOINT ["node", "index.js"]
