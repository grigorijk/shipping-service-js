FROM node:8

# Create app directory
WORKDIR /usr/src/app/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production
ENV MICROS_PRODUCTS_URL=product-service-java.eu-gb.mybluemix.net/products
# Bundle app source
RUN mkdir src
COPY src src

EXPOSE 3001
CMD [ "npm", "start" ]