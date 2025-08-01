import React from 'react';
import Tags from './tags';

interface Props {
  catagory: string[]; 
}

const JobFooter = ({ catagory }: Props) => {
  const used = new Set<number>();

  
  const getRandomColor = (): string=> {
    const options = Array.from({ length: 9 }, (_, i) => i + 2); 
    const available = options.filter((n) => !used.has(n));

    const random = available.length > 0
      ? available[Math.floor(Math.random() * available.length)]
      : Math.floor(Math.random() * 9) + 2;

    used.add(random);
    return String(random);
  };

  return (
    <div className="flex items-center space-x-1 py-1">
      
      <Tags type="1" label="In Person" color="1" />
      <span className="text-gray-200">|</span>
      {catagory.map((value, index) => (
        <React.Fragment key={index}>
          
          <Tags type="2" label={value} color={getRandomColor()} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default JobFooter;
