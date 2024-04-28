type instructorPros = {
  instructorNameLastName: {
    firstName: string | number;
    lastName: string | number;
  };
};
const Instructor = (props: instructorPros) => {
  return (
    <div>
      {props.instructorNameLastName.firstName}
      {props.instructorNameLastName.lastName}
    </div>
  );
};

export default Instructor;
