import React, {useState} from 'react';

const Clock = () => {
  const [date, setDate] = useState<Date>(new Date())
  console.log(date)
  return (
    <div>
      <h1>{date.getFullYear()}</h1>
    </div>
  );
};

export default Clock;