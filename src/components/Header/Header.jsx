import { ImageProfile } from "../imageProfile/ImageProfile"
import { NameAndCareer } from "../infoUser/NameAndCareer"

export const Header=()=>{
    return(
        <div className="row">
          <div className="col-4  ">
            <ImageProfile/>
          </div>
          <div className="col-8 ">
            <NameAndCareer />
          </div>
        </div>
    )
}