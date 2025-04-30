import { SupportValues } from "@/lib/validateSchema";

// lib/emailTemplates.ts
export const generateSupportEmail = (data: SupportValues) => `
  <h2>Заявка на підтримку</h2>
  <p>Email: ${data.email}</p>
  <p>ПІБ: ${data.fullName}</p>
  <p>Статус: ${data.status}</p>
  <p>Номер заявника: ${data.phone}</p>
  <p>Марка та модель авто: ${data.auto}</p>
  <p>Тип палива: ${data.fuel}</p>
  <p>Тип коробки передач: ${data.transmission}</p>
  <p>Тип привода: ${data.drive}</p>
  <p>Коментар: ${data.comment}</p>
  ...
`;