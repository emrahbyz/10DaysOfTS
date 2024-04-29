import { FC, useEffect, useState } from "react";

type TestProps = {
  name?: string;
  age?: number;
};

const TsTest: FC<TestProps> = ({ name, age }) => {
  const [first, setFirst] = useState<number>(22);
  useEffect(() => {
    setFirst(first);
  });
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!");
    console.log("Event details:", event);
  };

  return (
    <div>
      <button onClick={(event) => handleClick(event)}>Test</button>
      {first}
      {name}
      {age}
    </div>
  );
};

export default TsTest;
