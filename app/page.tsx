import Footer from "./footer";
import Description from "./sections/Description";
import Dressing from "./sections/Dressing";
import Home from "./sections/Home";
import Itinerary from "./sections/Itinerary";
import Location from "./sections/Location";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 overflow-x-hidden bg-background pt-24 md:pt-32 items-center">
      <Home />
      <Description />
      <Itinerary />
      <Dressing />
      <Location />
      <Footer />
    </div>
  );
}
