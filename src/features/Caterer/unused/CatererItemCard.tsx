import type { Caterer } from "./catererTypes";
import CatererItemCardImage from "./CatererItemCardImage";
import CatererItemCardBody from "./CatererItemCardBody";
import CatererItemCardFooter from "./CatererItemCardFooter";

interface CatererItemCardProps {
  caterer: Caterer;
  image: string;
}

const CatererItemCard: React.FC<CatererItemCardProps> = ({
  caterer,
  image,
}) => {
  return (
    <div className="caterer-card-modern caterer-grid-item">
      <CatererItemCardImage
        image={image}
        catererName={caterer.name}
        rating={caterer.rating}
        isSponsored={caterer.isSponsored}
      />
      <CatererItemCardBody
        name={caterer.name}
        location={caterer.location}
        capacity={caterer.capacity}
        amenities={caterer.amenities}
      />
      <CatererItemCardFooter
        price={caterer.price.starting}
        onViewDetails={() => alert("Coming soon")}
      />
    </div>
  );
};

export default CatererItemCard;
