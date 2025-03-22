import Logo from "../assets/logo.svg";
import SocialX from "../assets/social-x.svg";
import SocialInstagram from "../assets/social-instagram.svg";
import SocialYT from "../assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8 lg:items-center lg:flex-row">
          <div className="flex gap-3 items-center lg:flex-1">
            <Logo className="h-6 w-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>

          <nav className="flex flex-col lg:flex-row  gap-5 lg:gap-7 lg:flex-1 lg:justify-center ">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition md:text-sm"
            >
              Feature
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition md:text-sm"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition md:text-sm"
            >
              Company
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition md:text-sm"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition md:text-sm"
            >
              Changelog
            </a>
          </nav>

          <div className="flex gap-4 lg:flex-1 lg:justify-end">
            <SocialX className="text-white/40 hover:text-white transition" />
            <SocialInstagram className="text-white/40 hover:text-white transition" />
            <SocialYT className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
