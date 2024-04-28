import EventActions from "./components/EventActions";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import Request from "./components/Request";
import TodoTest from "./components/TodoTest";
import "./App.css";
function App() {
  const instructor = {
    firstName: "Emrah",
    lastName: "Beyazıt",
  };
  const instructorList = [
    {
      firstName: "Emrah",
      lastName: "Beyazıt",
    },
    {
      firstName: "Yüsra",
      lastName: "Budak",
    },
    {
      firstName: "Xyz",
      lastName: "Yzt",
    },
  ];

  return (
    <div className="test">
      {/* <Home name="Emrah" ProjectNumber={33} />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
      <Request status="succes" />
      <EventActions /> */}
      <TodoTest />
    </div>
  );
}

export default App;
