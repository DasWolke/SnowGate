FROM node:lts
RUN useradd app
WORKDIR /home/app
ADD . /home/app
RUN npm install
CMD ["node", "."]