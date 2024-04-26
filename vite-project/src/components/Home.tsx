type DateComing = {
  name: string;
  ProjectNumber: number;
};

function Home(props: DateComing) {
  return (
    <div>
      {props.name} Proje sayısı {props.ProjectNumber}
    </div>
  );
}

export default Home;
