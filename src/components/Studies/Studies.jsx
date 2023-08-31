import data from "../../../src/config.json";
export const Studies=()=>{
    return(
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-end",
              flexWrap: "wrap",
              alignItems: "flex-end",
            }}
          >
            <h5>ESTUDIOS</h5>
            <h6 className="text-font redLabel">{data.studies.university}</h6>
            <p style={{ fontSize: "1rem" }} className="text-font">
              {data.studies.title}
            </p>
          </div>
    )
}