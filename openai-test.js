import 'dotenv/config';
import OpenAI from "openai";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define Zod schema for structured output
const StudyPlanSchema = z.object({
  schedule: z.array(
    z.object({
      day_number: z.number().describe("The number of the day in the learning schedule."),
      duration: z.number().describe("The duration of study in hours for that day."),
      lessons: z.array(z.string()).describe("List of lessons to cover on that day.")
    })
  )
});

// Prepare structured response format using Zod
const responseFormat = zodResponseFormat(StudyPlanSchema, "study_plan");

// const responseFormat = {
//   "type": "text"
// }

async function getStudyPlan() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: "Generate a 30-day study plan for this course: https://www.udemy.com/course/typescript-the-complete-developers-guide/. Include daily study duration (hours), day numbers, and lesson titles."
        }
      ],
      response_format: responseFormat,  // ✅ Enforces structured output
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    console.log(JSON.stringify(response, null, 2));  // ✅ Pretty-print JSON response
  } catch (error) {
    console.error("Error:", error);  // ✅ Print errors if API call fails
  }
}

// Execute function
getStudyPlan();
