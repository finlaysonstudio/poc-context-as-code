#!/usr/bin/env tsx

/**
 * Script to create a new changelog file with a timestamp and formatted message
 */
import * as fs from "fs";
import * as path from "path";

/**
 * Creates a filesystem-friendly version of a message
 * @param message The original message
 * @returns Lowercase, whitespace-to-underscore version of the message
 */
function formatMessageForFilename(message: string): string {
  return message.toLowerCase().replace(/\s+/g, "_");
}

/**
 * Generates a timestamp string in the format yyyy_mm_dd_hhmm_ssmmm
 * @returns Formatted timestamp string
 */
function generateTimestamp(): string {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

  return `${year}_${month}_${day}_${hours}${minutes}_${seconds}${milliseconds}`;
}

/**
 * Main function to create a new changelog file
 */
async function main(): Promise<void> {
  try {
    // Get all arguments after the script name and join them as a single message
    const message = process.argv.slice(2).join(" ");

    if (!message) {
      console.error("Error: Please provide a message");
      process.exit(1);
    }

    const timestamp = generateTimestamp();
    const formattedMessage = formatMessageForFilename(message);
    const filename = `context/changelog/${timestamp}_${formattedMessage}.md`;

    // Create the file with the original message as a heading
    const content = `# ${message}\n`;

    // Ensure the directory exists
    const dir = path.dirname(filename);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(filename, content);

    console.log(`Created changelog file: ${filename}`);
  } catch (error) {
    console.error("Error creating changelog file:", error);
    process.exit(1);
  }
}

main();
