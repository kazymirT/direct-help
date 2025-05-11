import { z } from "zod";

export type T = (key: string, options?: Record<string, string | number | Date>) => string;

const getEmail = (t?: T, min = 7, max = 30) => {
  return z
    .string()
    .min(1, { message: t?.('error.required') })
    .min(min, { message: t?.('error.min', { number: min }) })
    .max(max ?? 30, { message: t?.('error.max', { number: max ?? 30 }) })
    .email({ message: t?.('error.email') });
};

const getFullName = (t?: T, min?: number, max?: number) => {
  return z
    .string()
    .min(1, { message: t?.('error.required') })
    .min(min ?? 3, { message: t?.('error.min', { number: min ?? 3 }) })
    .max(max ?? 30, { message: t?.('error.max', { number: max ?? 30 }) })
};

export const getPhone = (t?: T, min = 7, max = 15) => {
  return z
    .string()
    .trim()
    .min(1, { message: t?.('error.required') })
    .refine(
      (val) => {
        const digitsOnly = val.replace(/\D/g, "");
        return digitsOnly.length >= min;
      },
      { message: t?.('error.min', { number: min }) }
    )
    .refine(
      (val) => {
        const digitsOnly = val.replace(/\D/g, "");
        return digitsOnly.length <= max;
      },
      { message: t?.('error.max', { number: max }) }
    )
    .refine(
      (val) => /^[+\d\s\-()]*$/.test(val),
      { message: t?.('error.phone') || "Номер містить недопустимі символи" }
    );
};

export const getSupportSchema = (t?: T) => {
  return z.object({
    email: getEmail(t),
    fullName: getFullName(t),
    status: getFullName(t).optional().or(z.literal('')),
    phone: getPhone(t),
    auto: getFullName(t).optional().or(z.literal('')),
    fuel: getFullName(t).optional().or(z.literal('')),
    transmission: getFullName(t).optional().or(z.literal('')),
    drive: getFullName(t).optional().or(z.literal('')),
    comment: getFullName(t, 10, 200).optional().or(z.literal('')),
    accept: z.boolean().refine(value => value === true, { message: t?.('error.accept') || 'You must agree to the terms and conditions' }),
  });
};
export type SupportValues = z.infer<ReturnType<typeof getSupportSchema>>;

export const getPartnersSchema = (t?: T) => {
  return z.object({
    organization: getFullName(t, 3, 100),
    fullName: getFullName(t),
    email: getEmail(t),
    phone: getPhone(t),
    cite: getFullName(t, 5, 50).optional().or(z.literal('')),
    comment: getFullName(t, 10, 200).optional().or(z.literal('')),
    accept: z.boolean().refine((value) => value === true, {
      message: t?.('error.accept') || 'Потрібно погодитись',
    }),
    partnership: z
      .object({
        donation: z.boolean(),
        material: z.boolean(),
        media: z.boolean(),
        services: z.boolean(),
        other: z.boolean(),
      })
      .refine(
        (data) => Object.values(data).some((v) => v === true),
        {
          message: t?.('error.partnership') || 'Оберіть хоча б один тип партнерства',
        }
      ),
  });
};

export type PartnersValues = z.infer<ReturnType<typeof getPartnersSchema>>;
