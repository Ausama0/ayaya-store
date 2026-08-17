/* ============================================
   AyaYa Store — default content
   The admin panel (admin.html) can add/edit items;
   edits are saved in the browser (localStorage).
   Use "Export" in the admin panel to download an
   updated copy of this file and commit it so the
   changes go live for everyone.
   ============================================ */

const DEFAULT_PRODUCTS = [
  {
    id: "malenia-canvas",
    img: "assets/img/product-malenia.jpg",
    images: ["assets/img/product-malenia.jpg"],
    price: 60000,
    category: "paintings",
    featured: true,
    inStock: true,
    youtube: "",
    en: {
      name: "Malenia, Blade of Miquella — Canvas",
      desc: "Hand-painted Elden Ring canvas. Marker + ink, every strand of hair done by hand. Let me solo her… onto your wall."
    },
    ar: {
      name: "مالينيا، نصلة ميكيلا — لوحة كانفاس",
      desc: "لوحة كانفاس مرسومة يدويًا من Elden Ring. ماركرات وحبر، وكل خصلة شعر مرسومة يدويًا. خلّيها تزيّن جدارك."
    }
  },
  {
    id: "link-canvas",
    img: "assets/img/product-link.jpg",
    images: ["assets/img/product-link.jpg"],
    price: 65000,
    category: "paintings",
    featured: true,
    inStock: true,
    youtube: "",
    en: {
      name: "Link — Layered Canvas Art",
      desc: "The Hero of Hyrule in a layered, mixed-media canvas — Link and the Master Sword literally pop out of the painting."
    },
    ar: {
      name: "لينك — لوحة كانفاس بطبقات مجسمة",
      desc: "بطل هايرول بلوحة كانفاس متعددة الطبقات — لينك وسيف الماستر يبرزون فعليًا من اللوحة."
    }
  },
  {
    id: "maxpayne-canvas",
    img: "assets/img/product-maxpayne.jpg",
    images: ["assets/img/product-maxpayne.jpg"],
    price: 50000,
    category: "paintings",
    featured: true,
    inStock: true,
    youtube: "",
    en: {
      name: "Max Payne — Xbox Cover Canvas (Framed)",
      desc: "The classic Max Payne Xbox cover, painted on A4 canvas and framed. Acrylics (pens & tubes) + colored pencils. A man with nothing to lose, for your wall."
    },
    ar: {
      name: "ماكس بين — غلاف إكس بوكس على كانفاس (بإطار)",
      desc: "غلاف Max Payne الكلاسيكي للإكس بوكس، مرسوم على كانفاس A4 وداخل إطار. أكريليك (أقلام وعصّارات) وألوان خشبية 😸 رجل ما عنده شي يخسره، لجدارك."
    }
  },
  {
    id: "silksong-box",
    img: "assets/img/product-silksong-box.jpg",
    images: ["assets/img/product-silksong-box.jpg"],
    price: 45000,
    category: "crafts",
    featured: true,
    inStock: true,
    youtube: "",
    en: {
      name: "Hollow Knight: Silksong — Hand-made Box",
      desc: "A hand-crafted Silksong collector's box with painted Hornet cover art. Perfect for your treasures (or your Geo)."
    },
    ar: {
      name: "صندوق Silksong مصنوع يدويًا",
      desc: "صندوق مقتنيات Silksong مصنوع ومرسوم يدويًا بغلاف هورنيت. مثالي لكنوزك (أو للـGeo مالتك)."
    }
  },
  {
    id: "silksong-bestiary",
    img: "assets/img/product-silksong-book.jpg",
    images: ["assets/img/product-silksong-book.jpg"],
    price: 75000,
    category: "crafts",
    featured: false,
    inStock: true,
    youtube: "",
    en: {
      name: "Hallownest Bestiary — Hand-drawn Journal",
      desc: "A fully hand-drawn Hollow Knight bestiary journal — Forgotten Crossroads and every bug lovingly documented in white ink on black pages."
    },
    ar: {
      name: "موسوعة وحوش هولونست — دفتر مرسوم يدويًا",
      desc: "دفتر موسوعة وحوش Hollow Knight مرسوم بالكامل يدويًا — الـForgotten Crossroads وكل الحشرات موثّقة بحب بحبر أبيض على صفحات سوداء."
    }
  },
  {
    id: "sticker-pack",
    img: "assets/img/oc-giving.png",
    images: ["assets/img/oc-giving.png", "assets/img/oc-thinking.png", "assets/img/oc-grumpy.png", "assets/img/oc-gaming.png"],
    price: 10000,
    category: "prints",
    featured: false,
    inStock: true,
    youtube: "",
    en: {
      name: "AyaYa Sticker Pack",
      desc: "A pack of glossy AyaYa stickers — thumbs up, thinking, grumpy mode and more. Stick them on your laptop, console, or cat (please don't)."
    },
    ar: {
      name: "باكيت ستيكرات AyaYa",
      desc: "مجموعة ستيكرات AyaYa لامعة — لايك، تفكير، وضع العصبية وأكثر. الصقها على اللابتوب أو الكونسول أو القطة (لا ترا ممنوع)."
    }
  },
  {
    id: "custom-commission",
    img: "assets/img/oc-pointing-up.png",
    images: ["assets/img/oc-pointing-up.png"],
    price: 90000,
    category: "commissions",
    featured: false,
    inStock: true,
    youtube: "",
    en: {
      name: "Custom Order — Anything You Imagine",
      desc: "A painting, a figure, a keychain, a print, a box… whatever you have in mind, from any game or anime. Tell me your idea and we'll make it real, just for you!"
    },
    ar: {
      name: "طلب خاص — أي شي يخطر ببالك",
      desc: "لوحة، مجسم، ميدالية، مطبوعة، صندوق… أي شي بخيالك من أي لعبة أو أنمي. كَلي فكرتك وخلّينا نسويها بس إلك!"
    }
  }
];

