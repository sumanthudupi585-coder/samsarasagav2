# GitHub Commit Guide for Samsara Saga

This guide provides detailed instructions for resolving common GitHub commit issues and successfully pushing your changes to the Samsara Saga repository.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Start](#quick-start)
3. [Using the Commit Script](#using-the-commit-script)
4. [Authentication Setup](#authentication-setup)
5. [Common Issues and Solutions](#common-issues-and-solutions)
6. [Manual Git Commands](#manual-git-commands)
7. [VS Code Integration](#vs-code-integration)

## Prerequisites

Before you begin, ensure you have:

- Git installed on your system
- A GitHub account
- Access to the Samsara Saga repository

## Quick Start

For the fastest way to commit your changes:

1. Open a terminal in the project directory
2. Run the authentication setup script:
   ```bash
   ./setup-github-auth.sh
   ```
3. Follow the prompts to set up authentication
4. Run the commit script:
   ```bash
   ./commit-changes.sh
   ```
5. Follow the prompts to commit and push your changes

## Using the Commit Script

The `commit-changes.sh` script automates the process of committing and pushing changes to GitHub:

1. Navigate to the project directory in your terminal
2. Run the script:
   ```bash
   ./commit-changes.sh
   ```
3. Enter a commit message when prompted (or use the default "UI/UX Enhancement")
4. Enter the branch name when prompted (or use the default "main")
5. The script will:
   - Initialize Git if necessary
   - Add all changes
   - Commit changes with your message
   - Push to the specified branch

If the push fails, the script will offer to pull changes first.

## Authentication Setup

If you're having authentication issues, use the `setup-github-auth.sh` script:

```bash
./setup-github-auth.sh
```

This script offers three authentication methods:

### 1. HTTPS with Credentials Cache

- Caches your GitHub credentials for a period of time
- Requires your GitHub username and personal access token
- Best for quick, temporary authentication

### 2. SSH Key Authentication

- Generates an SSH key if you don't have one
- Guides you through adding the key to your GitHub account
- Best for long-term, secure authentication

### 3. GitHub CLI

- Installs GitHub CLI if not already installed
- Provides a simple authentication flow
- Best for users who prefer command-line tools

## Common Issues and Solutions

### 1. "Permission denied" Error

**Issue**: You see "Permission denied (publickey)" or "Authentication failed" errors.

**Solution**:
- Ensure you're using the correct username and password/token
- For HTTPS: Use a personal access token instead of your password
- For SSH: Verify your SSH key is added to your GitHub account

### 2. "Repository not found" Error

**Issue**: Git cannot find the repository.

**Solution**:
- Verify the remote URL:
  ```bash
  git remote -v
  ```
- If incorrect, update it:
  ```bash
  git remote set-url origin https://github.com/sumanthudupi585-coder/samsarasagav2.git
  ```

### 3. "Failed to push some refs" Error

**Issue**: Your local repository is out of sync with the remote.

**Solution**:
- Pull the latest changes:
  ```bash
  git pull origin main
  ```
- Resolve any merge conflicts
- Try pushing again

### 4. "Updates were rejected" Error

**Issue**: The remote contains work that you don't have locally.

**Solution**:
- Pull with rebase:
  ```bash
  git pull --rebase origin main
  ```
- Resolve any conflicts
- Push again

### 5. Git Not Initialized

**Issue**: The directory is not a Git repository.

**Solution**:
- Initialize Git:
  ```bash
  git init
  ```
- Add the remote:
  ```bash
  git remote add origin https://github.com/sumanthudupi585-coder/samsarasagav2.git
  ```

## Manual Git Commands

If you prefer to use Git commands directly:

1. Initialize Git (if needed):
   ```bash
   git init
   ```

2. Configure Git (if needed):
   ```bash
   git config --local user.name "Your Name"
   git config --local user.email "your.email@example.com"
   ```

3. Add the remote (if needed):
   ```bash
   git remote add origin https://github.com/sumanthudupi585-coder/samsarasagav2.git
   ```

4. Add all changes:
   ```bash
   git add .
   ```

5. Commit changes:
   ```bash
   git commit -m "Your commit message"
   ```

6. Push to GitHub:
   ```bash
   git push -u origin main
   ```

## VS Code Integration

If you're using VS Code and experiencing issues:

### 1. Authentication Issues

- Open VS Code settings (File > Preferences > Settings)
- Search for "git.terminalAuthentication"
- Ensure it's enabled
- Try using the integrated terminal for Git commands

### 2. Source Control Panel Issues

- Ensure the Git extension is enabled
- Try refreshing the Source Control panel
- If issues persist, use the terminal for Git operations

### 3. Credential Storage

- VS Code uses Git's credential storage
- On Windows: Git Credential Manager
- On macOS: Keychain
- On Linux: gnome-keyring or similar

### 4. Alternative Approach

If VS Code's Git integration continues to cause issues:

1. Use the terminal for Git operations
2. Use the provided scripts (`commit-changes.sh` and `setup-github-auth.sh`)
3. Consider using GitHub Desktop as a graphical alternative

---

If you continue to experience issues after following this guide, please contact the repository maintainer for assistance.