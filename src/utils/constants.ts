interface Invite {
  name: string,
  type: string[],
  src: string,
  alt: string,
  link: string
};

export const invites: Invite[] = [
  { name: "Fazendinha", type: ["childlike"], src: new URL("@/assets/images/models/little-farm.png", import.meta.url).href, alt: "little farm invite", link: "/invite/little-farm" },
  { name: "Pequena Sereia", type: ["childlike"], src: new URL("@/assets/images/models/little-mermaid.png", import.meta.url).href, alt: "little marmaid invite", link: "/invite/little-mermaid" },
  { name: "Leaves Green", type: ["marriage", "birthday"], src: new URL("@/assets/images/models/leaves-green.png", import.meta.url).href, alt: "marriage invite", link: "/invite/leaves-green" },
  { name: "Chic Black", type: ["corporate", "birthday", "marriage"], src: new URL("@/assets/images/models/chic-black.png", import.meta.url).href, alt: "corporate invite", link: "/invite/chic-black" },
  { name: "Soft Rose", type: ["marriage", "birthday"], src: new URL("@/assets/images/models/soft-rose.png", import.meta.url).href, alt: "marriage invite", link: "/invite/soft-rose" },
  { name: "Yellow Bubble", type: ["corporate", "marriage", "birthday"], src: new URL("@/assets/images/models/yellow-bubble.png", import.meta.url).href, alt: "corporate invite", link: "/invite/yellow-bubble" },
  { name: "Pink Blue", type: ["gender-reveal"], src: new URL("@/assets/images/models/pink-blue.png", import.meta.url).href, alt: "gender reveal invite", link: "/invite/pink-blue" },
  { name: "Boy Or Girl", type: ["gender-reveal"], src: new URL("@/assets/images/models/boy-or-girl.png", import.meta.url).href, alt: "gender reveal invite", link: "/invite/boy-or-girl" },
];