const DEFAULT_POSTS = [
  {
    id: "hornet-video",
    date: "2026-08-14",
    img: "",
    tag: "gaming",
    youtube: "https://www.youtube.com/watch?v=6KZZdOr-ORs",
    instagram: "",
    link: "",
    en: {
      title: "Hornet, in short | Hollow Knight 🪡",
      body: "New video on the channel! Hornet's whole story, told my way and in a few minutes — who she is, why she keeps beating us up, and why we love her anyway. Watch it right here, and tell me which boss I should cover next!"
    },
    ar: {
      title: "هورنت بـاختصار | Hollow Knight 🪡",
      body: "فيديو جديد على القناة! قصة هورنت كاملة، بطريقتي وبدقايق — منو هي، ليش دايمًا تضربنا، وليش نحبها رغم كل شي. شاهدوه هنا مباشرة، وكَلولي ياهو البوس اللي أغطيه بعدها!"
    }
  },
  {
    id: "silksong-handmade-reel",
    date: "2026-08-08",
    img: "assets/img/product-silksong-box.jpg",
    tag: "crafts",
    youtube: "",
    instagram: "https://www.instagram.com/reel/DTQjcC0DEZE/",
    link: "",
    en: {
      title: "Everything in this reel is handmade ❗",
      body: "Everything you see in this reel is handmade — not official game merch! The Silksong box, the art prints, all of it drawn and built at my desk. Watch the reel and DM me if you want one of the pieces 💜 #silksong"
    },
    ar: {
      title: "كل الأشياء اللي بالريل هذا صنع يدوي ❗",
      body: "كل شي تشوفونه بهذا الريل صنع يدوي — ومو شي رسمي من اللعبة! صندوق Silksong والبرنتات، كلها مرسومة ومصنوعة على ميزي. شاهدوا الريل ودزولي رسالة إذا تريدون قطعة 💜 #silksong"
    }
  },
  {
    id: "little-nightmares-video",
    date: "2026-08-02",
    img: "",
    tag: "gaming",
    youtube: "https://www.youtube.com/watch?v=rWux15LviLA",
    instagram: "",
    link: "",
    en: {
      title: "Little Nightmares, in short 🕯️",
      body: "One of my favorite creepy-cozy games ever — Little Nightmares, summarized in my style. The Maw, Six, the hunger… all of it in a few minutes. Play it, then come back and watch this."
    },
    ar: {
      title: "كوابيس صغيرة باختصار 🕯️",
      body: "من أحب الألعاب المرعبة-الدافئة على قلبي — Little Nightmares، ملخصة بطريقتي. الماو، سكس، الجوع… كل شي بدقايق. العبوها وبعدين ارجعوا شاهدوا الفيديو."
    }
  },
  {
    id: "little-nightmares-piece",
    date: "2026-07-25",
    img: "",
    tag: "crafts",
    youtube: "",
    instagram: "https://www.instagram.com/reel/DTlLfNyjE8Z/",
    link: "",
    en: {
      title: "One-of-a-kind pieces only ✨",
      body: "Most of the things I'll be posting here are one-of-a-kind — one piece, and when it's gone it's gone. Like this Little Nightmares diorama: the Ferryman himself, guarding my desk. Watch the reel with the sound on 🎩"
    },
    ar: {
      title: "اغلب الأشياء اللي راح انزلها الكم هي بس قطعة وحدة تكون ✨",
      body: "أغلب الأشياء اللي راح أنزلها هنا قطعة وحدة بس — إذا انباعت، خلصت. مثل ديوراما Little Nightmares هاي: الفيريمان بنفسه، يحرس ميزي. شاهدوا الريل والصوت عالي 🎩"
    }
  },
  {
    id: "maxpayne-post",
    date: "2026-07-18",
    img: "assets/img/product-maxpayne.jpg",
    tag: "paintings",
    youtube: "",
    instagram: "https://www.instagram.com/p/DZmoI0fAHdl/",
    link: "",
    en: {
      title: "A man with nothing to lose (on canvas)",
      body: "Painted the classic Max Payne Xbox cover on A4 canvas, framed and ready. Acrylics (pens & tubes) + colored pencils. Available to order — DM me! #maxpayne #xbox"
    },
    ar: {
      title: "رجل ما عنده شي يخسره (على كانفاس)",
      body: "رسمت غلاف Max Payne الكلاسيكي للإكس بوكس على كانفاس A4، بإطار وجاهز. الألوان المستخدمة أكريليك (أقلام وعصّارات) وألوان خشبية 😸💜 متوفرة للطلب — دزولي رسالة! #maxpayne #xbox"
    }
  },
  {
    id: "silksong-box-post",
    date: "2026-08-10",
    img: "assets/img/product-silksong-box.jpg",
    tag: "crafts",
    youtube: "",
    instagram: "",
    link: "",
    en: {
      title: "This little box will be MINE",
      body: "Finished the Silksong collector's box! Painted Hornet on the cover with acrylics, then sealed it so it survives my desk (a dangerous place). Silksong is finally real, and so is this box. What should I put inside it first?"
    },
    ar: {
      title: "هذا الباكج الصغير راح يكون بي",
      body: "خلّصت صندوق مقتنيات Silksong! رسمت هورنيت على الغلاف بالأكريليك وبعدين ثبّتّه حتى يصمد على ميز الرسم مالتي (مكان خطر). أخيرًا Silksong صار حقيقة، وهذا الصندوق همين. شنو أول شي أحط بي؟"
    }
  },
  {
    id: "malenia-process",
    date: "2026-07-28",
    img: "assets/img/product-malenia.jpg",
    tag: "paintings",
    youtube: "",
    instagram: "",
    link: "",
    en: {
      title: "I have never known defeat (except drawing her hair)",
      body: "Malenia canvas done! The armor shading took two evenings and approximately one existential crisis. Marker + ink on canvas. Also yes, that's the Radahn plate behind it — the diorama series continues."
    },
    ar: {
      title: "ما ذقت الهزيمة يومًا (إلا برسم شعرها)",
      body: "خلّصت لوحة مالينيا! تظليل الدرع أخذ ليلتين وأزمة وجودية وحدة تقريبًا. ماركر وحبر على كانفاس. وإي، هاي صحن رادان وراها — سلسلة الديوراما مستمرة."
    }
  },
  {
    id: "bestiary-post",
    date: "2026-07-15",
    img: "assets/img/product-silksong-book.jpg",
    tag: "drawings",
    youtube: "",
    instagram: "",
    link: "",
    en: {
      title: "Documenting every bug in Hallownest",
      body: "New pages from the hand-drawn bestiary journal: Forgotten Crossroads! Vengefly King, Aspid Mother and friends, all in white ink on black paper. Verdict written next to the Husk: 'worst bugs in the area'. I stand by it."
    },
    ar: {
      title: "أوثّق كل حشرات هولونست",
      body: "صفحات جديدة من دفتر الموسوعة المرسوم يدويًا: Forgotten Crossroads! ملك الفنجفلاي وأم الأسبد وربعهم، كلهم بحبر أبيض على ورق أسود. وكتبت يم الهسك: 'أسوأ حشرات بالمنطقة'. وبعدني مصرّة على رأيي."
    }
  }
];

