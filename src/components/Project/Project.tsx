import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled, { useTheme } from 'styled-components';
import { Card, Button } from '@mantine/core';
import Image from 'next/image';
import { techLists } from './techLists';

const styles = makeStyles({
    regText: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: '19px',
    },

    root: {
        width: 400,
        backgroundColor: '#36454f',
    },

    media: {
        height: 280,
    },

    title: {
        color: '#fff',
    },

    description: {
        fontSize: '12px',
        color: '#fff',
    },

    btnTxt: {
        fontSize: '10px',
        color: '#fff',
    },

    cardContent: {
        textAlign: 'left',
    },
});

const Title = styled.h5`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const Desc = styled.div`
    font-size: 16px;
    color: #fff;
    margin: 0;
`;

const ViewCode = styled.a`
    color: #fff;
    margin: 0;
    font-size: 10px;
    text-decoration: none;
    text-transform: uppercase;
`;

interface ProjectProps {
    imgLink: string;
    title: string;
    description: JSX.Element | string;
    githubLink: string;
    projLink: string;
}

const Project = ({
    imgLink,
    title,
    description,
    githubLink,
    projLink,
}: ProjectProps) => {
    const styleProps = useRef<{ width: number } | null>(null);

    const theme = useTheme();

    useEffect(() => {
        styleProps.current = { width: window.screen.width <= 480 ? 350 : 400 };
    }, []);

    const classes = styles(styleProps.current ?? { width: 0 });

    return (
        <Card style={{ backgroundColor: '#000000', width: 400 }}>
            <Card.Section>
                <img
                    src={imgLink}
                    alt="solhub image"
                    style={{ width: '100%', height: 180 }}
                />
            </Card.Section>
            <Card.Section
                p="md"
                style={{ borderBottom: `0.9px solid ${theme.pallete.dark3}` }}
            >
                <ProjTitle>{title}</ProjTitle>
                <ProjDesc>{description}</ProjDesc>
            </Card.Section>
            <Card.Section
                p="md"
                style={{ borderBottom: `0.9px solid ${theme.pallete.dark3}` }}
            >
                <TechTitle>Technologies</TechTitle>
                <TechList>
                    {techLists[title].map((item) => (
                        <TechItem>
                            {item.icon}
                            {item.name}
                        </TechItem>
                    ))}
                </TechList>
            </Card.Section>
            <Card.Section
                p="md"
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <Button component="a" href={projLink} target="_blank" variant='gradient' fullWidth>
                    View
                </Button>
            </Card.Section>
            {/* <CardActionArea href={projLink} target="_blank">
                <CardMedia
                    className={classes.media}
                    image={imgLink}
                    title={title}
                />
                <CardContent className={classes.cardContent}>
                    <Title>{title}</Title>
                    <Desc>{description}</Desc>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ViewCode href={githubLink} target="_blank">
                    View code
                </ViewCode>
            </CardActions> */}
        </Card>
    );
};

const ProjTitle = styled.h2`
    font-size: 1rem;
`;

const ProjDesc = styled.div`
    font-size: 0.8rem;
`;

const TechTitle = styled.h6`
    font-size: 0.8rem;
    margin: 0;
    color: ${(props) => props.theme.pallete.dark3};
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
`;

export default Project;
