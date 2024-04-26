type instructorListType = {
  instructorNameLastNameList: {
    firstName: string;
    lastName: string;
  }[];
};
const InstructorList = (props: instructorListType) => {
  return (
    <div>
      {" "}
      {props.instructorNameLastNameList.map((item, key) => {
        return (
          <h3 key={key}>
            {item.firstName}
            {item.lastName}
          </h3>
        );
      })}{" "}
    </div>
  );
};

export default InstructorList;
