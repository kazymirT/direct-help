export const videos = {
  'one': 'E_0PULRr3qs',
  'two': 'E_0PULRr3qs'
}
export interface Reporting {
  id: number;
  name: string;
  image: string;
  video: keyof typeof videos;
}

export const REPORTING_DATA: Reporting[] = [
  { 
    id: 1,
    name: 'one',
    image: '/reportings/reporting_1.png',
    video: 'one',
  },
  { 
    id: 2,
    name: 'two',
    image: '/reportings/reporting_2.png',
    video: 'one',
  },
  { 
    id: 3,
    name: 'three',
    image: '/reportings/reporting_3.png',
    video: 'one',
  },
  { 
    id: 4,
    name: 'four',
    image: '/reportings/reporting_6.png',
    video: 'one',
  },
  { 
    id: 5,
    name: 'five',
    image: '/reportings/reporting_5.png',
    video: 'one',
  },
  { 
    id: 6,
    name: 'six',
    image: '/reportings/reporting_4.png',
    video: 'one',
  },
  { 
    id: 7,
    name: 'seven',
    image: '/reportings/reporting_9.png',
    video: 'one',
  },
  { 
    id: 8,
    name: 'eight',
    image: '/reportings/reporting_8.png',
    video: 'one',
  },
  { 
    id: 9,
    name: 'nine',
    image: '/reportings/reporting_7.png',
    video: 'one',
  },
];
