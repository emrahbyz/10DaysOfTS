import { FC } from "react";

type TestProps = {
  name?: string;
  age?: number;
};

const TsTest: FC<TestProps> = ({ name, age }) => {
  return (
    <div>
      {name}
      {age}
    </div>
  );
};

export default TsTest;
