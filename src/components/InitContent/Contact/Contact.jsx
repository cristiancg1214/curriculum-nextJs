import data from "../../../../src/config.json";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Divider } from "@mui/material";
export const Contact = () => {
  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-end",
        flexWrap: "wrap",
        alignItems: "flex-end",
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h5>CONTACTO</h5>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            marginRight: "2%",
          }}
        >
          <h6 className="text-font" style={{ margin: "0 auto 0 0" }}>
            {data.contact.mail}
          </h6>
        </div>
        <div style={{ alignSelf: "flex-end",marginLeft:'5px' }}>
          <EmailIcon style={{ color: "red" }} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row",marginTop:'10%' }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            marginRight: "5px",
          }}
        >
          <h6 className="text-font" style={{ margin: "0 auto 0 0" }}>
            {data.contact.phone}
          </h6>
        </div>
        <div style={{ alignSelf: "flex-end",marginLeft:'5px' }}>
          <PhoneIcon style={{ color: "red" }} />
        </div>
      </div>
      {/* <div style={{ display: "flex", flexDirection: "row",marginTop:'5%' }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            marginRight: "5px",
          }}
        >
          <a href={data.contact.briefcase}  className="text-font" style={{ margin: "0 auto 0 0",fontSize:'13px', color:'black' }}>
            {data.contact.briefcase}
          </a>
        </div>
        <div style={{ alignSelf: "flex-end",marginLeft:'5px' }}>
          <LanguageIcon style={{ color: "red" }} />
        </div>
      </div> */}
      <div style={{ display: "flex", flexDirection: "row",marginTop:'10%', marginBottom:'13px' }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            marginRight: "5px",
          }}
        >
          <h6 className="text-font" style={{ margin: "0 auto 0 0" }}>
            {data.contact.location}
          </h6>
        </div>
        <div style={{ alignSelf: "flex-end",marginLeft:'5px' }}>
          <LocationOnIcon style={{ color: "red" }} />
        </div>
      </div>
      
    </div>
    {/* <Divider style={{background:'black',marginTop:'5%'}}/> */}
    </>
  );
};
