#!/bin/bash

# Script to help set up GitHub authentication
# This script guides you through the process of setting up authentication for GitHub

echo "===== GitHub Authentication Setup ====="
echo "This script will help you set up authentication for GitHub"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Error: git is not installed. Please install git first."
    exit 1
fi

echo -e "\n===== Authentication Options ====="
echo "1. Set up HTTPS with credentials cache"
echo "2. Set up SSH key authentication"
echo "3. Use GitHub CLI"
echo "4. Exit"

read -p "Choose an option (1-4): " option

case $option in
    1)
        echo -e "\n===== Setting up HTTPS with credentials cache ====="
        echo "This will cache your GitHub credentials for a period of time."
        
        # Set credential cache
        git config --global credential.helper cache
        git config --global credential.helper 'cache --timeout=3600'
        
        echo "Credential cache set up for 1 hour."
        echo "When you push to GitHub, enter your username and personal access token (not password)."
        echo "To create a personal access token, visit: https://github.com/settings/tokens"
        ;;
    2)
        echo -e "\n===== Setting up SSH key authentication ====="
        
        # Check if SSH key exists
        if [ ! -f ~/.ssh/id_rsa.pub ]; then
            echo "No SSH key found. Generating a new SSH key..."
            read -p "Enter your email address: " email
            ssh-keygen -t rsa -b 4096 -C "$email"
        fi
        
        # Display the public key
        echo -e "\nYour public SSH key is:"
        cat ~/.ssh/id_rsa.pub
        
        echo -e "\nAdd this key to your GitHub account at: https://github.com/settings/keys"
        echo "Then update your repository to use SSH:"
        echo "git remote set-url origin git@github.com:sumanthudupi585-coder/samsarasagav2.git"
        ;;
    3)
        echo -e "\n===== Using GitHub CLI ====="
        
        # Check if GitHub CLI is installed
        if ! command -v gh &> /dev/null; then
            echo "GitHub CLI is not installed. Installing..."
            
            # Check the operating system
            if [[ "$OSTYPE" == "linux-gnu"* ]]; then
                # Linux
                echo "Installing GitHub CLI for Linux..."
                curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
                echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
                sudo apt update
                sudo apt install gh
            elif [[ "$OSTYPE" == "darwin"* ]]; then
                # macOS
                echo "Installing GitHub CLI for macOS..."
                brew install gh
            else
                echo "Unsupported operating system. Please install GitHub CLI manually:"
                echo "https://github.com/cli/cli#installation"
                exit 1
            fi
        fi
        
        echo "Authenticating with GitHub..."
        gh auth login
        
        echo "GitHub CLI authentication complete."
        ;;
    4)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo "Invalid option. Exiting..."
        exit 1
        ;;
esac

echo -e "\n===== Testing Authentication ====="
echo "Let's test your authentication by listing your repositories."

if [ $option -eq 3 ]; then
    # Using GitHub CLI
    gh repo list
else
    # Using git
    echo "Attempting to clone a test repository..."
    mkdir -p ~/temp-git-test
    cd ~/temp-git-test
    git clone https://github.com/sumanthudupi585-coder/samsarasagav2.git test-clone
    
    if [ $? -eq 0 ]; then
        echo "Authentication successful!"
        rm -rf ~/temp-git-test
    else
        echo "Authentication failed. Please check your credentials."
    fi
fi

echo -e "\n===== Next Steps ====="
echo "Now you can use the commit-changes.sh script to commit and push your changes:"
echo "./commit-changes.sh"

echo -e "\n===== Done ====="