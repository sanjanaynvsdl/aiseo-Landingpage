import acmelogo from "../assets/logo-acme.png";
import apexLogo from "../assets/logo-apex.png";
import celestialLogo from "../assets/logo-celestial.png";
import quantumLogo from "../assets/logo-quantum.png";
import pulseLogo from "../assets/logo-pulse.png";
import echoLogo from "../assets/logo-echo.png";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center md:gap-10 gap-4">
          <div className="flex-1 md:flex-none">
            <p>Trusted By top inovative teams!</p>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_30%,black_80%,transparent)]">
            <div className="flex flex-none gap-14 ">
              {[
                acmelogo,
                quantumLogo,
                apexLogo,
                celestialLogo,
                pulseLogo,
                echoLogo,
              ].map((logo) => (
                <img src={logo.src} key={logo.src} className="h-6 w-auto" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
