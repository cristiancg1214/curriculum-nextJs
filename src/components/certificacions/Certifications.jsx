import data from "../../../src/config.json";
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return (
    <li>
      <a
        className="text-font"
        style={{ textDecoration: "underline", color: "black" }}
        href={props.value.certificaction_link}
        target="_blank"
      >
        {props.value.name}
      </a>
    </li>
  );
}
export const Certifications = () => {
  const listItems = data.certifications.map((element, index) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={index} value={element} />
  ));
  return (
    <div style={{ marginLeft: "20px" }}>
      <h5>CERTIFICACIONES</h5>
      <ul>{listItems}</ul>
    </div>
  );
};
