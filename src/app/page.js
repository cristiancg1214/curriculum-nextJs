

import { InitComponent } from "@/components/InitComponent";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  
  return (
    <div style={{ marginTop: "3%" }}>
      <div className="container" style={{ width: "80%" }}>
        <InitComponent/>
      </div>
    </div>
  );
}
