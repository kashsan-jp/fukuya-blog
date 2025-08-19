import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z
        .email({message: "正しいEメールアドレスを入力してください"})
        .trim(),
    password: z
        .string()
        .min(1, { message: "パスワード入れてください"}).trim(),
});

export const RegisterFormSchema = z.object({
    
    email: z
        .email({message: "正しいEメールアドレスを入力してください"})
        .trim(), 
    password: z
        .string()
        .min(1, { message: "パスワードを入れてください"})
        .min(5, { message: "パスワードは５文字以上です"})
        .regex(/[a-zA-Z]/, { message: "アルファベットを１文字以上含めてください"})
        .regex(/[0-9]/, { message: "数字１文字以上含めてください"})
        .regex(/[^a-zA-Z0-9]/, { message: "特殊文字１文字以上含めてください"})
        .trim(), 
    confirmPassword: z.string().trim(),
}).superRefine((val, ctx) => {
    if(val.password !== val.confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "上下のパスワードが一致しません",
            path: ["confirmPassword"],
        });
    }
});

export const BlogPostSchema = z.object({
    title: z.string().min(1 ,{message: "タイトルをいれてください"})
        .max(100, {message: "タイトルは100文字以下でお願いします"})
        .trim(),
    
    content: z.string().min(1 ,{message: "Content field is required."})
        .trim(),
    
})