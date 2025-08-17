#!/bin/bash

# Script to commit and push changes to GitHub repository
# Created to help with VS Code git issues

echo "===== Samsara Saga UI/UX Enhancement Commit Script ====="
echo "This script will help you commit and push your changes to GitHub"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Error: git is not installed. Please install git first."
    exit 1
fi

# Navigate to the repository directory
cd "$(dirname "$0")"

# Check if this is a git repository
if [ ! -d .git ]; then
    echo "Error: This directory is not a git repository. Initializing..."
    git init
    git config --local user.name "SamsaraSaga Developer"
    git config --local user.email "developer@example.com"
    echo "Git repository initialized."
fi

# Check if remote exists
if ! git remote | grep -q "origin"; then
    echo "Remote 'origin' not found. Adding remote..."
    git remote add origin https://github.com/sumanthudupi585-coder/samsarasagav2.git
fi

# Check repository status
echo -e "\n===== Repository Status ====="
git status

# Add all changes
echo -e "\n===== Adding all changes ====="
git add .

# Commit changes
echo -e "\n===== Committing changes ====="
read -p "Enter commit message (default: 'UI/UX Enhancement'): " commit_message
commit_message=${commit_message:-"UI/UX Enhancement"}
git commit -m "$commit_message"

# Push changes
echo -e "\n===== Pushing to GitHub ====="
echo "Which branch would you like to push to? (default: main)"
read -p "Branch name: " branch_name
branch_name=${branch_name:-"main"}

# Check if branch exists locally
if ! git show-ref --verify --quiet refs/heads/$branch_name; then
    echo "Branch $branch_name doesn't exist locally. Creating it..."
    git checkout -b $branch_name
fi

# Try to push (this might fail if authentication is required)
echo "Attempting to push to $branch_name branch..."
if git push -u origin $branch_name; then
    echo -e "\n===== Success! ====="
    echo "Changes have been pushed to https://github.com/sumanthudupi585-coder/samsarasagav2"
else
    echo -e "\n===== Push failed ====="
    echo "You may need to set up authentication."
    echo "Options:"
    echo "1. Use GitHub CLI (recommended)"
    echo "2. Set up a Personal Access Token"
    echo "3. Try using HTTPS with credentials"
    echo "4. Pull changes first"
    
    read -p "Would you like to try pulling changes first? (y/n): " pull_first
    if [[ $pull_first == "y" || $pull_first == "Y" ]]; then
        git pull origin $branch_name
        echo "Now try pushing again with: git push -u origin $branch_name"
    fi
    
    echo -e "\nFor GitHub authentication help, visit: https://docs.github.com/en/authentication"
fi

echo -e "\n===== Done ====="