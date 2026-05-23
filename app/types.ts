export type TechStack = {
  title: string;
  description: string;
  tech: { name: string; icon: React.ComponentType }[];
};

export type NavigationLinks = {
  name: string;
  href: string;
};

export type Package = {
  title: string;
  badge: string;
  price: string;
  description: string;
  features: string[];
};

export type Project = {
  name: string;
  href: string;
  image?: string;
};
