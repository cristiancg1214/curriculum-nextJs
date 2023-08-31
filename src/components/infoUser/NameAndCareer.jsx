import data from "../../../src/config.json";
export const NameAndCareer = () => {
  return (
    <div style={{marginLeft:'20px'}}>
      <p className="nombre">{data.name.toUpperCase()}</p>
      <p className="titulo">{data.career.toUpperCase()}</p> 
    </div>
  );
};
