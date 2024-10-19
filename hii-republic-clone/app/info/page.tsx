"use client"; // Mark this as a client component


interface InfoComponentProps {
  name: string | null;
  address: string | null;
}

const InfoComponent: React.FC<InfoComponentProps> = ({ name, address }) => {
  // Console log to track the location data
  console.log('Location Name:', name);
  console.log('Location Address:', address);

  return (
    <div className="py-20 bg-black text-white">
      <div className="py-20 container mx-auto px-4">
        <div className="flex justify-between">
          <div className="w-1/2">
            {name ? (
              <>
                <h1 className="text-4xl font-bold mb-2">
                  <span className="border border-white px-1">HR</span> {name}
                </h1>
                <p className="mb-4 text-sm">
                  Welcome to <span className="text-orange-500 font-semibold">{name}</span>. We are thrilled to have you!
                </p>
                <p className="text-xl mb-2">
                  Memberships from <span className="text-orange-500">$34.90 p/w</span>
                </p>
                <p className="text-lg mb-4">
                  (Normally <span className="line-through">39.90</span>)
                </p>
                <div className="flex space-x-4">
                  <button className="bg-orange-500 text-white px-6 py-2 rounded">VIRTUAL TOUR</button>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded">JOIN NOW</button>
                </div>
                <div className="mt-8 flex space-x-6 text-lg font-semibold">
                  <span>CLASSES</span>
                  <span>FEATURES</span>
                  <span>NEARBY STUDIOS</span>
                </div>
              </>
            ) : (
              <p className="text-xl">Location not found.</p>
            )}
          </div>
          <div className="w-1/2 text-right">
            {address ? (
              <>
                <p className="mb-1"><i className="fas fa-map-marker-alt"></i> <span className="font-semibold">{address}</span></p>
                <p className="text-orange-500 text-xl mb-4">STUDIO OPEN 24/7</p>
                {/* Other details */}
              </>
            ) : (
              <p className="text-xl">Address not available.</p>
            )}
          </div>
        </div>
        <div className="mt-8 border border-white p-6">
          <h2 className="text-2xl text-orange-500 font-bold mb-2">GET A 7 DAY FREE TRIAL!</h2>
          <p className="mb-4">Register your details below and we'll be in touch!</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Given Names" className="bg-white text-black px-3 py-2 w-full" />
            <input type="text" placeholder="Last Name" className="bg-white text-black px-3 py-2 w-full" />
            <input type="email" placeholder="Email Address" className="bg-white text-black px-3 py-2 w-full" />
            <input type="tel" placeholder="Phone Number" className="bg-white text-black px-3 py-2 w-full" />
          </div>
          <div className="flex items-start mb-4">
            <input type="checkbox" className="mt-1 mr-2" />
            <p className="text-sm">
              I acknowledge that a copy of the Hiit Republic{' '}
              <span className="text-blue-500">Privacy Policy</span> has been made available to me and that I agree that Hiit Republic can use my personal information for the purposes of marketing and promotion.
            </p>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded">REGISTER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
