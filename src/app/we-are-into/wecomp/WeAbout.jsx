
 
import React from 'react';
import WeFooter from './WeFooter';
// import WeNavbar from './WeNavbar';

const WeAbout = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'High-quality rice varieties sourced from the finest agricultural regions worldwide. We ensure premium quality through rigorous testing and sustainable farming partnerships.',
      features: ['Organic & Non-Organic', 'Multiple Varieties', 'Global Sourcing', 'Quality Certified']
    },
    {
      id: 2,
      name: 'Pure Sugar',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Refined sugar products for industrial and commercial applications. Our sugar meets international standards for purity and consistency.',
      features: ['Refined White Sugar', 'Raw Sugar', 'Industrial Grade', 'Food Grade Certified']
    },
    {
      id: 3,
      name: 'Fresh Seafood',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium quality fresh and frozen seafood products from sustainable fisheries. We maintain the cold chain to ensure freshness and quality.',
      features: ['Fresh & Frozen', 'Sustainable Sourcing', 'Cold Chain Maintained', 'Export Quality']
    },
    {
      id: 4,
      name: 'Industrial Chemicals',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Specialty chemicals and industrial compounds for various manufacturing applications. All products comply with international safety standards.',
      features: ['Safety Certified', 'Technical Support', 'Custom Solutions', 'Global Standards']
    },
    {
      id: 5,
      name: 'Maritime Shipping',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive shipping and logistics services connecting global markets. Our fleet ensures safe and timely delivery of commodities worldwide.',
      features: ['Global Network', 'Modern Fleet', 'Tracking Systems', 'Insurance Coverage']
    },
    {
      id: 6,
      name: 'Cosmetics Products',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium beauty and cosmetic products manufacturing with focus on quality ingredients and innovative formulations for global markets.',
      features: ['Natural Ingredients', 'Quality Control', 'Private Label', 'Regulatory Compliance']
    },
    {
      id: 7,
      name: 'Fine Tea Collection',
      image: 'https://images.unsplash.com/photo-1597318281675-0ebdb7a8aff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Exquisite tea varieties sourced from renowned tea gardens around the world. Each blend represents the finest traditions of tea cultivation.',
      features: ['Premium Blends', 'Direct Trade', 'Artisan Quality', 'Sustainable Sourcing']
    }
  ];

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '100+', label: 'Happy Clients' },
    { number: '100+', label: 'Tons Traded' }
  ];

  const strengths = [
    {
      icon: '🌍',
      title: 'One Partner For Global Shipments',
      description: 'Streamlined operations across all international markets with centralized coordination and local expertise.'
    },
    {
      icon: '📍',
      title: 'Local Market Knowledge In Every Region',
      description: 'Deep understanding of regional markets across Asia and Africa with on-ground presence and insights.'
    },
    {
      icon: '✅',
      title: 'Compliance You Can Trust',
      description: 'Expert navigation of international regulations and customs requirements ensuring smooth operations.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Regional Support',
      description: 'Personalized support teams in each region providing 24/7 assistance and local language support.'
    }
  ];

  const services = [
    {
      icon: '🚢',
      title: 'Export & Procurement',
      description: 'Global Sourcing With Verified Quality',
      details: 'Comprehensive export and import services with rigorous quality verification processes.'
    },
    {
      icon: '📋',
      title: 'Customs & Compliance',
      description: 'Smooth Clearance Everywhere',
      details: 'Expert customs clearance and regulatory compliance services across all international markets.'
    },
    {
      icon: '🚛',
      title: 'Freight & Logistics',
      description: 'Flexible Multi-Route Solutions',
      details: 'Optimized shipping routes and logistics solutions tailored to your specific requirements.'
    },
    {
      icon: '🎯',
      title: 'Market Access',
      description: 'On-The-Ground Support For Local Entry',
      details: 'Strategic market entry support with local partnerships and regulatory guidance.'
    },
    {
      icon: '🔍',
      title: 'Quality Checks',
      description: 'Sampling And Inspection Services',
      details: 'Comprehensive quality assurance through professional sampling and inspection services.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'We never compromise on quality. Every product undergoes rigorous testing and quality assurance before reaching our clients.'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'With operations spanning across 50+ countries, we connect producers and consumers worldwide through our extensive network.'
    },
    {
      icon: '🤝',
      title: 'Trust & Reliability',
      description: 'Built on decades of trust, we maintain long-term partnerships with suppliers and clients through transparent business practices.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We are committed to sustainable trading practices that benefit communities and protect the environment for future generations.'
    }
  ];

  const team = [
    {
      name: 'Pradeep Mishra',
      position: 'Chief Executive Officer',
      image: 'https://lh3.googleusercontent.com/ogw/AF2bZygnDN02Te97on5Wf-4sDfYUPxMX27fbGwu4tJIZbNoA2eI=s64-c-mo',
      experience: '2+ years in global trade'
    },
    {
      name: 'Ranjana Mishra',
      position: 'Head of Operations',
      image: 'https://lh3.googleusercontent.com/ogw/AF2bZygnDN02Te97on5Wf-4sDfYUPxMX27fbGwu4tJIZbNoA2eI=s64-c-mo',
      experience: '5+ years in logistics'
    },
    {
      name: 'Karan Pandey',
      position: 'Quality Assurance Director',
      image: 'https://lh3.googleusercontent.com/ogw/AF2bZygnDN02Te97on5Wf-4sDfYUPxMX27fbGwu4tJIZbNoA2eI=s64-c-mo',
      experience: '1+ years in quality control'
    },
    {
      name: 'Testing Text',
      position: 'Global Sales Manager',
      image: 'https://lh3.googleusercontent.com/ogw/AF2bZygnDN02Te97on5Wf-4sDfYUPxMX27fbGwu4tJIZbNoA2eI=s64-c-mo',
      experience: '1+ years in international sales'
    }
  ];

  return (

 <>
 {/* <WeNavbar /> */}
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            WeAbout <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">Stylish Him Exim</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your Global Trade Partner With Headquarters In Delhi And A Strong Regional Presence Across Asia And Africa
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-12">
              Stylish Him Exim Is A Global Trade Partner With Headquarters In Delhi And A Strong Regional Presence Across Asia And Africa. We Specialize In Helping Businesses Export And Import With Ease, Combining Centralized Operations With Local Knowledge.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium text-sm lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Strengths
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the global trading landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-6">{strength.icon}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{strength.title}</h3>
                <p className="text-gray-600 leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to streamline your global trade operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{service.description}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What We Provide
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio spans across multiple industries, ensuring we meet the varied needs of our global clientele with premium quality products.
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16">
            {products.map((product, index) => (
              <div key={product.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} bg-white p-8 rounded-2xl shadow-lg`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        Our Global Team
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our dedicated regional officers connect us with businesses worldwide, ensuring local expertise with global reach.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { name: "Omar Rahman", position: "Regional Sales Officer", location: "Dubai", flag: "https://flagcdn.com/w320/ae.png" },
        { name: "Nguyen Thanh Hai", position: "Regional Sales Officer", location: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
        { name: "Somchai Rattanakorn", position: "Regional Sales Officer", location: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
        { name: "Andry Rakoto", position: "Regional Sales Officer", location: "Madagascar", flag: "https://flagcdn.com/w320/mg.png" },
        { name: "Jean Mbemba", position: "Regional Sales Officer", location: "Congo", flag: "https://flagcdn.com/w320/cg.png" },
        { name: "David Mwangi", position: "Regional Sales Officer", location: "Kenya", flag: "https://flagcdn.com/w320/ke.png" },
        { name: "Anil Beeharry", position: "Regional Sales Officer", location: "Mauritius", flag: "https://flagcdn.com/w320/mu.png" },
      ].map((member, index) => (
        <div
          key={index}
          className="text-center group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative mb-6 w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            
            {/* Flag background */}
            <img
              src={member.flag}
            
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Profile image with slight opacity or blend */}
            <img
              src={`https://via.placeholder.com/150`} // Replace with actual team member images
         
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
          <p className="text-blue-600 font-medium mb-1">{member.position}</p>
          <p className="text-gray-600 text-sm">{member.location}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied clients worldwide who trust Stylish Him Exim for their global trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
      <WeFooter />
 </>
  );
};

export default WeAbout;
