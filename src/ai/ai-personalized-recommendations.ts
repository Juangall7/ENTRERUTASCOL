'use server';

/**
 * @fileOverview An AI agent that provides personalized tour package and activity recommendations.
 *
 * - getPersonalizedRecommendations - A function that returns personalized recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('The user preferences for tour packages and activities.'),
  historicalData: z
    .string()
    .describe('The user historical data of tour packages and activities.'),
  availableTourPackages: z
    .string()
    .describe('The available tour packages in Norte de Santander.'),
  availableActivities: z
    .string()
    .describe('The available activities in Norte de Santander.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  tourPackages: z
    .array(z.string())
    .describe('The personalized tour package recommendations.'),
  activities: z
    .array(z.string())
    .describe('The personalized activity recommendations.'),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const personalizedRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert travel assistant specializing in providing personalized tour package and activity recommendations in Norte de Santander.

You will use the user preferences, historical data, available tour packages, and available activities to provide personalized recommendations.

User Preferences: {{{userPreferences}}}
Historical Data: {{{historicalData}}}
Available Tour Packages: {{{availableTourPackages}}}
Available Activities: {{{availableActivities}}}

Based on the information above, provide personalized tour package and activity recommendations.
`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedRecommendationsPrompt(input);
    return output!;
  }
);
