import {z} from "zod"

const zNote = z.object({
   id: z.string(),
   title: z.string(),
   content: z.string(),
   description:z.string(),
   createdAt: z.string().datetime(),
   updateAt: z.string().datetime(),
});

export type Note = z.infer<typeof zNote>;