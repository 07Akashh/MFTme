const AboutPage = () => {
  return (
    <div className="relative pt-[100px] pb-20">
      {/* Background Gradient Flares - Multiple for depth */}
      <div className="absolute top-[100px] right-[100px] w-[654px] h-[820px] gradient-bg glow-blur-130 rounded-full opacity-75 pointer-events-none -z-10" />
      <div className="absolute top-[500px] left-[150px] w-[500px] h-[700px] gradient-bg glow-blur-130 rounded-full opacity-60 pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <h1 className="heading-hero mb-8 text-center">About NFTme</h1>
        <p className="body-text text-center max-w-3xl mx-auto">
          We are revolutionizing the digital art marketplace by connecting
          creators with collectors in a seamless, transparent, and innovative
          platform.
        </p>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50k+", label: "Active Users" },
            { value: "$2.5M", label: "Trading Volume" },
            { value: "15k+", label: "NFTs Sold" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-number mb-2">{stat.value}</div>
              <div className="text-base font-normal text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="nft-card h-[400px] rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="heading-medium mb-6">Our Mission</h2>
            <p className="body-text mb-4">
              At NFTme, we believe in empowering digital artists and collectors
              by providing a platform that combines cutting-edge blockchain
              technology with an intuitive user experience.
            </p>
            <p className="body-text">
              Our mission is to democratize access to digital art, ensuring that
              creators receive fair compensation for their work while collectors
              can discover and own unique pieces with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <h2 className="heading-section mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Transparency",
              description:
                "Every transaction is recorded on the blockchain, ensuring complete transparency and trust.",
            },
            {
              title: "Innovation",
              description:
                "We continuously push the boundaries of what's possible in the digital art space.",
            },
            {
              title: "Community",
              description:
                "Our platform is built by and for the community of artists and collectors.",
            },
          ].map((value, index) => (
            <div key={index} className="card-surface p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {value.title}
              </h3>
              <p className="text-base text-white/80">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 lg:px-8">
        <h2 className="heading-section mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "CEO & Founder",
              avatar: "https://i.pravatar.cc/160?img=1",
            },
            {
              name: "Marcus Johnson",
              role: "CTO",
              avatar: "https://i.pravatar.cc/160?img=12",
            },
            {
              name: "Elena Rodriguez",
              role: "Head of Design",
              avatar: "https://i.pravatar.cc/160?img=5",
            },
            {
              name: "David Kim",
              role: "Lead Developer",
              avatar: "https://i.pravatar.cc/160?img=33",
            },
          ].map((member, index) => (
            <div key={index} className="text-center artist-card">
              <div className="w-[160px] h-[160px] mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-base text-white/70">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
