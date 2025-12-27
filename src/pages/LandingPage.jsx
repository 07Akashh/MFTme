const LandingPage = () => {
  // Stats data
  const stats = [
    { value: "32k+", label: "Artwork" },
    { value: "20k+", label: "Auctions" },
    { value: "10k+", label: "Artists" },
  ];

  // Trending artworks data
  const trendingArtworks = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&q=80",
      artist: "Sebastian",
      title: "Golden Flower",
      price: "2.3 ETH",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
      artist: "Ferhat Deniz",
      title: "Golden Flower",
      price: "2.3 ETH",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=600&q=80",
      artist: "Javier Miranda",
      title: "Golden Flower",
      price: "2.3 ETH",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&q=80",
      artist: "Polina Kondrashova",
      title: "Golden Flower",
      price: "2.3 ETH",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80",
      artist: "Erick Butler",
      title: "Golden Flower",
      price: "2.3 ETH",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600&q=80",
      artist: "Milad Fakurian",
      title: "Golden Flower",
      price: "2.3 ETH",
    },
  ];

  // Popular artists
  const artists = [
    {
      id: 1,
      name: "Ferhat Deniz",
      avatar: "https://i.pravatar.cc/160?img=1",
    },
    {
      id: 2,
      name: "Sebastian",
      avatar: "https://i.pravatar.cc/160?img=12",
    },
    {
      id: 3,
      name: "Javier Miranda",
      avatar: "https://i.pravatar.cc/160?img=14",
    },
    {
      id: 4,
      name: "Erick Butler",
      avatar: "https://i.pravatar.cc/160?img=33",
    },
  ];

  return (
    <div className=" relative">
      <section className="container mx-auto pt-[70px] pb-[100px] relative z-10">
        <div className="absolute top-[127px] right-[100px] w-[654px] h-[820px] gradient-bg glow-blur-130 rounded-full opacity-100 pointer-events-none -z-10" />
        <div
          className="absolute top-[19px] left-[52px] w-[655.78px] h-[511.77px] bg-[rgba(202,34,227,0.22)] glow-blur-225 rounded-full pointer-events-none -z-10"
          style={{ transform: "rotate(-0.25deg)" }}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-hero mb-6 lg:mb-8">
              Discover Rare Collections Of Art & NFT's
            </h1>
            <p className="body-text mb-10 text-[18px] lg:mb-12 max-w-[379px]">
              Create, Explore, & Collect Digital Art NFTs
            </p>
            <button className="btn-primary mb-16 lg:mb-[219px]">Explore</button>

            {/* Stats */}
            <div className="flex  flex-wrap gap-8 lg:gap-[80px] z-100">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="stat-number mb-2">{stat.value}</div>
                  <div className="text-base font-normal leading-5 tracking-[0.2px] text-white">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div
              className="relative w-[376.93px] h-[566.25px] ml-auto"
              style={{ transform: "rotate(-15deg)" }}
            >
              <div className="absolute w-full h-[418.53px] top-0 left-0 overflow-hidden border-[2.55px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&q=80"
                  alt="NFT Artwork"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[147.72px] glass-card p-4 border-[2.55px] border-white/10">
                <div className="flex justify-between items-start mb-4 px-2">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/40?img=5"
                      alt="Creator"
                      className="w-[37.5px] h-[37.5px] rounded-full"
                    />
                    <div>
                      <div className="text-[11.32px] font-semibold leading-[17px] text-white">
                        Laura
                      </div>
                      <div className="text-[11.32px] font-medium leading-[17px] text-[#D7D7D7]">
                        0.21 Weth
                      </div>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="text-[11.89px] font-medium leading-[17px] text-white mb-1">
                      Remaining Time
                    </div>
                    <div className="text-[15.28px] font-semibold leading-[17px] text-white">
                      18h : 57m : 14s
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[11.89px] font-medium leading-[17px] text-white mb-1">
                      Current Bid
                    </div>
                    <div className="text-[16px] font-semibold leading-[17px] text-white">
                      2.8 ETH
                    </div>
                  </div>

                  <button className="bg-white rounded-[2.4px] px-4 py-2 text-[13.58px] font-medium uppercase tracking-[0.12px] text-black">
                    Place A Bid
                  </button>
                </div>
              </div>
            </div>

            {/* Duplicate Card (Straight) */}
            <div className="absolute top-0 right-0 w-[376.93px] h-[566.25px]">
              <div className="w-full h-[418.53px] overflow-hidden border-[2.55px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&q=80"
                  alt="NFT Artwork"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[147.72px] glass-card p-4 border-[2.55px] border-white/10">
                <div className="flex justify-between items-start mb-4 px-2">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/40?img=5"
                      alt="Creator"
                      className="w-[37.5px] h-[37.5px] rounded-full"
                    />
                    <div>
                      <div className="text-[11.32px] font-semibold leading-[17px] text-white">
                        Laura
                      </div>
                      <div className="text-[11.32px] font-medium leading-[17px] text-[#D7D7D7]">
                        0.21 Weth
                      </div>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="text-[11.89px] font-medium leading-[17px] text-white mb-1">
                      Remaining Time
                    </div>
                    <div className="text-[15.28px] font-semibold leading-[17px] text-white">
                      18h : 57m : 14s
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[11.89px] font-medium leading-[17px] text-white mb-1">
                      Current Bid
                    </div>
                    <div className="text-[16px] font-semibold leading-[17px] text-white">
                      2.8 ETH
                    </div>
                  </div>

                  {/* Place Bid Button */}
                  <button className="bg-white rounded-[2.4px] px-4 py-2 text-[13.58px] font-medium uppercase tracking-[0.12px] text-black">
                    Place A Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Auction Section */}
      <section className="container mx-auto py-20 relative z-10">
        {/* Ellipse 430 - Featured Auction Glow */}
        <div className="absolute top-[-200px] left-[116px] w-[654px] h-[820px] gradient-bg glow-blur-130 rounded-full opacity-75 pointer-events-none -z-10" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="nft-card w-full max-w-[596px] h-[646px]">
            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&q=80"
              alt="Bitcoin Art Work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-[72px] font-medium leading-[125%] letter-spacing-[0.2px] mb-6">
              Bitcoin <br /> Art Work
            </h2>
            <p className="text-[16px] font-family-[Poppins] font-medium leading-5 tracking-[0.2px] text-[#CCCCCC] mb-12">
              Created by{" "}
              <span className="text-[rgba(221, 36, 225, 1)]">
                Jonathan Borba
              </span>
            </p>

            <div className="flex gap-12 mb-12">
              {/* Current Bid */}
              <div>
                <div className="text-base font-medium leading-5 tracking-[0.2px] text-white mb-4">
                  Current Bid
                </div>
                <div className="text-4xl font-medium leading-[45px] tracking-[0.2px] text-white mb-2">
                  1.09 ETH
                </div>
                <div className="text-base font-medium leading-5 tracking-[0.2px] text-white">
                  $1,835
                </div>
              </div>

              {/* Divider */}
              <div className="w-[2px] h-[100px] bg-white" />

              {/* Auction Ends In */}
              <div>
                <div className="text-base font-medium leading-5 tracking-[0.2px] text-white mb-4">
                  Auction Ends In
                </div>
                <div className="flex gap-6">
                  <div>
                    <div className="text-4xl font-medium leading-[45px] tracking-[0.2px] text-white">
                      18
                    </div>
                    <div className="text-sm font-normal leading-[18px] tracking-[0.2px] text-white">
                      Hours
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-medium leading-[45px] tracking-[0.2px] text-white">
                      57
                    </div>
                    <div className="text-sm font-normal leading-[18px] tracking-[0.2px] text-white">
                      Minutes
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-medium leading-[45px] tracking-[0.2px] text-white">
                      14
                    </div>
                    <div className="text-sm font-normal leading-[18px] tracking-[0.2px] text-white">
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn-white flex items-center gap-2">
              <span>View Artwork</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Trending This Week Section */}
      <section className="container mx-auto py-20 relative z-10">
        {/* Ellipse 433 & 432 - Trending Section Glows */}
        <div className="absolute top-[900px] right-[-100px] w-[654px] h-[800px] gradient-bg glow-blur-130 rounded-full opacity-75 pointer-events-none -z-10" />
        <div className="absolute top-[300px] left-[-228px] w-[886px] h-[800px] gradient-bg glow-blur-130 rounded-full opacity-75 pointer-events-none -z-10" />

        <h2 className="heading-section mb-6">Trending this week</h2>
        <p className="body-text mb-16 max-w-[548px]">
          Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Grid of Artworks - Staggered Layout */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 z-100">
          {trendingArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`group ${index % 2 === 0 ? "md:mt-[100px]" : ""}`}
            >
              {/* Artist Name Above */}
              <div className="artist-name mb-2">{artwork.artist}</div>

              {/* Title and Price Row */}
              <div className="flex justify-between items-center mb-4">
                <div className="artwork-title">{artwork.title}</div>
                <div className="price-text">{artwork.price}</div>
              </div>

              {/* Image Container */}
              <div className="nft-card w-full h-[450px] relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button className="btn-white flex items-center gap-2">
            <span>View More</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Popular Artists Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex justify-between items-center mb-16">
          <h2 className="heading-section">Popular Artists</h2>
          <button className="btn-white flex items-center gap-2">
            <span>View More</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card text-center">
              <div className="w-[160px] h-[160px] mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="artist-name-large">{artist.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-20 relative z-10">
        {/* Ellipse 431 - CTA Glow */}
        <div className="absolute top-[100px] left-[21px] w-[654px] h-[481px] gradient-bg glow-blur-130 rounded-full opacity-75 pointer-events-none -z-10" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="nft-card w-full max-w-[550px] h-[550px] rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600&q=80"
              alt="Community"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="heading-medium mb-8 max-w-[541px]">
              Join the community and get the best NFT collection
            </h2>
            <button className="btn-primary">Join Community</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
