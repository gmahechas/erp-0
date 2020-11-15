module.exports = {
  disableEmoji: true,
  list: [
    "test",
    "feat",
    "fix",
    "chore",
    "docs",
    "refactor",
    "style",
    "ci",
    "perf",
    "build",
    "revert",
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    "type",
    /* "scope", */
    "subject",
    "body",
    "breaking",
    "issues",
    "lerna"
  ],
  scopes: [
    "monorepo",
    "api-gateway",
    "auth",
    "common",
    "ms1",
    "ms2",
    "ms3",
    "ms4"
  ],
  types: {
    build: {
      description:
        "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) ",
      "emoji": "👷",
      value: "build",
    },
    chore: {
      description: "Build process or auxiliary tool changes :)",
      "emoji": "🤖",
      value: "chore",
    },
    ci: {
      description: "CI related changes",
      "emoji": "🎡",
      value: "ci",
    },
    docs: {
      description: "Documentation only changes",
      "emoji": "✏️",
      value: "docs",
    },
    feat: {
      description: "A new feature",
      "emoji": "🎸",
      value: "feat",
    },
    fix: {
      description: "A bug fix",
      "emoji": "🐛",
      value: "fix",
    },
    perf: {
      description: "A code change that improves performance",
      "emoji": "⚡️",
      value: "perf",
    },
    refactor: {
      description: "A code change that neither fixes a bug or adds a feature",
      "emoji": "💡",
      value: "refactor",
    },
    release: {
      description: "Create a release commit",
      "emoji": "🏹",
      value: "release",
    },
    revert: {
      description: "Reverts a previous commit",
      "emoji": "⬅️",
      value: "revert",
    },
    style: {
      description: "Markup, white-space, formatting, missing semi-colons...",
      "emoji": "💄",
      value: "style",
    },
    test: {
      description: "Adding missing tests",
      "emoji": "💍",
      value: "test",
    },
  },
};
