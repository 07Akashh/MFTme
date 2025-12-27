const FeaturesPage = () => {
  return (
    <div className="relative pt-[100px] pb-20">
      {/* Background Gradient Flares - Multiple for depth */}
      <div className="absolute top-[200px] left-[100px] w-[654px] h-[820px] gradient-bg glow-blur-130 rounded-full opacity-75 pointer-events-none -z-10" />
      <div className="absolute top-[600px] right-[120px] w-[580px] h-[700px] gradient-bg glow-blur-130 rounded-full opacity-65 pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <h1 className="heading-hero mb-8 text-center">Platform Features</h1>
        <p className="body-text text-center max-w-3xl mx-auto">
          Discover the powerful features that make NFTme the premier destination
          for digital art collectors and creators.
        </p>
      </section>

      {/* Main Features Grid */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <h2 className="heading-section mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Secure Blockchain",
              description:
                "All transactions are secured on the Ethereum blockchain with smart contract verification.",
              icon: "🔒",
            },
            {
              title: "Low Fees",
              description:
                "Industry-leading low transaction fees to maximize your profits.",
              icon: "💰",
            },
            {
              title: "Easy Minting",
              description:
                "Create and mint your NFTs in just a few clicks with our intuitive interface.",
              icon: "⚡",
            },
            {
              title: "Live Auctions",
              description:
                "Participate in real-time auctions and bid on exclusive digital artworks.",
              icon: "🎯",
            },
            {
              title: "Creator Royalties",
              description:
                "Artists earn royalties on every secondary sale automatically.",
              icon: "👨‍🎨",
            },
            {
              title: "Community Driven",
              description:
                "Join a vibrant community of artists and collectors from around the world.",
              icon: "🌍",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="card-surface p-8 hover:transform hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-base text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Creators Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-medium mb-6">For Creators</h2>
            <ul className="space-y-4">
              {[
                "Upload and mint your artwork in minutes",
                "Set your own prices and auction parameters",
                "Earn royalties on all secondary sales",
                "Build your collector community",
                "Access detailed analytics and insights",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#DD24E1] text-xl">✓</span>
                  <span className="text-base text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="nft-card h-[400px] rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
              alt="For Creators"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* For Collectors Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="nft-card h-[400px] rounded-[20px] order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&q=80"
              alt="For Collectors"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="heading-medium mb-6">For Collectors</h2>
            <ul className="space-y-4">
              {[
                "Discover unique digital artworks",
                "Verify authenticity on the blockchain",
                "Participate in exclusive auctions",
                "Build your digital art portfolio",
                "Connect with your favorite artists",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#DD24E1] text-xl">✓</span>
                  <span className="text-base text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="card-surface p-12 text-center">
          <h2 className="heading-medium mb-6">Ready to Get Started?</h2>
          <p className="body-text mb-8 max-w-2xl mx-auto">
            Join thousands of artists and collectors who are already part of the
            NFTme community.
          </p>
          <button className="btn-primary">Explore Marketplace</button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
