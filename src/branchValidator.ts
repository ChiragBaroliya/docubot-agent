// branchValidator.ts
// Responsible for validating git branch names

/**
 * Checks if the branch name matches the required pattern.
 * Allowed prefixes: feature/, bugfix/, hotfix/
 * Example: feature/JIRA-123-description
 */
export function validateBranch(branch: string): boolean {
  // Regex: prefix/TICKET-123-description
  const branchRegex = /^(feature|bugfix|hotfix)\/[A-Z]+-\d+-.+$/;
  return branchRegex.test(branch);
}
