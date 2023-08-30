import data from "../../../src/config.json";
import Divider from '@mui/material/Divider';
export const NameAndCareer = () => {
  return (
    <div style={{marginLeft:'20px'}}>
      <h3 className="redHeader">{data.name.toUpperCase()}</h3>
      <h4 className="career">{data.career.toUpperCase()}</h4>
      
      <Divider style={{background:'black',marginTop:'5%'}}/>
      
    </div>
  );
};
