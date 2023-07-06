import { faker } from '@faker-js/faker';

import { type Agency, type Agenda, type Highlight, type User } from '@/types';

faker.seed(123);
faker.setDefaultRefDate(new Date(2023, 5, 23));

export const user: User = {
  id: 0,
  email: faker.internet.email(),
  firstName: 'James',
  lastName: 'Bryan',
  image: 'https://avatars.githubusercontent.com/u/17677329?v=4',
  isPro: true,
  stripeCustomerId: faker.string.uuid(),
  stripeSubscriptionId: faker.string.uuid(),
  stripeCurrentPeriodEnd: faker.date.future().getTime(),
  stripePriceId: faker.string.uuid(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
};

export const agencies: Agency[] = [
  {
    id: 0,
    fullName: 'Edmond Public Works Committee',
    shortName: 'Edmond',
    slug: 'edmond',
    url: 'https://edmondok.com/AgendaCenter/Public-Works-Committee-10/',
  },
  {
    id: 1,
    fullName: 'Oklahoma City Water Utilities Trust',
    shortName: 'OCWUT',
    slug: 'ocwut',
    url: 'https://okc.legistar.com/DepartmentDetail.aspx?ID=174&GUID=0D4F2F1C-8F1C-4F1C-8F1C-4F1C8F1C8F1C',
  },
  {
    id: 2,
    fullName: 'Stillwater Utilities Authority',
    shortName: 'Stillwater',
    slug: 'stillwater',
    url: 'https://stillwaterok.org/agendacenter',
  },
  {
    id: 3,
    fullName: 'Norman Utilities Authority',
    shortName: 'Norman',
    slug: 'norman',
    url: 'https://normanok.legistar.com/DepartmentDetail.aspx?ID=174&GUID=0D4F2F1C-8F1C-4F1C-8F1C-4F1C8F1C8F1C',
  },
  {
    id: 4,
    fullName: 'Broken Arrow Municipal Authority',
    shortName: 'Broken Arrow',
    slug: 'bama',
    url: 'https://brokenarrowok.gov/AgendaCenter/Municipal-Authority-5/',
  },
  {
    id: 5,
    fullName: 'Tulsa Municipal Utilities Authority',
    shortName: 'Tulsa',
    slug: 'tmua',
    url: 'https://www.cityoftulsa.org/government/departments/utilities/utilities-boards-and-authorities/municipal-utilities-authority/',
  },
];

export const agendas: Agenda[] = [
  {
    id: 0,
    agencyId: 0,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 1,
    agencyId: 1,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 2,
    agencyId: 1,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 3,
    agencyId: 0,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 4,
    agencyId: 2,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 5,
    agencyId: 3,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 6,
    agencyId: 4,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 7,
    agencyId: 5,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
];

export const highlights: Highlight[] = [
  {
    id: 0,
    agendaId: 0,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 1,
    agendaId: 0,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 2,
    agendaId: 0,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 3,
    agendaId: 1,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 4,
    agendaId: 1,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 5,
    agendaId: 2,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 6,
    agendaId: 2,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 7,
    agendaId: 3,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 8,
    agendaId: 3,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 9,
    agendaId: 4,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 10,
    agendaId: 5,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 11,
    agendaId: 6,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 12,
    agendaId: 7,
    content: faker.lorem.paragraphs(1),
  },
];
