// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-my-work",
          title: "my work",
          description: "A look at my regulatory work across three areas — click into each to explore.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-chill",
          title: "chill",
          description: "Things I do to unwind and recharge.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/chill/";
          },
        },{id: "nav-my-reglens",
          title: "My RegLens",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/regulatory-notes/";
          },
        },{id: "post-technical-documentation-updates-and-where-that-annual-requirement-actually-comes-from",
        
          title: "Technical documentation updates — and where that annual requirement actually comes from",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/technical-documentation-updates/";
          
        },
      },{id: "post-a-deeper-dive-into-addendum-labeling",
        
          title: "A deeper dive into addendum labeling",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/addendum-labeling/";
          
        },
      },{id: "post-learnings-from-global-submissions-eu-mdd-to-eu-mdr-transition",
        
          title: "Learnings from global submissions - EU MDD to EU MDR transition",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/learnings-from-eu-mdr-implementation/";
          
        },
      },{id: "chill-doodles",
          title: 'Doodles',
          description: "Little bits of drawing I do to unwind.",
          section: "Chill",handler: () => {
              window.location.href = "/chill/1_doodles/";
            },},{id: "news-first-reglens-post-is-up-learnings-from-the-eu-mdd-to-eu-mdr-transition",
          title: 'First RegLens post is up — learnings from the EU MDD to EU...',
          description: "",
          section: "News",},{id: "news-new-post-a-deeper-dive-into-addendum-labeling-following-up-on-the-eu-mdr-transition-piece",
          title: 'New post — a deeper dive into addendum labeling, following up on the...',
          description: "",
          section: "News",},{id: "news-my-work-now-splits-into-three-areas-medical-devices-cannabis-regulation-and-food-feed",
          title: 'My Work now splits into three areas — medical devices, cannabis regulation, and...',
          description: "",
          section: "News",},{id: "news-new-post-technical-documentation-updates-and-where-that-annual-requirement-actually-comes-from",
          title: 'New post — technical documentation updates, and where that annual requirement actually comes...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%68%61%6E%61%73%72%69%6E%61%69%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dhanasri-nair-25291b94", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
