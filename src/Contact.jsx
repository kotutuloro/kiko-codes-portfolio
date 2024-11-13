import GithubIcon from "./icons/square-github-brands-solid.svg?react";
import EmailIcon from "./icons/envelope-open-text-solid.svg?react";
import LinkedinIcon from "./icons/linkedin-brands-solid.svg?react";
import { useState } from "react";

function Contact() {
  const defaultContact = "email";
  const [selectedContact, setSelectedContact] = useState(defaultContact);

  const contactInfo = [
    {
      platform: "github",
      Icon: GithubIcon,
      username: "@kotutuloro",
      url: "https://github.com/kotutuloro",
    },
    {
      platform: "email",
      Icon: EmailIcon,
      username: "kiko@kiko.codes",
      url: "mailto:kiko@kiko.codes",
    },
    {
      platform: "linkedin",
      Icon: LinkedinIcon,
      username: "@kotutuloro",
      url: "https://linkedin.com/in/kotutuloro",
    },
  ];

  function ContactIcon({ platform, Icon, username, url }) {
    function selectThis() {
      setSelectedContact(platform);
    }
    const showOnSelect = selectedContact == platform ? "visible" : "invisible";

    return (
      <div className="group w-24 flex flex-col gap-2 items-center font-mono *:transition *:duration-500">
        <a
          onMouseOver={selectThis}
          className="peer order-2 hover:blur-sm size-12 flex items-center"
          target="_blank"
          href={url}
        >
          <Icon className="fill-blue-600" />
        </a>
        <span className={`order-1 ${showOnSelect}`}>{platform}</span>
        <span className={`order-3 text-xl ${showOnSelect}`}>{username}</span>
      </div>
    );
  }

  const contactIcons = contactInfo.map((info) => (
    <ContactIcon key={info.platform} {...info} />
  ));
  return (
    <div>
      <h1 className="font-mono text-center text-3xl text-purple-400">
        contact&shy;_me
      </h1>
      <div className="mt-5 flex max-[320px]:flex-col items-center justify-center">
        {contactIcons}
      </div>
    </div>
  );
}

export default Contact;
