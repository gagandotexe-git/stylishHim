import React from 'react';

const BannerGridtwo = () => {
  const banners = [
    {
      id: 1,
      image: "https://images-static.nykaa.com/creatives/d72c53e6-0951-4bd4-82c6-874c09a98c1c/default.jpg?tr=cm-pad_resize,w-600",
      calloutText: "Upto 55% Off",
      calloutSubtext: "10% off On ₹699*"
    },
    {
      id: 2,
      image: "https://images-static.nykaa.com/creatives/2af6bcd4-fa32-4b2e-a582-8b1e5bdf4e57/default.jpg?tr=cm-pad_resize,w-600",
      calloutText: "Your gift Elixir",
      calloutSubtext: "On all orders"
    },
    {
      id: 3,
      image: "https://images-static.nykaa.com/creatives/26cc63cc-b864-41a6-af04-032fa7009f90/default.jpg?tr=cm-pad_resize,w-600",
      calloutText: "Upto 35% Off",
      calloutSubtext: "Clinically Proven"
    },
    {
      id: 4,
      image: "https://images-static.nykaa.com/creatives/c936362a-6bdd-4112-9530-068716b54e8e/default.jpg?tr=cm-pad_resize,w-600",
      calloutText: "Up To 25% Off",
      calloutSubtext: "Exciting Gifts on ₹2500+"
    },
    {
      id: 5,
      image: "https://images-static.nykaa.com/creatives/073c3065-3140-4b38-9431-e1d22e639e77/default.jpg?tr=cm-pad_resize,w-600",
      calloutText: "Flat 10% Off",
      calloutSubtext: "On 6000: Free AFF Pouch!"
    },
    {
      id: 6,
      image: "https://images-static.nykaa.com/creatives/d841138d-8aac-4e57-9977-ba2e8b0bff17/default.jpg?tr=cm-pad_resize,w-600",
      calloutText: "Up To 35% Off",
      calloutSubtext: "On Trending Makeup!"
    }, 
  ];

  return (
    <div className="w-full bg-white">
      <div className="w-full">
        <div className="flex flex-col">
          {banners.map((banner) => (
            <div key={banner.id} className="w-full">
              <div className="block w-full cursor-pointer">
                <div className="relative w-full overflow-hidden bg-white">
                  <img
                    src={banner.image}
                    alt={`Banner ${banner.id}`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerGridtwo;