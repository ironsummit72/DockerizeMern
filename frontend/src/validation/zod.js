

import { z } from "zod";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  firstName: z
    .string()
    .min(5, { message: "firstname should be at least 5 characters" }),
  lastName: z
    .string()
    .min(5, { message: "lastname should be at least 5 characters" }),
});
export default formSchema
