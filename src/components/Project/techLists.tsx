import DigitalOcean from '/public/assets/icons/projects/digital-ocean.svg';
import NodeJs from '/public/assets/icons/projects/node.svg';
import Mongo from '/public/assets/icons/projects/mongodb.svg';
import ReactIcon from '/public/assets/icons/projects/react.svg';
import TS from '/public/assets/icons/projects/ts.svg';
import NextJs from '/public/assets/icons/projects/nextjs.svg';
import SocketIO from '/public/assets/icons/projects/socketio.svg';
import Postgres from '/public/assets/icons/projects/postgresql.svg';
import NestJS from '/public/assets/icons/projects/nestjs.svg';
import Stripe from '/public/assets/icons/projects/stripe.svg';

interface TechItem {
    icon: React.ReactNode;
    name: string;
}

export const techLists: Record<string, TechItem[]> = {
    'ProFrontend': [
        { icon: <ReactIcon />, name: 'React' },
        { icon: <TS />, name: 'TypeScript' },
        { icon: <NextJs width={20} height={20} />, name: 'Next.js' },
        { icon: <Postgres width={20} height={20} />, name: 'Postgres' },
        { icon: <NestJS width={20} height={20} />, name: 'NestJS' },
        { icon: <Stripe width={20} height={20} />, name: 'Stripe' },
    ],
    'Gotham Oracle': [
        { icon: <ReactIcon />, name: 'React Native' },
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
    $SOLhub: [
        { icon: <ReactIcon />, name: 'React' },
        { icon: <TS />, name: 'TypeScript' },
        { icon: <NodeJs />, name: 'Node' },
        { icon: <SocketIO width={20} height={20} />, name: 'Socket.IO' },
        { icon: <Mongo />, name: 'MongoDB' },
        { icon: <DigitalOcean />, name: 'Digital Ocean' },
    ],
};
