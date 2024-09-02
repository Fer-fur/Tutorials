import { Carousel } from "./components/Carousel"
import slides from "./carouselData.json"

export const ImgCarMain = () => {
  return (
    <div>
        <Carousel data={slides}/>
    </div>
  )
}
