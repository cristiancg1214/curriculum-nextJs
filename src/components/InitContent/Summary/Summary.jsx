import { Divider } from "@mui/material";
import data from "../../../../src/config.json";
export const Summary = () => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h5>RESUMEN</h5>
      <p className="text-font" style={{ textAlign: "justify" }}>
        {data.summary}
      </p>
      <a
      className="text-font"
        style={{ textDecoration: "underline", color: "black" }}
        href="https://revistas.itm.edu.co/index.php/trilogia/article/view/1235"
        target="_blank"
      >
        Sitio
      </a>

      {/* <Divider style={{ background: "black", marginTop: "5%" }} /> */}
    </div>
  );
};
