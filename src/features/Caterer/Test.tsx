// Accept a single caterer object prop
import type { Caterer } from './catererTypes';
import './styles/test.css'

interface TestProps {
	caterer: Caterer;
}

const Test: React.FC<TestProps> = ({ caterer }) => {
    console.log('Test: caterer', caterer);
		if (!caterer) {
			return <div className="container"><div className="caterercard">Loading...</div></div>;
		}
		return (
    

			<div className="container">
				<div className="caterercard">
					<div className="container2">
						{/* <img className="imagewithfallback-icon" alt="" src={caterer.images?.[0]?.url || 'https://images.unsplash.com/photo-1750836054429-4cfdf40b32f1?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} /> */}
						<div className="badge">
							<div className="sponsored">SPONSORED</div>
						</div>
						<div className="container3">
							<img className="icon" alt="" />
							<div className="text">
								{/* <div className="div">{caterer.rating ?? '-'}</div> */}
								<div className="div">BBBB</div>
							</div>
				
                
                		</div>
				
                	</div>
                
					<div className="container4">
						<div className="heading-3">
							<div className="royal-feast-catering">AAAA</div>
							{/* <div className="royal-feast-catering">{caterer.name ?? 'AAAA-'}</div> */}
						</div>
						<div className="container5">
							<img className="icon2" alt="" />
							<div className="karachi-sindh">{caterer.location ?? '-'}</div>
						</div>
						<div className="container6">
							<img className="icon2" alt="" />
							<div className="karachi-sindh">{caterer.capacity?.min ?? '-'}-{caterer.capacity?.max ?? '-'} guests</div>
						</div>
						<div className="container7">
							{Array.isArray(caterer.amenities) && caterer.amenities.length > 0 ? (
								caterer.amenities.map((a, i) => (
									<div key={i} className={`badge${i+2}`}>
										<div className="sponsored">{a}</div>
									</div>
								))
							) : (
								<div className="sponsored">No amenities</div>
							)}
						</div>
						<div className="container8">
							<div className="container9">
								<div className="text2">
									<div className="starting-from">Starting from</div>
								</div>
								<div className="container10">
									<div className="pkr-3500">PKR {caterer.price?.starting ? caterer.price.starting.toLocaleString() : '-'}</div>
								</div>
							</div>
							<div className="button">
								<div className="view-details">View Details</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Test;