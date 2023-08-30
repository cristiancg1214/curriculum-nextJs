import { Contact } from "./Contact/Contact";
import { Summary } from "./Summary/Summary";

export const InitContent = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-4">
          <Contact />
        </div>
        <div className="col-8">
          <Summary />
        </div>
      </div>
    </div>
  );
};
