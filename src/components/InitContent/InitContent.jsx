import { Contact } from "./Contact/Contact";
import { Summary } from "./Summary/Summary";

export const InitContent = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-md-4 col-sx-4 ">
          
            <Contact />
  
        </div>
        <div className="col-md-8 col-sx-8 custom-column">
          
            <Summary />
     
        </div>
      </div>
    </div>
  );
};
