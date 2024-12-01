import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import { Dancing_Script } from "next/font/google";
const ds = Dancing_Script({ subsets: ["latin"] });
export default function Banner() {
  const background = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 100],
    scale: [1, 0.8, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className={`inset-0 mt-32 items-center justify-center`}>
        <div
          className={`text-6xl md:text-8xl text-white  font-bold  ${ds.className}`}
        >
          RS Nails
        </div>
        <div className="text-xl md:text-8xl text-white font-thin">
          Coming Soon
        </div>
      </div>
    ),
  };

  const foreground = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.3, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        className="aspect-[2/1] bg-gray-900 h-1/2"
      />
    </ParallaxProvider>
  );
}
