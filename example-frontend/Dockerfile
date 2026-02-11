# Installs environment 
FROM  node:16-alpine

# Working dir because of conventiion
WORKDIR /usr/src/app

# Coping all files from material-applications/example-fronten>
COPY . .

# Tells React where backend
ENV REACT_APP_BACKEND_URL=http://localhost/api

# Installs Node.js and npm (its package manager)
RUN npm install

# Runs a custom script named "build" defined in package.json,>
RUN npm run build

# Serve the static files in build/ over a local web server (b>
RUN npm install -g serve

# Prepare Docker for listening port
EXPOSE 5000
