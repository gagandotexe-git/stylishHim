// "use client";
// import React from 'react';
// import { Truck, RefreshCw, BadgeCheck, Tag, Instagram, Facebook, Youtube, Twitter, Music } from 'lucide-react';

// export default function FeaturesBanner() {
//   const features = [
//     { icon: Truck, title: 'FREE SHIPPING', description: 'On Orders Above ₹299' },
//     { icon: RefreshCw, title: 'EASY RETURNS', description: '15-Day Return Policy' },
//     { icon: BadgeCheck, title: '100% AUTHENTIC', description: 'Products Sourced Directly' },
//     { icon: Tag, title: '1900+ BRANDS', description: '1.2 Lakh+ Products' },
//   ];

//   const socialLinks = [
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Youtube, href: '#', label: 'YouTube' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Music, href: '#', label: 'Pinterest' },
//   ];

//   return (
//     <section className="w-full bg-white py-4 px-4">
//       <div className="max-w-7xl mx-auto flex flex-col gap-6">

//         {/* Features Row */}
//         <div className="flex flex-wrap justify-center md:justify-between gap-6">
//           {features.map((f, i) => (
//             <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-3 min-w-[140px]">
//               <div className="bg-[#AD9682] rounded-full p-3 flex-shrink-0">
//                 <f.icon className="w-6 h-6 md:w-6 md:h-6 text-white stroke-[2.5]" />
//               </div>
//               <div className="text-center md:text-left">
//                 <h3 className="text-black font-bold text-sm">{f.title}</h3>
//                 <p className="text-gray-600 text-xs">{f.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Social Links Row */}
//         <div className="flex flex-col items-center md:flex-row md:justify-center gap-4">
//           <p className="text-black font-medium text-sm whitespace-nowrap text-center md:text-left">
//             Show us some love ❤️ on social media
//           </p>
//           <div className="flex gap-3">
//             {socialLinks.map((s, i) => (
//               <a key={i} href={s.href} aria-label={s.label} className="bg-black rounded-full p-2.5 hover:scale-110 transition-transform">
//                 <s.icon className="w-5 h-5 text-white" />
//               </a>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";
import React from 'react';
import { Truck, RefreshCw, BadgeCheck, Tag, Instagram, Facebook, Youtube, Twitter, Music } from 'lucide-react';

export default function FeaturesBanner() {
  const features = [
    { icon: Truck, title: 'FREE SHIPPING', description: 'On Orders Above ₹299' },
    { icon: RefreshCw, title: 'EASY RETURNS', description: '15-Day Return Policy' },
    { icon: BadgeCheck, title: '100% AUTHENTIC', description: 'Products Sourced Directly' },
    { icon: Tag, title: '1900+ BRANDS', description: '1.2 Lakh+ Products' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Music, href: '#', label: 'Pinterest' },
  ];

  return (
    <section className="w-full bg-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        {/* Features Row - Scrollable on mobile, static on desktop */}
        <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
          <div className="flex md:flex-wrap md:justify-between gap-6 min-w-max md:min-w-0">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-3 min-w-[180px] md:min-w-[140px] flex-shrink-0 md:flex-shrink">
                <div className="bg-[#AD9682] rounded-full p-3 flex-shrink-0">
                  <f.icon className="w-6 h-6 md:w-6 md:h-6 text-white stroke-[2.5]" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-black font-bold text-sm">{f.title}</h3>
                  <p className="text-gray-600 text-xs">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-4">
          <p className="text-black font-medium text-sm whitespace-nowrap text-center md:text-left">
            Show us some love ❤️ on social media
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} aria-label={s.label} className="bg-black rounded-full p-2.5 hover:scale-110 transition-transform">
                <s.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}