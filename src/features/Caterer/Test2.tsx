import './styles/test.css'
import type { Caterer } from './catererTypes';
import { useNavigate } from 'react-router-dom';
export const Test2: React.FC<{ caterer: Caterer }> = ({ caterer }) => {
    const navigate = useNavigate();
    return (
        <div className="caterercard">
            <div className="container">
                <img className="imagewithfallback-icon" alt="" src={ 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'} />
                <div className="badge">
                    <div className="sponsored">{caterer?.isSponsored ? 'SPONSORED' : ''}</div>
                </div>
                <div className="caterercard-container">
                    <img className="icon" alt="" />
                    <div className="text">
                        <div className="div">{caterer?.rating ?? 4.8}</div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="heading-3">
                    <div className="royal-feast-catering">{caterer?.name || 'Royal Feast Catering'}</div>
                </div>
                <div className="container3">
                    <img className="caterercard-icon" alt="" src ='../../../src/assets/location.svg' />
                    <div className="karachi-sindh">{caterer?.location || 'Karachi, Sindh'}</div>
                </div>
                <div className="container4">../../../src/assets/person.svg
                    <img className="caterercard-icon" alt="" src ='' />
                    <div className="karachi-sindh">{caterer?.capacity ? `${caterer.capacity.min}-${caterer.capacity.max} guests` : '100-500 guests'}</div>
                </div>
                <div className="container5">
                    <div className="caterercard-badge">
                        <div className="sponsored">{caterer?.amenities?.[0] || 'Outdoor Catering'}</div>
                    </div>
                    <div className="badge2">
                        <div className="sponsored">{caterer?.amenities?.[1] || 'Halal Guarantee'}</div>
                    </div>
                    <div className="badge3">
                        <div className="sponsored">{caterer?.amenities?.[2] || 'Live Cooking'}</div>
                    </div>
                </div>
                <div className="container6">
                    <div className="container7">
                        <div className="caterercard-text">
                            <div className="starting-from">Starting from</div>
                        </div>
                        <div className="container8">
                            <div className="pkr-3500">PKR {caterer?.price?.starting?.toLocaleString() || '3,500'}</div>
                        </div>
                    </div>
                    <div className="button">
                        <div className="view-details" onClick={() => navigate('/caterer-detail')}>View Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

