import React from 'react';

const BannerGridtwo = () => {
  const banners = [
    {
      id: 1,
      image: "https://images-static.nykaa.com/creatives/d72c53e6-0951-4bd4-82c6-874c09a98c1c/default.jpg?tr=cm-pad_resize,w-600",
      link: "https://www.nykaa.com/dove-hair-collection/c/23641",
      calloutText: "Upto 55% Off",
      calloutSubtext: "10% off On ₹699*"
    },
    {
      id: 2,
      image: "https://images-static.nykaa.com/creatives/2af6bcd4-fa32-4b2e-a582-8b1e5bdf4e57/default.jpg?tr=cm-pad_resize,w-600",
      link: "https://www.nykaa.com/brands/c/1221",
      calloutText: "Your gift Elixir",
      calloutSubtext: "On all orders"
    },
    {
      id: 3,
      image: "https://images-static.nykaa.com/creatives/26cc63cc-b864-41a6-af04-032fa7009f90/default.jpg?tr=cm-pad_resize,w-600",
      link: "https://www.nykaa.com/brands/c/597",
      calloutText: "Upto 35% Off",
      calloutSubtext: "Clinically Proven"
    },
    {
      id: 4,
      image: "https://images-static.nykaa.com/creatives/c936362a-6bdd-4112-9530-068716b54e8e/default.jpg?tr=cm-pad_resize,w-600",
      link: "https://www.nykaa.com/brands/c/3899",
      calloutText: "Up To 25% Off",
      calloutSubtext: "Exciting Gifts on ₹2500+"
    },
    {
      id: 5,
      image: "https://images-static.nykaa.com/creatives/073c3065-3140-4b38-9431-e1d22e639e77/default.jpg?tr=cm-pad_resize,w-600",
      link: "https://www.nykaa.com/brands/c/15967",
      calloutText: "Flat 10% Off",
      calloutSubtext: "On 6000: Free AFF Pouch!"
    },
    {
      id: 6,
      image: "https://images-static.nykaa.com/creatives/d841138d-8aac-4e57-9977-ba2e8b0bff17/default.jpg?tr=cm-pad_resize,w-600",
      link: "https://www.nykaa.com/brands/c/1937",
      calloutText: "Up To 35% Off",
      calloutSubtext: "On Trending Makeup!"
    },
    {
      id: 7,
      image: "https://via.placeholder.com/600x800/f3f4f5/666666?text=Banner+7",
      link: "#",
      calloutText: "Upto 30% Off",
      calloutSubtext: "24H Volume, Zero Smudge"
    },
    {
      id: 8,
      image: "https://via.placeholder.com/600x800/f3f4f5/666666?text=Banner+8",
      link: "#",
      calloutText: "Up To 25% Off",
      calloutSubtext: "On Entire Range!"
    }
  ];

  return (
    <div className="w-full  bg-[#fff]">
      <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4 py-4 sm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {banners.map((banner) => (
            <div key={banner.id} className="w-full">
              <a 
                href={banner.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full overflow-hidden rounded-md sm:rounded-lg bg-white group">
                  {/* Image Container with Fixed Aspect Ratio */}
                  <div className="relative w-full" style={{ paddingBottom: '133.33%' }}>
                    <img
                      src={banner.image}
                      alt={`Banner ${banner.id}`}
                      className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
               
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerGridtwo;