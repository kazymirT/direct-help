import { PartnersValues, SupportValues } from '@/lib/validateSchema';

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

export const generatePartnersEmail = (data: PartnersValues) => {
  const { donation, material, media, services, other } = data.partnership;

  const partnershipTypes = [
    donation && 'Фінансова підтримка',
    material && 'Матеріальна допомога',
    media && 'Інформаційна/медійна підтримка',
    services && 'Волонтерство / послуги',
    other && `Інше`,
  ]
    .filter(Boolean)
    .map((type) => `<p>Тип партнерства: ${type}</p>`)
    .join('');

  return `
    <h2>Заявка від партнерів</h2>
    <p>Організація: ${data.organization}</p>
    <p>Контактна особа: ${data.fullName}</p>
    <p>Email: ${data.email}</p>
    <p>Номер заявника: ${data.phone}</p>
    <p>Коментар: ${data.comment}</p>
    <h2>Тип партнерства</h2>
    ${partnershipTypes}
    ...
  `;
};
