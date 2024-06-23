import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://www.github.com/marcopezzote" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/marcopezzote/" },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/channel/UC28idXNADTNk7A5OtNlTkqw",
  },
  { icon: <FaTwitter />, path: "https://www.x.com/marcopezzote" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
