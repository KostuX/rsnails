import config_all from "../../config/config"
export default function imageFrame(props){
     const config = config_all();
     const img = props.img
    
    return(
    <div>
    <div className="preview-img">
        <img src = {img.src} alt={img.alt}/>
    </div>
    
    <div className="container">
        <div className="gallery"></div>
    </div>
    </div>)
}