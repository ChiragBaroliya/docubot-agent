#!/usr/bin/env node
// Import built-in Node.js module to run shell commands
import { execSync } from "node:child_process";
// Import our validation functions
import { validateBranch } from "./branchValidator.js";
import { validateCommitMessage } from "./commitValidator.js";
// Get current git branch name
function getCurrentBranch() {
    // Runs 'git branch --show-current' and returns the branch name
    return execSync("git branch --show-current").toString().trim();
}
// Get last commit message
function getLastCommitMessage() {
    // Runs 'git log -1 --pretty=%B' to get the last commit message
    return execSync("git log -1 --pretty=%B").toString().trim();
}
// MAIN ENTRY POINT
try {
    // 1. Validate branch name
    const branchName = getCurrentBranch();
    console.log("Current branch:", branchName);
    if (!validateBranch(branchName)) {
        console.error("❌ Invalid branch name format");
        console.error("Expected: feature/JIRA-123-description");
        process.exit(1); 
    }
    else {
        console.log("✅ Branch name is valid");
    }
    // 2. Validate last commit message
    const commitMessage = getLastCommitMessage();
    console.log("Last commit message:", commitMessage);
    if (!validateCommitMessage(commitMessage)) {
        console.error("❌ Invalid commit message format");
        console.error("Expected: feat(scope): short description");
        process.exit(1); // Exit with error for CI/CD
    }
    else {
        console.log("✅ Commit message is valid");
    }
}
catch (error) {
    // Handles any unexpected errors (e.g., not in a git repo)
    console.error("❌ Error:", error instanceof Error ? error.message : error);
    process.exit(1);
}
//# sourceMappingURL=index.js.map