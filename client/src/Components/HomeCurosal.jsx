import { Carousel } from "flowbite-react";

export default function HomeCurosal() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-4">
      <Carousel slide={false}>
        <img src="public/banner01.jpg" alt="..." />
        <img src="public/banner02.jpg" alt="..." />
        <img src="public/banner03.jpg" alt="..." />
        <img src="public/banner04.jpg" alt="..." />
        <img src="public/banner05.jpg" alt="..." />
        <img src="public/banner06.jpg" alt="..." />
      </Carousel>
    </div>
  )
}
