import { assets } from '../assets/index';

type stringType = string

type navLinkObj = {
  'id' : stringType, 
  'title' : stringType
}

type featureObj = {
  'id': stringType, 
  'icon': stringType | undefined, 
  'title': stringType, 
  'content' : stringType
}

export const navLinks : navLinkObj[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features : featureObj[] = [
  {
    id: "feature-1",
    icon: assets.star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: assets.shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: assets.send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: assets.people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: assets.people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: assets.people03,
  },
];

export const stats : {
  'id': stringType,
  'title' : stringType,
  'value' : stringType
}[] = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks : {
  'title' : stringType,
  'links' : {
    'name' : stringType,
    'link' : stringType
  }[]
}[] = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia : {
  'id' : stringType,
  'icon' : stringType | undefined,
  'link' : stringType

}[] = [
  {
    id: "social-media-1",
    icon: assets.instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: assets.facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: assets.twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: assets.linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients : {
  'id' : stringType,
  'logo' : stringType | undefined
}[] = [
  {
    id: "client-1",
    logo: assets.airbnb,
  },
  {
    id: "client-2",
    logo: assets.binance,
  },
  {
    id: "client-3",
    logo: assets.star,
  },
  {
    id: "client-4",
    logo: assets.dropbox,
  },
];