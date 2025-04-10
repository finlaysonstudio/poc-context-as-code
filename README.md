# Context as Code ⏺️ 

Proof of concept building an entire project from LLM prompts

## 🛠️ Tech Stack

* Aider
* Markdown

## 🎡 Flywheel

1. Create changelog file
  ```
  npm run new:change
  ```
2. Write changelog entry
3. Provide LLM changelog, any additional context
  ```
  aider --message-file ./context/changelog/<entry>
  ```

## 📎 Appendix

### Initial Setup

#### #1 Bootstrap as much as possible in a single prompt

```sh
aider --read context/prompts/Start_TypeScript_Project.md --message-file context/changelog/2025_04_08_2111_43610_start_project
```

See [Start TypeScript Project](context/prompts/Start_TypeScript_Project.md) and [Start Project Changelog](context/changelog/2025_04_08_2111_43610_start_project)

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

### Aider

#### Observations

Aider is better (more independent) in "code" than "architect" mode.

####  Reference

```sh
aider --watch

aider --read this --read that --file target

aider --message "does this and quits"
```

## 🚦 Parking Lot

* Can aider run with auto-accept? Should it 😅

## 📜 License

[MIT License](./LICENSE.txt).
Published by Finlayson Studio.
