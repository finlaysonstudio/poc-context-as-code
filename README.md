# Context as Code ⏺️

Proof of concept building an entire project from LLM prompts

## ✈️ Overview

* The developer writes markdown prompts for each change request in `context/changelog`
* Additional context such as guides (`context/prompts`) or external documentation (`context/lib`) can be linked from the original prompt
* Code generator attempts solution
* Accepted solutions are committed with the context
* Rejected solutions are rolled back and re-attempted with an updated prompt.
* NO SECOND TURNS

### Tech Stack

* Aider
* Markdown

## 🎡 Workflow

1. Create changelog file
  ```sh
  npm run new:change
  ```
2. Write changelog entry in the created file
3. Provide LLM changelog, any additional context
  ```sh
  aider --message-file ./context/changelog/<entry>
  ```

Additional context can be passed on the command line or linked from the changelog.

```sh
aider --read context/lib/jaypie/Jaypie_Add_Vitest_Tests.md --message-file ./context/changelog/<entry>
```

## 📎 Appendix

### Aider

#### Configuration

`~/.aider.conf.yml`

```yml
anthropic-api-key: sk-ant-api03-…
# architect: false
auto-commits: false
# auto-lint: true
auto-test: true
# git: true
lint-cmd: eslint --fix
llm-history-file: .aider.llm.history
openai-api-key: sk-proj-…
read: [.aider.user.md, context/prompts/Project_Style_and_Conventions.md]
test-cmd: vitest run
watch-files: true
yes-always: true
```

_Some of these choices reflect defaults I was experimenting with_

#### Observations

Aider is better (more independent) in "code" than "architect" mode.

####  Reference

```sh
aider --watch

aider --read this --read that --file target

aider --message "does this and quits"
```

### Initial Setup

_These are the initial steps I followed._
_I would try to make it all one command next time!_

#### #1 Bootstrapped as much as possible in a single prompt

```sh
aider --read context/prompts/Start_TypeScript_Project.md --message-file context/changelog/2025_04_08_2111_43610_start_project.md
```

See [Start TypeScript Project](context/prompts/Start_TypeScript_Project.md) and [Start Project Changelog](context/changelog/2025_04_08_2111_43610_start_project.md)

#### Manual Tweaks

To align with [Ideal Project Structure](context/prompts/Ideal_Project_Structure.md).
Future prompts can incorporate this.

#### #2 Create a script to create a changelog request

```sh
aider --message-file context/changelog/2025_04_09_2219_39583_new_changelog_script.md
aider --message-file context/changelog/2025_04_09_2231_45955_changelog_script:_prompt_empty.md
aider --message-file context/changelog/2025_04_09_2240_35193_npm_script_for_changelog.md
```

See:
* [New Changelog Script](context/changelog/2025_04_09_2219_39583_new_changelog_script.md)
* [Changelog Script: Prompt Empty](context/changelog/2025_04_09_2231_45955_changelog_script:_prompt_empty.md)
* [NPM Script for Changelog](context/changelog/2025_04_09_2240_35193_npm_script_for_changelog.md)

## 📜 License

[MIT License](./LICENSE.txt).
Published by Finlayson Studio.
