import { ScrumboardUser } from '../app/apps/scrum-board/interfaces/scrumboard-user.interface';
import { ScrumboardLabel } from '../app/apps/scrum-board/interfaces/scrumboard-label.interface';
import { Scrumboard } from '../app/apps/scrum-board/interfaces/scrumboard.interface';
import { ScrumboardAttachment } from '../app/apps/scrum-board/interfaces/scrumboard-attachment.interface';
import { ScrumboardComment } from '../app/apps/scrum-board/interfaces/scrumboard-comment.interface';


export const scrumboardAttachments: ScrumboardAttachment[] = [
  {
    id: 1,
    name: 'business-case.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/1.jpg',
    size: '55 KB'
  },
  {
    id: 2,
    name: 'laptop.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/2.jpg',
    size: '62 KB'
  },
  {
    id: 3,
    name: 'how-to.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/3.jpg',
    size: '35 KB'
  },
  {
    id: 4,
    name: 'workplace.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/4.jpg',
    size: '51 KB'
  },
  {
    id: 5,
    name: 'issue-332.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/5.jpg',
    size: '10 KB'
  },
  {
    id: 6,
    name: 'notebook-26.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/6.jpg',
    size: '48 KB'
  },
  {
    id: 7,
    name: 'business-2.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/7.jpg',
    size: '58 KB'
  },
  {
    id: 7,
    name: 'example-67.jpg',
    extension: 'jpg',
    path: 'assets/img/demo/8.jpg',
    size: '87 KB'
  }
];

export const scrumboardUsers: ScrumboardUser[] = [
  {
    name: 'David Smith',
    imageSrc: 'assets/img/avatars/1.jpg'
  },
  {
    name: 'Michael Bolta',
    imageSrc: 'assets/img/avatars/2.jpg'
  },
  {
    name: 'Jenny Zents',
    imageSrc: 'assets/img/avatars/3.jpg'
  },
  {
    name: 'Donald Orisan',
    imageSrc: 'assets/img/avatars/4.jpg'
  },
  {
    name: 'Frank Uhrzeen',
    imageSrc: 'assets/img/avatars/5.jpg'
  },
  {
    name: 'James Blound',
    imageSrc: 'assets/img/avatars/6.jpg'
  },
  {
    name: 'Peter Moffeen',
    imageSrc: 'assets/img/avatars/7.jpg'
  }
];



export const scrumboardLabels: ScrumboardLabel[] = [
  {
    label: 'High Priority',
    background: '#ffc107',
    color: '#0000',
  },
  {
    label: 'Blocked',
    background: '#f44336',
    color: '#fff'
  },
  {
    label: 'Approved',
    background: '#4caf50',
    color: '#fff'
  },
  {
    label: 'Ready',
    background: '#00bcd4',
    color: '#fff',
  },
  {
    label: 'Deployed',
    background: '#9c27b0',
    color: '#fff',
  }
];

export const scrumboards: Scrumboard[] = [
    {
      id: 1,
      label: 'Tech Startup Board',
      children: [
        {
          id: 1,
          label: 'Backlog',
          children: [
            {
              id: 11,
              title: 'Fix Issue #332',
              description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
              
             
              cover: scrumboardAttachments[0]
            },
            {
              id: 12,
              title: 'Create new User Profiles',
              
            },
            {
              id: 13,
              title: 'Add Dashboard',
              description: '',
              
              cover: scrumboardAttachments[2]
            },
            {
              id: 14,
              title: 'Improve User Onboarding',
              
            },
            {
              id: 5,
              title: 'Create new All-In-One Widget',
              description: 'This widget has superpowers and can display all the great things you love and want in life.',
              cover: scrumboardAttachments[1]
            },
          ]
        },
        {
          id: 2,
          label: 'Hot Backlog',
          children: [
            {
              id: 21,
              title: 'Create Support Center',
              
            },
            {
              id: 22,
              title: 'Add Forgot Password functionality',
              
             
              cover: scrumboardAttachments[3]
            },
            {
              id: 23,
              title: 'Make America Great Again',
              
            },
            {
              id: 24,
              title: 'Create new Design Prototypes',
             
              cover: scrumboardAttachments[4]
            }
          ]
        },
        {
          id: 3,
          label: 'In Progress',
          children: [
            {
              id: 31,
              title: 'Add new Material Design 2 Icons',
              cover: scrumboardAttachments[6]
            },
            {
              id: 32,
              title: 'Improve Dashboard Grid',
              
            },
            {
              id: 33,
              title: 'Use Google Fonts',
              cover: scrumboardAttachments[5]
            }
          ]
        },
        {
          id: 4,
          label: 'Ready to Deploy',
          children: [
            {
              id: 41,
              title: 'Add Meta Description',
              
            },
            {
              id: 42,
              title: 'Redesign Homepage',
              
            },
            {
              id: 43,
              title: 'Work on SEO',
            },
            {
              id: 44,
              title: 'Create new Side-Navigation',
              
            },
            {
              id: 45,
              title: 'Participate in Design Contest',
            }
          ]
        }
      ]
    }
  ];
