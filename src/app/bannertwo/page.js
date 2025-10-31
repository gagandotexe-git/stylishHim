import React from 'react';

const BannerGridtwo = () => {
  const banners = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dkornixrz/image/upload/v1761924429/banners/qizmalua6oekqbfgapt3.jpg",
      calloutText: "Upto 55% Off",
      calloutSubtext: "10% off On ₹699*"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dkornixrz/image/upload/v1761926953/banners/nkc1skois0k8thux3ny8.jpg",
      calloutText: "Your gift Elixir",
      calloutSubtext: "On all orders"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dkornixrz/image/upload/v1761924573/banners/ukvbzy2jo1gc2fazcn4z.jpg",
      calloutText: "Upto 35% Off",
      calloutSubtext: "Clinically Proven"
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dkornixrz/image/upload/v1761925726/banners/gkchfrzlwbdnf4oaflsw.jpg",
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
    <div className="w-full bg-gradient-to-b from-pink-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {banners.map((banner) => (
            <div 
              key={banner.id} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={banner.image}
                    alt={`Banner ${banner.id}`}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-1">{banner.calloutText}</h3>
                  <p className="text-sm opacity-90">{banner.calloutSubtext}</p>
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