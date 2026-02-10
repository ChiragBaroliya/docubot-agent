// commitValidator.ts
// Responsible for validating git commit messages
/**
 * Checks if the commit message follows the Conventional Commits format.
 * Example: feat(scope): short description
 * Types: feat, fix, docs, style, refactor, test, chore
 */
export function validateCommitMessage(message) {
    // Regex: type(optional scope): description
    const commitRegex = /^(feat|fix|docs|style|refactor|test|chore)(\([\w-]+\))?: .+/;
    return commitRegex.test(message);
}
//# sourceMappingURL=commitValidator.js.map