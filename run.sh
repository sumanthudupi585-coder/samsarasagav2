#!/bin/bash

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is required to run the server. Please install Node.js and try again."
    exit 1
fi

# Start the server
echo "Starting Samsara Saga server..."
node server.js