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
    price: 45,
    category: "paintings",
    featured: true,
    inStock: true,
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
    price: 50,
    category: "paintings",
    featured: true,
    inStock: true,
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
    id: "silksong-box",
    img: "assets/img/product-silksong-box.jpg",
    price: 35,
    category: "crafts",
    featured: true,
    inStock: true,
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
    price: 60,
    category: "crafts",
    featured: true,
    inStock: true,
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
    price: 8,
    category: "stickers",
    featured: false,
    inStock: true,
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
    price: 70,
    category: "commissions",
    featured: false,
    inStock: true,
    en: {
      name: "Custom Painting Commission",
      desc: "Your favorite game or anime character, hand-painted on canvas just for you. Tell me what you want and let's make it real!"
    },
    ar: {
      name: "طلب لوحة مخصصة",
      desc: "شخصيتك المفضلة من الألعاب أو الأنمي، مرسومة يدويًا على كانفاس خصيصًا لك. كَلي شتريد وخلّينا نسويها!"
    }
  }
];

const DEFAULT_POSTS = [
  {
    id: "silksong-box-post",
    date: "2026-08-10",
    img: "assets/img/product-silksong-box.jpg",
    tag: "crafts",
    youtube: "",
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
    link: "",
    en: {
      title: "Documenting every bug in Hallownest",
      body: "New pages from the hand-drawn bestiary journal: Forgotten Crossroads! Vengefly King, Aspid Mother and friends, all in white ink on black paper. Verdict written next to the Husk: 'worst bugs in the area'. I stand by it."
    },
    ar: {
      title: "أوثّق كل حشرات هولونست",
      body: "صفحات جديدة من دفتر الموسوعة المرسوم يدويًا: Forgotten Crossroads! ملك الفنجفلاي وأم الأسبد وربعهم، كلهم بحبر أبيض على ورق أسود. وكتبت يم الهسك: 'أسوأ حشرات بالمنطقة'. وبعدني مصرّة على رأيي."
    }
  },
  {
    id: "link-canvas-post",
    date: "2026-06-30",
    img: "assets/img/product-link.jpg",
    tag: "paintings",
    youtube: "",
    link: "",
    en: {
      title: "It's dangerous to go alone, take this canvas",
      body: "Layered Link canvas is finished! He's cut out and mounted so he floats above the background — the Master Sword too. This one was so fun I might do a whole Zelda series. Wind Waker next?"
    },
    ar: {
      title: "خطر تروح وحدك، خذ هاي اللوحة",
      body: "خلّصت لوحة لينك المجسمة! قصّيته وركّبته حتى يطلع فوق الخلفية — وسيف الماستر همين. هاي اللوحة كانت ممتعة لدرجة يمكن أسوي سلسلة زيلدا كاملة. Wind Waker بعدها؟"
    }
  }
];

/* Site-wide settings the admin can edit */
const DEFAULT_SETTINGS = {
  youtube: "https://youtube.com/",
  instagram: "https://instagram.com/",
  tiktok: "https://tiktok.com/",
  discord: "",
  orderNote: ""
};
