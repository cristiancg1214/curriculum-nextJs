import { ExperienceHability } from "../experience_hability/ExperienceHability";
import { References } from "../references/References";

export const FinishContent = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-md-4 col-sx-4 ">
          <References />
        </div>
        <div className="col-md-8 col-sx-8 custom-column">
          <ExperienceHability />
        </div>
      </div>
    </div>
  );
};
