import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = ["Explore", "Marketplace", "Artists", "Contact"];

  return (
    <footer className="relative z-10 mt-20">
      {/* Background Gradient Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] gradient-bg glow-blur-130 rounded-full opacity-50 pointer-events-none -z-10" />

      <div className="glass-footer">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            {/* Logo/Brand */}
            <div className="font-['Clash_Display'] font-semibold text-3xl md:text-4xl leading-[45px] text-white">
              NFTme
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {footerLinks.map((link) => (
                <Link
                  key={link}
                  to="#"
                  className="font-['Poppins'] font-normal text-base leading-5 text-white hover:text-[#DD24E1] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.625 1.875C3.48896 1.875 1.75 3.61396 1.75 5.75V14.25C1.75 16.386 3.48896 18.125 5.625 18.125H14.375C16.511 18.125 18.25 16.386 18.25 14.25V5.75C18.25 3.61396 16.511 1.875 14.375 1.875H5.625ZM10 5.625C7.58375 5.625 5.625 7.58375 5.625 10C5.625 12.4162 7.58375 14.375 10 14.375C12.4162 14.375 14.375 12.4162 14.375 10C14.375 7.58375 12.4162 5.625 10 5.625ZM15.3125 5.625C15.3125 6.10825 14.9207 6.5 14.4375 6.5C13.9543 6.5 13.5625 6.10825 13.5625 5.625C13.5625 5.14175 13.9543 4.75 14.4375 4.75C14.9207 4.75 15.3125 5.14175 15.3125 5.625Z"
                    fill="black"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none">
                  <path
                    d="M6.39703 18.75V10.1897H9.16202L9.57302 6.95025H6.39703V4.996C6.39703 4.08525 6.65502 3.45475 7.98402 3.45475L9.66802 3.454V0.5785C9.35852 0.53775 8.28002 0.4375 7.02302 0.4375C4.39652 0.4375 2.61602 1.99075 2.61602 4.6605V6.95025H0V10.1897H2.61602V18.75H6.39703Z"
                    fill="black"
                  />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Twitter"
              >
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path
                    d="M18.9453 3.54297C18.2734 3.83594 17.5547 4.03516 16.8047 4.13281C17.5703 3.67578 18.1562 2.95703 18.4336 2.09766C17.7148 2.52344 16.9219 2.82812 16.0781 2.99219C15.3984 2.27344 14.4453 1.83594 13.3906 1.83594C11.3594 1.83594 9.71094 3.48438 9.71094 5.51562C9.71094 5.80469 9.74219 6.08594 9.80469 6.35547C6.73438 6.20312 4.01562 4.73438 2.19531 2.51172C1.88281 3.03906 1.70312 3.67578 1.70312 4.35547C1.70312 5.64844 2.35938 6.79297 3.35938 7.45703C2.74219 7.4375 2.15625 7.27344 1.64062 6.99609V7.04297C1.64062 8.83594 2.90625 10.3281 4.59375 10.668C4.28906 10.7539 3.96875 10.7969 3.63672 10.7969C3.40234 10.7969 3.17578 10.7734 2.95312 10.7266C3.41406 12.1953 4.77344 13.2734 6.38281 13.3047C5.125 14.3047 3.51562 14.9023 1.76562 14.9023C1.46875 14.9023 1.17578 14.8828 0.890625 14.8477C2.51562 15.9023 4.44531 16.5156 6.52344 16.5156C13.3828 16.5156 17.1406 10.8594 17.1406 5.94531C17.1406 5.78516 17.1367 5.625 17.1289 5.46875C17.8594 4.94922 18.4336 4.29688 18.9453 3.54297Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 pt-6 border-t border-white/10 text-center">
            <Link
              to="#"
              className="font-['Ranade'] font-normal text-sm md:text-base leading-4 text-white hover:text-[#DD24E1] transition-colors"
            >
              Privacy policy
            </Link>
            <span className="text-white hidden md:block">|</span>
            <div className="font-['Poppins'] font-medium text-sm md:text-base leading-[26px] text-white">
              Copyright @ Kartik Bansal {currentYear}. All Rights Reserved.
            </div>
            <span className="text-white hidden md:block">|</span>
            <Link
              to="#"
              className="font-['Ranade'] font-normal text-sm md:text-base leading-4 text-white hover:text-[#DD24E1] transition-colors"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
