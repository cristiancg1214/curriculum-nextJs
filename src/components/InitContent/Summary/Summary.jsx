import { Divider } from "@mui/material";
import data from "../../../../src/config.json";
export const Summary = () => {
  return (
    <div style={{marginLeft:'20px'}}>
      <h5>RESUMEN</h5>
      <p className="text-font" style={{ textAlign: "justify" }}>
        {data.summary}
      </p>
      <Divider style={{background:'black',marginTop:'5%'}}/>
    </div>
  );
};
