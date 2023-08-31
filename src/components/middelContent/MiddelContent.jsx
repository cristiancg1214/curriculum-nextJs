import { Studies } from "../Studies/Studies";
import { Certifications } from "../certificacions/Certifications";

export const MiddelContent = () => {
  return (
    <div style={{ marginTop: "3%" }}>
      <div className="row">
        <div className="col-md-4 col-sx-4 ">
          <Studies />
        </div>
        <div className="col-md-8 col-sx-8 custom-column">
          <Certifications/>
        </div>
      </div>
    </div>
  );
};
