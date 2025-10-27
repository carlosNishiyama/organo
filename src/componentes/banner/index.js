import "./banner.css"
import imagem from "../../imagens/banner.png"

const Banner = () => {
    return(
    <div className="banner">
        <img src={imagem} alt="Banner" />
    </div>)
 }
export default Banner;