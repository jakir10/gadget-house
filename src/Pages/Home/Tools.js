import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://radiant-wave-25983.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    return (
        <div>
            <div className='my-24 text-primary text-center text-2xl font-bold uppercase'>
                <h2>All Tools</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;