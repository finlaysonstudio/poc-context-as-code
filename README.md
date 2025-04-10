# Context as Code ⏺️ 

Proof of concept building an entire project from LLM prompts

## 🛠️ Tech Stack

* Aider
* Markdown

## 📋 Process

### #1 Bootstrap as much as possible in a single prompt

```sh
aider --read context/prompts/Start_TypeScript_Project.md --message-file context/changelog/2025_04_08_2111_43610_start_project
```

## 🚦 Parking Lot

### Observations

Aider is better (more independent) in "code" than "architect" mode.

### Aider Reference

```sh
aider --watch

aider --read this --read that --file target

aider --message "does this and quits"
```

## 📜 License

[MIT License](./LICENSE.txt).
Published by Finlayson Studio.
