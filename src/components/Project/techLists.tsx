import DigitalOcean from '/public/assets/icons/projects/digital-ocean.svg';
import NodeJs from '/public/assets/icons/projects/node.svg';
import Mongo from '/public/assets/icons/projects/mongodb.svg';
import ReactIcon from '/public/assets/icons/projects/react.svg';
import TS from '/public/assets/icons/projects/ts.svg';
import NextJs from '/public/assets/icons/projects/nextjs.svg';

interface TechItem {
    icon: React.ReactNode;
    name: string;
}

export const techLists: Record<string, TechItem[]> = {
    'Gotham Oracle': [
        { icon: <ReactIcon />, name: 'React' },
        { icon: <TS />, name: 'TypeScript' },
        { icon: <NodeJs />, name: 'Node' },
        { icon: <Mongo />, name: 'MongoDB' },
        { icon: <DigitalOcean />, name: 'Digital Ocean' },
    ],
    Fluidity: [
        { icon: <ReactIcon />, name: 'React' },
        { icon: <TS />, name: 'TypeScript' },
        { icon: <NextJs width={20} height={20} />, name: 'Next.js' },
    ],
};
