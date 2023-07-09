
const z = require('zod');

const DynamicMealSchema = z.object({
  name: z.string(),
  meal: z.discriminatedUnion("preference", [
    z.object({
      preference: z.literal("vegetarian"),
      choice: z.enum(['Quinoa', 'Pizza']),
    }),
    z.object({
      preference: z.literal("normie"),
      choice: z.enum(['Quinoa', 'Pizza', 'Burger']),
    }),
  ]),
});
const output = DynamicMealSchema.parse({
  name: 'Cory',
  meal: { preference: 'vegetarian', choice: 'Pizza' }
}); // Success

console.log(output);
