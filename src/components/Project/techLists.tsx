import DigitalOcean from '/public/assets/icons/projects/digital-ocean.svg';
import NodeJs from '/public/assets/icons/projects/node.svg';
import Mongo from '/public/assets/icons/projects/mongodb.svg';
import ReactIcon from '/public/assets/icons/projects/react.svg';
import TS from '/public/assets/icons/projects/ts.svg';

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
    $SOLhub: [
        { icon: <ReactIcon />, name: 'React' },
        { icon: <TS />, name: 'TypeScript' },
        { icon: <NodeJs />, name: 'Node' },
        { icon: <Mongo />, name: 'MongoDB' },
        { icon: <DigitalOcean />, name: 'Digital Ocean' },
    ],
};
