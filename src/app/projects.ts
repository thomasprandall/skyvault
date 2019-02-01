import { Project } from './project/project';

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'Kalispell Aerial Tour',
        imgsource: './assets/img/Jewel.jpg',
        desc: 'Full 360 Degree Drive down Kalispell. Best viewed in 4k!',
        subtitle: 'January 23, 2019',
        vidid: `https://www.youtube.com/watch?v=6VWD8czGO5Q`,
        related: []
    },
    {
        id: 2,
        name: 'From The Vault',
        imgsource: './assets/img/CE.jpg',
        vidid: 'https://www.youtube.com/watch?v=R2bBCfCf97w',
        desc: ``,
        subtitle: 'Another String For Details Page',
        related: []
    },
    {
        id: 3,
        name: 'Hunter Linstead Glass Blowing',
        vidid: 'https://www.youtube.com/watch?v=RhYThlIE65c',
        desc: '',
        subtitle: 'Another String For Details Page',
        related: [4]
    },
    {
        id: 4,
        name: 'My Montana Wedding 2019',
        imgsource: './assets/img/skyvault.png',
        desc: '',
        subtitle: 'Another String For Details Page',
        related: [3]
    }
];
