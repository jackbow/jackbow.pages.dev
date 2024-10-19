export default {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => /^build\(deps\): bump/.test(message)],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "cosmetic",
        "docs",
        "feat",
        "fix",
        "lint",
        "migrate",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "ui",
      ],
    ],
  },
};
