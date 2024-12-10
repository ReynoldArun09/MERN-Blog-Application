import {z} from 'zod'

export const PostSchema = z.object({
    title: z.string().min(1, "title is required"),
    desc: z.string().min(1, "desc is required"),
    categories: z.array(z.string()),
    image: z.string()
})

export type PostSchemaType = z.infer<typeof PostSchema>