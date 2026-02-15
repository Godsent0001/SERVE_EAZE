# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source files
COPY . .

# Expose port
EXPOSE 5000

# Start server
CMD ["node", "src/server.js"]
