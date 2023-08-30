import { Header } from "@/components/Header/Header";
import { InitContent } from "@/components/InitContent/InitContent";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div style={{ marginTop: "3%" }}>
      <div className="container" style={{width:"70%"}}>
        <Header />
        <InitContent/>
      </div>
    </div>
  );
}
