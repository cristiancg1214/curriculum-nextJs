import data from "../../../src/config.json";
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return (
    <>
      <h6 className="text-font redLabel">{props.value.name}</h6>
      <p style={{ fontSize: "1rem" }} className="text-font">
        {props.value.title}
      </p>
      <p style={{ fontSize: "1rem" }} className="text-font">
        Teléfono de contacto: {props.value.phone_contact}
      </p>
    </>
  );
}
export const References = () => {
  const listItems = data.references.map((element, index) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={index} value={element} />
  ));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-end",
        flexWrap: "wrap",
        alignItems: "flex-end",
      }}
    >
      <h5>REFERENCES</h5>
      {listItems}
    </div>
  );
};
