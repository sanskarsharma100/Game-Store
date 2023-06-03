import StoreLogo from "../assets/store-logo.png";
import DiscordImg from "../assets/discord.svg";
import FacebookImg from "../assets/facebook.svg";
import InstagramImg from "../assets/instagram.svg";
import TwitterImg from "../assets/twitter.svg";

function Footer() {
  const companyLinks = [
    { id: "1", label: "About" },
    { id: "2", label: "Privacy Policy" },
    { id: "3", label: "Cookies Policy" },
    { id: "4", label: "Legal" },
    { id: "5", label: "Careers" },
  ];

  const productLinks = [
    { id: "1", label: "Refund Policy" },
    { id: "2", label: "Report a bug" },
    { id: "3", label: "Support" },
  ];

  const socialLinks = [
    { id: "1", url: FacebookImg, alt: "Facebook Logo" },
    { id: "2", url: InstagramImg, alt: "Instagram Logo" },
    { id: "3", url: TwitterImg, alt: "Twitter Logo" },
    { id: "4", url: DiscordImg, alt: "Discord Logo" },
  ];

  const companyItems = companyLinks.map((link) => (
    <li key={link.id}>
      <a href="#" className="hover:underline">
        {link.label}
      </a>
    </li>
  ));

  const productItems = productLinks.map((link) => (
    <li key={link.id}>
      <a href="#" className="hover:underline">
        {link.label}
      </a>
    </li>
  ));

  const socials = socialLinks.map((link) => (
    <li key={link.id}>
      <img src={link.url} alt={link.alt} className="w-7 hover:cursor-pointer" />
    </li>
  ));

  return (
    <footer className="flex w-full flex-col gap-4 bg-darkBg2 p-4 text-lightText xs:flex-row">
      <img
        src={StoreLogo}
        alt="Game Store Logo"
        className="m-auto w-40 xs:h-16 xs:w-auto"
      />
      <div className="flex w-full flex-wrap justify-evenly gap-2">
        <div>
          <h4 className="font-heading font-semibold">Company</h4>
          <ul className="font-content text-sm font-light text-zinc-400">
            {companyItems}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold">Product</h4>
          <ul className="font-content text-sm font-light text-zinc-400">
            {productItems}
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex h-full justify-evenly xs:flex-col xs:justify-between">
          {socials}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
