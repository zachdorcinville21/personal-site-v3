import React from 'react';
import styled from 'styled-components';
import { Card, Button } from '@mantine/core';
import { techLists } from './techLists';
import { useViewportSize } from '@mantine/hooks';

interface ProjectProps {
  imgLink: string;
  title: string;
  description: JSX.Element | string;
  projLink: string;
}

const Project = ({ imgLink, title, description, projLink }: ProjectProps) => {
  const { width } = useViewportSize();

  return (
    <Card
      style={{
        background: 'rgba(12, 18, 31, 0.55)',
        backdropFilter: 'blur(12px)',
        width: width >= 425 ? 400 : 350,
        height: width >= 425 ? 560 : 540,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Card.Section>
        <img
          src={imgLink}
          alt={`${title} preview`}
          style={{ width: '100%', height: 190, objectFit: 'cover' }}
        />
      </Card.Section>
      <Card.Section
        p="md"
        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.14)' }}
      >
        <ProjTitle>{title}</ProjTitle>
        <ProjDesc>{description}</ProjDesc>
      </Card.Section>
      <Card.Section
        p="md"
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
          flex: 1,
        }}
      >
        <TechTitle>Technologies</TechTitle>
        <TechList>
          {techLists[title].map((item) => (
            <TechItem key={`${title}-${item.name}`}>
              {item.icon}
              {item.name}
            </TechItem>
          ))}
        </TechList>
      </Card.Section>
      <Card.Section
        p="md"
        style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}
      >
        <Button
          component="a"
          href={projLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="filled"
          style={{ background: '#2F5FA8' }}
          fullWidth
          radius="md"
        >
          View
        </Button>
      </Card.Section>
    </Card>
  );
};

const ProjTitle = styled.h2`
  font-size: 1.05rem;
  margin: 0 0 0.5rem;
  letter-spacing: 0.01em;
`;

const ProjDesc = styled.div`
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(236, 239, 247, 0.85);
`;

const TechTitle = styled.h6`
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0;
  color: rgba(159, 214, 255, 0.9);
  margin-bottom: 6px;
`;

const TechList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TechItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: rgba(236, 239, 247, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  background: rgba(255, 255, 255, 0.06);
`;

export default Project;
