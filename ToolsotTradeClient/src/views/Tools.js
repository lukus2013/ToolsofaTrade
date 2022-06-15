import React, { useEffect, useState } from 'react'
import { getTools } from '../data/toolData';
import ToolCard from '../components/ToolCard';

export default function Tools() {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        let isMounted = true;
        getTools().then((toolsArray) => {
            if (isMounted) setTools(toolsArray);
        });
    });

  return (
    <div>
        {tools.map((tool) => {
            return (
                <ToolCard key={tool.toolId} tool={tool} />
            )
        })}
    </div>
  )
}