/* Site-wide settings the admin can edit */
const DEFAULT_SETTINGS = {
  youtube: "https://www.youtube.com/@AyaYa.7",
  instagram: "https://www.instagram.com/ayaya.str/",
  tiktok: "",
  discord: "",
  /* Telegram orders: create a bot with @BotFather, put its token here,
     and your chat id (get it from @userinfobot). Orders are sent to that chat.
     NOTE: on a static site the token is visible to visitors — use a bot
     created only for orders, and /revoke it in BotFather if it gets abused. */
  tgToken: "8853102324:AAHeu3Xz6W5sOpThbK_aWGYMb9FkTNqZ-MY",
  tgChatId: "-5466683611",
  /* Fallback: your Telegram username (without @) for a t.me DM link */
  tgUsername: ""
};

/* Replaceable site images — the admin "Images" tab can override each slot
   with an uploaded PNG/JPG (stored in the browser until exported). */
const DEFAULT_IMAGES = {
  logo: "assets/img/logo.png",
  hero: "assets/img/logo.png",
  about: "assets/img/oc-cozy.png",
  mascot: "assets/img/oc-pointing-up.png",
  mascotHappy: "assets/img/oc-giving.png",
  mascotThinking: "assets/img/oc-thinking.png",
  mascotGrumpy: "assets/img/oc-grumpy.png",
  storeCorner: "assets/img/oc-pointing.png",
  blogCorner: "assets/img/oc-gaming.png",
  accountArt: "assets/img/oc-giving.png",
  orderArt: "assets/img/oc-giving.png",
  cartEmpty: "assets/img/oc-thinking.png"
};

/* UI wording overrides — empty by default; the admin "Texts" tab fills this.
   Any key here wins over the built-in dictionary in main.js. */
const DEFAULT_TEXTS = { en: {}, ar: {} };
