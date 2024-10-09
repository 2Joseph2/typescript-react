import React from 'react';

interface Code1Props {
    name: string;
}

const Code1: React.FC<Code1Props> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default Code1;