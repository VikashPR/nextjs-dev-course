import Hero from "@/components/hero";
import scaleImg from "../../../public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      <Hero
        imgData={scaleImg}
        imgAlt="Steel factory"
        title="Scale your application to infinity"
      />
    </div>
  );
}
