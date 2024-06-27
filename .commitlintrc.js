// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  extends: ["@commitlint/config-conventional"],
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking:
        'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixesSelect:
        "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefix: "Input ISSUES prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above?",
    },
    types: [
      { value: "feat", name: "feat:     A new feature", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      A bug fix", emoji: ":bug:" },
      {
        value: "docs",
        name: "docs:     Documentation only changes",
        emoji: ":memo:",
      },
      {
        value: "style",
        name: "style:    Changes that do not affect the meaning of the code",
        emoji: ":lipstick:",
      },
      {
        value: "refactor",
        name: "refactor: A code change that neither fixes a bug nor adds a feature",
        emoji: ":recycle:",
      },
      {
        value: "perf",
        name: "perf:     A code change that improves performance",
        emoji: ":zap:",
      },
      {
        value: "test",
        name: "test:     Adding missing tests or correcting existing tests",
        emoji: ":white_check_mark:",
      },
      {
        value: "build",
        name: "build:    Changes that affect the build system or external dependencies",
        emoji: ":package:",
      },
      {
        value: "ci",
        name: "ci:       Changes to our CI configuration files and scripts",
        emoji: ":ferris_wheel:",
      },
      {
        value: "chore",
        name: "chore:    Other changes that don't modify src or test files",
        emoji: ":hammer:",
      },
      {
        value: "revert",
        name: "revert:   Reverts a previous commit",
        emoji: ":rewind:",
      },
    ],
    useEmoji: true,
    emojiAlign: "center",
  },
};
