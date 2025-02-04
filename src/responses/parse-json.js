import { readFile, writeFile } from 'fs/promises';
import jsonTypeResponse from "./json-type-response.js";

const response = {
  message: {
    role: "assistant",
    content: jsonTypeResponse.choices[0].message.content
  }
};

try {
  // Parse the JSON string inside "content"
  const parsedJson = JSON.parse(response.message.content);

  // Convert the parsed JSON to a formatted string
  const formattedJson = JSON.stringify(parsedJson, null, 2);

  // Save the parsed JSON into a file
  await writeFile('output.json', formattedJson, 'utf8');

  console.log("✅ Successfully parsed and saved JSON to output.json");
} catch (error) {
  console.error("❌ Error parsing JSON:", error);
}
