# Base image
FROM node:22.17.1-alpine

LABEL "org.nordicgamelab.vendor"="Nordic Game Lab, LLC"
LABEL version="2.0.0"

# Set working directory
WORKDIR /app

# Copy package.json, package-lock.json, and source code
COPY package*.json ./

# Install dependencies using yarn
RUN npm install

# Copy remaining source code
COPY . .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
