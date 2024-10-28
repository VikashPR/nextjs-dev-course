import Hero from "@/components/hero";
import scaleImg from "../../../public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      <Hero
        imgData={scaleImg}
        imgAlt="Welding"
        title="Super high reliability hosting"
      />
    </div>
  );
}
