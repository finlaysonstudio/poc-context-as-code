# "New Changelog" Script

Create a new script, context/bin/new-changelog.ts.
Make it executable.
Write it in TypeScript.
tsx is available.
Treat everything passed in as a single string, message.
Make a new filename out of the time and an all-lowercase, whitespace-to-underscore, filesystem-friendly version of message:
context/changelog/yyyy_mm_dd_hhmm_ssmmm_$message.md.
Make the only contents of that file `# $message\n` (using the original casing).
Lint your code when done.
Test that it works.
Clean up any test artifacts (files created by the test).
