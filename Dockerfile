FROM mcr.microsoft.com/playwright:v1.34.0-jammy

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json .
COPY package-lock.json .

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Run the Playwright script
CMD xvfb-run --server-args="-screen 0 1280x1024x24" npm start
