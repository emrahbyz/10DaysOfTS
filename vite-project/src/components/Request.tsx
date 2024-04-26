type RequestProps = {
  status: "loading" | "succes" | "error";
};
const Request = (props: RequestProps) => {
  let message = "";
  if (props.status === "loading") {
    message = "yükleniyor";
  }
  if (props.status === "succes") {
    message = "başarılı";
  }
  if (props.status === "error") {
    message = "hata";
  }
  return <div> {message} </div>;
};

export default Request;
