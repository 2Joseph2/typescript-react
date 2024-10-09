import React from 'react';


interface Code2Props {
    count: number;  
}

const Code2: React.FC<Code2Props> = ({ count }) => {
    return <div>Code2 count is: {count}</div>;
};

export default Code2;