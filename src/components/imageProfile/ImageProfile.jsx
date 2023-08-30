import { Avatar } from "@mui/material";
import data from "../../../src/config.json";

export const ImageProfile = () => {
  return (
    <div className="column-container">
      <Avatar
        alt={data.name}
        sx={{ width: 130, height: 130, alignSelf: "flex-end" }}
        src="/images/profile.jpg"
      />
    </div>
  );
};
