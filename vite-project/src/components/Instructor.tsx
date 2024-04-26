type instructorPros = {
  instructorNameLastName: {
    firstName: string;
    lastName: string;
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
