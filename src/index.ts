#!/usr/bin/env node

import { execSync } from "node:child_process";

// Get current git branch name
function getCurrentBranch(): string {
  return execSync("git branch --show-current").toString().trim();
}

// Validate branch name
function validateBranch(branch: string): boolean {
  const branchRegex = /^(feature|bugfix|hotfix)\/[A-Z]+-\d+-.+$/;
  return branchRegex.test(branch);
}

// MAIN
try {
  const branchName = getCurrentBranch();
  console.log("Current branch:", branchName);

  if (!validateBranch(branchName)) {
    console.error("❌ Invalid branch name format");
    console.error("Expected: feature/JIRA-123-description");
    process.exit(1); // important for CI/CD
  } else {
    console.log("✅ Branch name is valid");
  }
} catch (error) {
  console.error("❌ Error reading git branch:", error);
  process.exit(1);
}
