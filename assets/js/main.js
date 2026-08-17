/* ============================================
   AyaYa Store — shared app logic
   (i18n, header/footer, cart, auth, mascot, fun)
   ============================================ */

/* ---------- tiny helpers ---------- */
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const LS = {
  get(k, fallback) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch { return fallback; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
};
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- i18n ---------- */
const I = {
  en: {
    brandTag: "handmade with love & mana",
    navHome: "Home", navStore: "Store", navBlog: "Blog", navAbout: "About", navAccount: "Account", navAdmin: "Admin", navCustom: "Custom orders 🎨",
    coTitle: "Custom Orders", coSub: "A painting, a figure, a keychain, a print… anything from any game or anime — made just for you.",
    coHow: "How it works", coStep1: "Write every detail of what you want", coStep2: "Your request goes straight to Aya", coStep3: "Aya reads it and replies with the price & time",
    coPriceNote: "There's no fixed price here — Aya sets the price after reading your request, and gets back to you before anything starts. 💜",
    coType: "What do you want?", coTypePh: "Painting / figure / keychain / print / something else…",
    coDetails: "The full details (required!)",
    coDetailsPh: "Example: a canvas painting of Hornet from Silksong, A4 size with a frame, purple background, I want it as a gift wrapped nicely…",
    coDetailsHint: "The character/game, the size, colors, materials, deadline — the more details, the better the price and result!",
    coImage: "Reference photo (optional)",
    coNeedDetails: "Please write the full details (a bit more than that!) so Aya can price it 💜",
    coSent: "Your request reached Aya! She'll read it and reply with a price 🎨💜",
    coStoreBanner: "Didn't find what you're looking for?", coStoreBannerBtn: "Make a custom order 🎨",
    coPriceTbd: "يتحدد بعد المراجعة",
    heroTitle1: "Made by hand, with love —", heroTitle2: "from Aya's desk to your home",
    heroSub: "Hand-painted canvases, hand-made boxes, journals and prints — inspired by the games and anime we love. Every piece is drawn, painted and glued together by one very caffeinated gamer.",
    shopNow: "Browse the loot", readBlog: "Read the blog",
    featured: "Featured drops", featuredSub: "Fresh from the drawing desk",
    viewAll: "View everything",
    latestPosts: "Latest from the blog", latestSub: "Devlogs, doodles & unboxings",
    aboutTitle: "Hi, I'm Aya! 🎮",
    aboutBody: "I'm a YouTuber who plays through games, draws way too much, and turns favorite bosses into paintings, journals and little handmade treasures. Everything in this store is made by hand — markers, ink, acrylics, glue, and a suspicious amount of purple.",
    aboutCta: "Watch on YouTube",
    marquee: ["hand-painted", "one-of-a-kind", "gamer-made", "ships with love", "no microtransactions", "drops are limited"],
    addToCart: "Add to cart", soldOut: "Not available right now 😢", inCart: "In cart ✓",
    orderCustom: "Want it? Order a custom one 🎨",
    cart: "Cart", cartEmpty: "Your cart is emptier than Hallownest…", cartEmptySub: "Go grab some loot!",
    total: "Total", checkout: "Send order 📨",
    orderTitle: "Almost there!", orderHint: "This store takes orders by DM — copy your order below and send it on Instagram or YouTube, and Aya will reply with payment & shipping details.",
    copyOrder: "Copy order", copied: "Copied! Now send it 💌",
    searchPh: "Search the loot…", allCat: "All", paintings: "Paintings", crafts: "Crafts", prints: "Prints", commissions: "Custom orders", drawings: "Drawings", gaming: "Gaming",
    ytZone: "The YouTube corner", ytZoneSub: "Game stories, told Aya's way — watch them right here",
    igZone: "New on Instagram", igZoneSub: "Fresh from the desk: reels & posts",
    txtZone: "Notes & scribbles", newVideo: "فيديو جديد", latestLabel: "LATEST",
    noResults: "Hmm… nothing here. Try another word?",
    blogTitle: "The Blog", blogSub: "Everything I'm playing, drawing and gluing — sometimes all three at once.",
    storeTitle: "The Store", storeSub: "Every item is handmade. When it's gone, it's gone — like a rare drop.",
    accTitle: "Your Account", accSub: "Join the party to track your orders and get first dibs on new drops.",
    login: "Log in", signup: "Create account", logout: "Log out",
    name: "Name", email: "Email", password: "Password", confirm: "Confirm password",
    haveAcc: "Already have an account?", noAcc: "New here?",
    welcomeBack: "Welcome back", memberSince: "Member since",
    errFill: "Please fill in all fields!", errEmail: "That email doesn't look right 🤔", errPassLen: "Password needs at least 6 characters", errMatch: "Passwords don't match!", errExists: "This email is already registered — try logging in!", errLogin: "Wrong email or password 😿",
    okSignup: "Account created! Welcome to the party 🎉",
    yourOrders: "Wishlist & orders coming soon — for now, orders go through DM 💌",
    adminTitle: "Admin Panel", adminSub: "Manage products, blog posts and links.",
    adminOnly: "This area is for the store admin. Log in with the admin account.",
    tabProducts: "Products", tabPosts: "Blog posts", tabSettings: "Settings",
    addProduct: "+ New product", addPost: "+ New post",
    exportData: "⬇ Export data.js", exportHint: "Edits are saved in this browser. Export data.js and replace assets/js/data.js in the repo to publish them for everyone.",
    save: "Save", cancel: "Cancel", edit: "Edit", del: "Delete", confirmDel: "Delete this? No respawns!",
    thPhoto: "Photo", thName: "Name", thPrice: "Price", thCat: "Category", thStock: "Stock", thActions: "Actions", thDate: "Date", thTitle: "Title",
    fPrice: "Price (IQD — Iraqi Dinar)", fCat: "Category", fImg: "Image", fImgHint: "URL or upload", fFeatured: "Show on home page", fStock: "In stock",
    fNameEn: "Name (English)", fNameAr: "Name (Arabic)", fDescEn: "Description (English)", fDescAr: "Description (Arabic)",
    fTitleEn: "Title (English)", fTitleAr: "Title (Arabic)", fBodyEn: "Text (English)", fBodyAr: "Text (Arabic)",
    fDate: "Date", fTag: "Tag", fYoutube: "YouTube link (optional)", fLink: "Other link (optional)",
    watchVideo: "▶ Watch video", openLink: "🔗 Open link",
    sYoutube: "YouTube URL", sInstagram: "Instagram URL", sTiktok: "TikTok URL", sDiscord: "Discord invite (optional)",
    settingsSaved: "Settings saved ✓",
    mascotHi: "Hi! I'm Aya click me!",
    mascotFacts: [
      "Everything here is 100% handmade!",
      "Purple is scientifically the best color.",
      "I died 47 times to Malenia while painting her.",
      "Stickers stick better with love.",
      "Try the Konami code… just saying 👀",
      "Silksong is real and I have proof (the box)."
    ],
    mascotCart: "Ooh, nice pick!",
    mascotSearchEmpty: "Hmm, can't find that…",
    mascotKonami: "⬆⬆⬇⬇⬅➡⬅➡🅱🅰 YOU FOUND IT!",
    footNote: "Made with 💜, markers and way too much coffee.",
    rights: "AyaYa Store — all loot handcrafted.",
    newBadge: "NEW", featBadge: "★ Featured",
    by: "by Aya", readMore: "Read more ↗", close: "Close",
    accWho: "Logged in as", accAdmin: "You're the admin!", goAdmin: "Open admin panel",
    tabTexts: "Texts", tabImages: "Images",
    textsHint: "Change any wording on the site — English and Arabic side by side. Empty = use the default.",
    searchTexts: "Search texts…",
    mascotEditor: "Mascot phrases (shown when visitors click the mascot)",
    addPhrase: "+ Add phrase", marqueeEditor: "Moving banner words (one per line)",
    imagesHint: "Replace any picture on the site by uploading a PNG/JPG (max ~900KB). Don't forget to Export when you're happy!",
    reset: "Reset", upload: "Upload",
    imgSlot_logo: "Logo (header & footer)", imgSlot_hero: "Home hero art",
    imgSlot_about: "About section art", imgSlot_mascot: "Corner mascot (default)",
    imgSlot_mascotHappy: "Corner mascot (happy)", imgSlot_mascotThinking: "Corner mascot (thinking)",
    imgSlot_mascotGrumpy: "Corner mascot (grumpy)", imgSlot_storeCorner: "Store page corner art",
    imgSlot_blogCorner: "Blog page corner art", imgSlot_accountArt: "Account page art",
    imgSlot_orderArt: "Order screen art", imgSlot_cartEmpty: "Empty cart art",
    tgSend: "Send the order 🚀", tgSending: "Sending…",
    tgSent: "Your order reached Aya! 🎉 She'll contact you soon 💜",
    tgFail: "Couldn't send automatically — copy the order and send it by DM instead 🙏",
    sTgToken: "Telegram bot token (from @BotFather)", sTgChatId: "Telegram chat id (from @userinfobot)",
    tgHint: "With token + chat id, orders are sent straight to your Telegram. Note: on a public site the token is visible to visitors — use a bot made just for orders, and revoke it in @BotFather if it's ever abused.",
    productNotFound: "This item vanished into the gloom… 🌫️", backToStore: "← Back to the store",
    relatedTitle: "More loot you might like",
    fMoreImages: "Photos (first = cover, you can add several)", addImage: "+ Add photo",
    fYoutubeProd: "YouTube video (optional — plays on the product page)",
    watchOnIg: "📸 Open on Instagram", qtyLabel: "Quantity", buyNow: "Add to cart",
    fBuyerName: "Your name", fBuyerPhone: "Phone or Instagram username",
    fBuyerNotes: "Notes — address, colors, details… (optional)",
    errNeedContact: "Please write your name and a way to contact you 💜",
    orderPreview: "Order preview (this is what Aya receives)"
  },
  ar: {
    brandTag: "مصنوع يدويًا بحب ومانا",
    navHome: "الرئيسية", navStore: "المتجر", navBlog: "المدونة", navAbout: "من أنا", navAccount: "حسابي", navAdmin: "الإدارة", navCustom: "طلبات خاصة 🎨",
    coTitle: "الطلبات الخاصة", coSub: "لوحة، مجسم، ميدالية، مطبوعة… أي شي من أي لعبة أو أنمي — يُصنع خصيصًا إلك.",
    coHow: "شلون تشتغل؟", coStep1: "اكتب كل تفاصيل اللي تريده", coStep2: "طلبك يوصل لآية مباشرة", coStep3: "آية تقرأه وترد عليك بالسعر والمدة",
    coPriceNote: "ما كو سعر ثابت هنا — السعر تحدده آية بعد ما تقرأ طلبك، وترد عليك قبل ما يبدي أي شي. 💜",
    coType: "شنو تريد؟", coTypePh: "لوحة / مجسم / ميدالية / مطبوعة / شي ثاني…",
    coDetails: "التفاصيل كاملة (إلزامي!)",
    coDetailsPh: "مثال: لوحة كانفاس لهورنت من Silksong، حجم A4 ويّا إطار، خلفية بنفسجية، أريدها هدية ومغلفة حلو…",
    coDetailsHint: "الشخصية/اللعبة، الحجم، الألوان، الخامات، الموعد — كل ما زادت التفاصيل، صار السعر والنتيجة أدق!",
    coImage: "صورة مرجعية (اختياري)",
    coNeedDetails: "رجاءً اكتب التفاصيل كاملة (شوية أكثر من هيج!) حتى آية تكَدر تسعّرها 💜",
    coSent: "طلبك وصل لآية! راح تقرأه وترد عليك بالسعر 🎨💜",
    coStoreBanner: "ما لكيت اللي تدور عليه؟", coStoreBannerBtn: "سوّي طلب خاص 🎨",
    coPriceTbd: "يتحدد بعد المراجعة",
    heroTitle1: "أشياء مصنوعة بحب،", heroTitle2: "من ميز آية… لبيتك",
    heroSub: "لوحات مرسومة يدويًا، صناديق ودفاتر ومطبوعات — مستوحاة من الألعاب والأنمي اللي نحبها. كل قطعة مرسومة ومصبوغة وملزوقة بإيد كيمر مدمن كافيين.",
    shopNow: "تصفّح الغنائم", readBlog: "اقرأ المدونة",
    featured: "أحدث الإصدارات", featuredSub: "طازة من ميز الرسم",
    viewAll: "شاهد الكل",
    latestPosts: "آخر منشورات المدونة", latestSub: "يوميات، رسمات وفتح صناديق",
    aboutTitle: "هلا! آني آية 🎮",
    aboutBody: "يوتيوبرية ألعب الألعاب وأرسم هواي، وأحوّل البوسات المفضلة إلى لوحات ودفاتر وكنوز صغيرة مصنوعة يدويًا. كل شي بالمتجر مصنوع بإيدي — ماركرات وحبر وأكريليك وصمغ وكمية مشبوهة من البنفسجي.",
    aboutCta: "تابعني على يوتيوب",
    marquee: ["مرسوم يدويًا", "قطعة وحدة بس", "من كيمر لكيمر", "يوصل بحب", "بدون مشتريات داخلية", "الكمية محدودة"],
    addToCart: "أضف للسلة", soldOut: "غير متوفرة حاليًا 😢", inCart: "بالسلة ✓",
    orderCustom: "تريدها؟ اطلبها كطلب خاص 🎨",
    cart: "السلة", cartEmpty: "سلتك أفرغ من هولونست…", cartEmptySub: "روح اجمع شوية غنائم!",
    total: "المجموع", checkout: "أرسل الطلب 📨",
    orderTitle: "وصلت للنهاية!", orderHint: "المتجر يستقبل الطلبات عبر الرسائل — انسخ طلبك وأرسله على انستغرام أو يوتيوب، وآية راح ترد عليك بتفاصيل الدفع والتوصيل.",
    copyOrder: "انسخ الطلب", copied: "انتسخ! هسه أرسله 💌",
    searchPh: "دوّر على الغنائم…", allCat: "الكل", paintings: "لوحات", crafts: "أشغال يدوية", prints: "مطبوعات", commissions: "طلبات خاصة", drawings: "رسمات", gaming: "كيمنغ",
    ytZone: "ركن اليوتيوب", ytZoneSub: "قصص الألعاب بطريقة آية — شاهدوها هنا مباشرة",
    igZone: "جديد الانستا", igZoneSub: "طازة من ميز الرسم: ريلات وبوستات",
    txtZone: "تدوينات وخربشات", newVideo: "فيديو جديد", latestLabel: "الأحدث",
    noResults: "همم… ماكو شي هنا. جرّب كلمة ثانية؟",
    blogTitle: "المدونة", blogSub: "كل شي ألعبه وأرسمه وألزقه — أحيانًا الثلاثة سوية.",
    storeTitle: "المتجر", storeSub: "كل قطعة مصنوعة يدويًا. إذا خلصت، خلصت — مثل الدروب النادر.",
    accTitle: "حسابك", accSub: "انضم للبارتي حتى تتابع طلباتك وتاخذ الجديد قبل الكل.",
    login: "تسجيل دخول", signup: "إنشاء حساب", logout: "تسجيل خروج",
    name: "الاسم", email: "الإيميل", password: "كلمة السر", confirm: "تأكيد كلمة السر",
    haveAcc: "عندك حساب من قبل؟", noAcc: "جديد هنا؟",
    welcomeBack: "أهلًا بعودتك", memberSince: "عضو منذ",
    errFill: "رجاءً املأ كل الحقول!", errEmail: "الإيميل شكله مو صحيح 🤔", errPassLen: "كلمة السر لازم ٦ أحرف على الأقل", errMatch: "كلمتا السر ما تتطابقان!", errExists: "هذا الإيميل مسجل من قبل — جرّب تسجيل الدخول!", errLogin: "الإيميل أو كلمة السر غلط 😿",
    okSignup: "تم إنشاء الحساب! أهلًا بيك بالبارتي 🎉",
    yourOrders: "قائمة الأمنيات والطلبات جاية قريبًا — حاليًا الطلبات عبر الرسائل 💌",
    adminTitle: "لوحة الإدارة", adminSub: "إدارة المنتجات ومنشورات المدونة والروابط.",
    adminOnly: "هذي المنطقة خاصة بإدارة المتجر. سجّل دخول بحساب الأدمن.",
    tabProducts: "المنتجات", tabPosts: "منشورات المدونة", tabSettings: "الإعدادات",
    addProduct: "+ منتج جديد", addPost: "+ منشور جديد",
    exportData: "⬇ تصدير data.js", exportHint: "التعديلات تنحفظ بهذا المتصفح. صدّر data.js واستبدل assets/js/data.js بالمستودع حتى تظهر للجميع.",
    save: "حفظ", cancel: "إلغاء", edit: "تعديل", del: "حذف", confirmDel: "متأكد من الحذف؟ ماكو ريسباون!",
    thPhoto: "الصورة", thName: "الاسم", thPrice: "السعر", thCat: "الفئة", thStock: "المخزون", thActions: "إجراءات", thDate: "التاريخ", thTitle: "العنوان",
    fPrice: "السعر (دينار عراقي)", fCat: "الفئة", fImg: "الصورة", fImgHint: "رابط أو رفع", fFeatured: "يظهر بالصفحة الرئيسية", fStock: "متوفر",
    fNameEn: "الاسم (انكليزي)", fNameAr: "الاسم (عربي)", fDescEn: "الوصف (انكليزي)", fDescAr: "الوصف (عربي)",
    fTitleEn: "العنوان (انكليزي)", fTitleAr: "العنوان (عربي)", fBodyEn: "النص (انكليزي)", fBodyAr: "النص (عربي)",
    fDate: "التاريخ", fTag: "الوسم", fYoutube: "رابط يوتيوب (اختياري)", fLink: "رابط آخر (اختياري)",
    watchVideo: "▶ شاهد الفيديو", openLink: "🔗 افتح الرابط",
    sYoutube: "رابط يوتيوب", sInstagram: "رابط انستغرام", sTiktok: "رابط تيك توك", sDiscord: "دعوة ديسكورد (اختياري)",
    settingsSaved: "تم حفظ الإعدادات ✓",
    mascotHi: "هلا! آني آية اضغط عليّ!",
    mascotFacts: [
      "كل شي هنا مصنوع يدويًا ١٠٠٪!",
      "البنفسجي علميًا أفضل لون.",
      "متت ٤٧ مرة بيد مالينيا وآني أرسمها.",
      "الستيكرات تلزك أحسن بالحب.",
      "جرّب كود كونامي… بس أكَلك 👀",
      "سيلكسونغ حقيقي وعندي دليل (الصندوق)."
    ],
    mascotCart: "اووه، اختيار حلو!",
    mascotSearchEmpty: "همم، ما لكيتها…",
    mascotKonami: "⬆⬆⬇⬇⬅➡⬅➡🅱🅰 لكيتها!",
    footNote: "مصنوع بـ💜 وماركرات وكمية مو طبيعية من الكهوة.",
    rights: "متجر AyaYa — كل الغنائم مصنوعة يدويًا.",
    newBadge: "جديد", featBadge: "★ مميز",
    by: "بقلم آية", readMore: "اقرأ المزيد ↗", close: "إغلاق",
    accWho: "مسجل دخول باسم", accAdmin: "إنت الأدمن!", goAdmin: "افتح لوحة الإدارة",
    tabTexts: "النصوص", tabImages: "الصور",
    textsHint: "غيّر أي عبارة بالموقع — الانكليزي والعربي يم بعض. الفراغ = استخدام النص الأصلي.",
    searchTexts: "دوّر بالنصوص…",
    mascotEditor: "عبارات الماسكوت (تظهر لما الزوار يضغطون عليها)",
    addPhrase: "+ أضف عبارة", marqueeEditor: "كلمات الشريط المتحرك (وحدة بكل سطر)",
    imagesHint: "بدّل أي صورة بالموقع برفع PNG/JPG (بحدود ٩٠٠KB). لا تنسى تسوي تصدير من فوق بعد ما تخلص!",
    reset: "إرجاع", upload: "رفع",
    imgSlot_logo: "اللوغو (الهيدر والفوتر)", imgSlot_hero: "صورة الواجهة الرئيسية",
    imgSlot_about: "صورة قسم من أنا", imgSlot_mascot: "ماسكوت الزاوية (الأساسية)",
    imgSlot_mascotHappy: "ماسكوت الزاوية (فرحانة)", imgSlot_mascotThinking: "ماسكوت الزاوية (تفكّر)",
    imgSlot_mascotGrumpy: "ماسكوت الزاوية (معصبة)", imgSlot_storeCorner: "صورة زاوية المتجر",
    imgSlot_blogCorner: "صورة زاوية المدونة", imgSlot_accountArt: "صورة صفحة الحساب",
    imgSlot_orderArt: "صورة شاشة الطلب", imgSlot_cartEmpty: "صورة السلة الفارغة",
    tgSend: "دز الطلب 🚀", tgSending: "جاري الإرسال…",
    tgSent: "طلبك وصل لآية! 🎉 راح تتواصل وياك قريبًا 💜",
    tgFail: "ما كَدرنا نرسل تلقائيًا — انسخ الطلب ودزه برسالة 🙏",
    sTgToken: "توكن بوت تيليغرام (من @BotFather)", sTgChatId: "معرف المحادثة (من @userinfobot)",
    tgHint: "بوجود التوكن والمعرف، الطلبات توصل مباشرة لتيليغرامك. ملاحظة: بموقع عام التوكن يظهر للزوار — استخدم بوت مخصص للطلبات بس، وسوّي له revoke من @BotFather إذا صار سوء استخدام.",
    productNotFound: "هذي القطعة اختفت بالظلال… 🌫️", backToStore: "→ رجوع للمتجر",
    relatedTitle: "غنائم ثانية تعجبك",
    fMoreImages: "الصور (الأولى = الغلاف، تكَدر تضيف أكثر من وحدة)", addImage: "+ أضف صورة",
    fYoutubeProd: "فيديو يوتيوب (اختياري — يشتغل بصفحة المنتج)",
    watchOnIg: "📸 افتح بانستغرام", qtyLabel: "الكمية", buyNow: "أضف للسلة",
    fBuyerName: "اسمك", fBuyerPhone: "رقم الهاتف أو يوزر الانستغرام",
    fBuyerNotes: "ملاحظات — العنوان، الألوان، التفاصيل… (اختياري)",
    errNeedContact: "رجاءً اكتب اسمك وطريقة للتواصل وياك 💜",
    orderPreview: "معاينة الطلب (هذا اللي راح يوصل لآية)"
  }
};

let LANG = LS.get("ayaya_lang", "ar");
/* admin wording overrides win over the built-in dictionary */
const getTexts = () => {
  const base = (typeof DEFAULT_TEXTS !== "undefined") ? DEFAULT_TEXTS : { en: {}, ar: {} };
  const saved = LS.get("ayaya_texts", {});
  return { en: { ...base.en, ...(saved.en || {}) }, ar: { ...base.ar, ...(saved.ar || {}) } };
};
const setTexts = v => LS.set("ayaya_texts", v);
const t = k => {
  const ov = getTexts()[LANG]?.[k];
  if (ov !== undefined && ov !== "" && ov !== null) return ov;
  return (I[LANG] && I[LANG][k]) ?? I.en[k] ?? k;
};
const loc = (obj, field) => (obj[LANG] && obj[LANG][field]) || (obj.en && obj.en[field]) || "";

/* prices are in Iraqi Dinar (IQD) */
const money = n => LANG === "ar"
  ? `${Number(n).toLocaleString("en-US")} د.ع`
  : `${Number(n).toLocaleString("en-US")} IQD`;
const moneyAr = n => `${Number(n).toLocaleString("en-US")} د.ع`;

/* replaceable site images */
const getImages = () => ({ ...((typeof DEFAULT_IMAGES !== "undefined") ? DEFAULT_IMAGES : {}), ...LS.get("ayaya_images", {}) });
const setImages = v => LS.set("ayaya_images", v);
const img = slot => getImages()[slot] || "assets/img/logo.png";
/* apply overrides to static <img data-img="slot"> tags */
function applyImages() {
  $$("[data-img]").forEach(el => { el.src = img(el.dataset.img); });
}

function setLang(l) {
  LANG = l;
  LS.set("ayaya_lang", l);
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  renderChrome();
  applyImages();
  if (typeof window.onLangChange === "function") window.onLangChange();
}

/* ---------- content stores (admin can override defaults) ---------- */
const getProducts = () => LS.get("ayaya_products", DEFAULT_PRODUCTS);
const setProducts = p => LS.set("ayaya_products", p);
const getPosts = () => LS.get("ayaya_posts", DEFAULT_POSTS);
const setPosts = p => LS.set("ayaya_posts", p);
const getSettings = () => ({ ...DEFAULT_SETTINGS, ...LS.get("ayaya_settings", {}) });
const setSettings = s => LS.set("ayaya_settings", s);

/* ---------- auth ---------- */
async function hashPass(pass) {
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("ayaya::" + pass));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  } catch { // non-secure context fallback
    let h = 5381; const s = "ayaya::" + pass;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return "djb2_" + (h >>> 0).toString(16);
  }
}

function getUsers() { return LS.get("ayaya_users", []); }
function setUsers(u) { LS.set("ayaya_users", u); }

/* Seed the admin account on first visit (change the password from the Admin panel!) */
async function seedAdmin() {
  const users = getUsers();
  if (!users.some(u => u.isAdmin)) {
    users.push({ name: "Aya", email: "aya@ayaya.store", pass: await hashPass("ayaya123"), isAdmin: true, joined: "2026-01-01" });
    setUsers(users);
  }
}

const currentUser = () => LS.get("ayaya_session", null);
const isAdmin = () => !!(currentUser() && currentUser().isAdmin);

function logout() {
  localStorage.removeItem("ayaya_session");
  location.href = "index.html";
}

/* ---------- cart ---------- */
const getCart = () => LS.get("ayaya_cart", []);
const setCart = c => { LS.set("ayaya_cart", c); updateCartBadge(); };

function addToCart(id) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  setCart(cart);
  const badge = $("#cart-count");
  if (badge) { badge.classList.remove("pop"); void badge.offsetWidth; badge.classList.add("pop"); }
  mascotSay(t("mascotCart"), "mascotHappy");
  toast("🛒 " + t("inCart"));
  renderCartDrawer();
}

function cartQty() { return getCart().reduce((n, i) => n + i.qty, 0); }

function updateCartBadge() {
  const el = $("#cart-count");
  if (el) el.textContent = cartQty();
}

/* ---------- chrome (header / footer / drawer / mascot) ---------- */
const PAGE = location.pathname.split("/").pop() || "index.html";

function navLink(href, key) {
  const active = PAGE === href ? " class=\"active\"" : "";
  return `<a href="${href}"${active}>${t(key)}</a>`;
}

function renderChrome() {
  const user = currentUser();
  $("#site-header").innerHTML = `
    <nav class="nav container">
      <a class="brand" href="index.html">
        <img src="${esc(img("logo"))}" alt="AyaYa">
        <span>Aya<span class="ya">Ya</span></span>
      </a>
      <button class="burger" id="burger" aria-label="menu">☰</button>
      <div class="nav-links" id="nav-links">
        ${navLink("index.html", "navHome")}
        ${navLink("store.html", "navStore")}
        ${navLink("blog.html", "navBlog")}
        ${navLink("custom.html", "navCustom")}
        ${navLink("account.html", "navAccount")}
        ${isAdmin() ? navLink("admin.html", "navAdmin") : ""}
      </div>
      <div class="nav-actions">
        <button class="lang-btn" id="lang-btn">${LANG === "en" ? "عربي" : "EN"}</button>
        <button class="cart-btn" id="cart-btn">🛒<span class="cart-count" id="cart-count">${cartQty()}</span></button>
      </div>
    </nav>`;

  const s = getSettings();
  $("#site-footer").innerHTML = `
    <div class="container">
      <div class="foot-grid">
        <a class="brand" href="index.html"><img src="${esc(img("logo"))}" alt=""><span>Aya<span class="ya">Ya</span></span></a>
        <div class="socials">
          ${s.youtube ? `<a href="${esc(s.youtube)}" target="_blank" rel="noopener">▶ YouTube</a>` : ""}
          ${s.instagram ? `<a href="${esc(s.instagram)}" target="_blank" rel="noopener">📸 Instagram</a>` : ""}
          ${s.tiktok ? `<a href="${esc(s.tiktok)}" target="_blank" rel="noopener">🎵 TikTok</a>` : ""}
          ${s.discord ? `<a href="${esc(s.discord)}" target="_blank" rel="noopener">💬 Discord</a>` : ""}
        </div>
        <p class="note">${t("footNote")}<br>© 2026 ${t("rights")}</p>
      </div>
    </div>`;

  // drawer + toast + mascot (create once)
  if (!$("#overlay")) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="overlay" id="overlay"></div>
      <aside class="drawer" id="cart-drawer" aria-label="cart">
        <div class="drawer-head"><h3>🛒 <span id="cart-title"></span></h3>
        <button class="icon-btn" id="cart-close">✕</button></div>
        <div class="drawer-body" id="cart-body"></div>
        <div class="drawer-foot" id="cart-foot"></div>
      </aside>
      <div id="mascot-helper">
        <div id="mascot-bubble"></div>
        <img id="mascot-img" src="${esc(img("mascot"))}" alt="Aya mascot">
      </div>
      <div id="toast"></div>`);
    $("#overlay").addEventListener("click", closeDrawer);
    $("#cart-close").addEventListener("click", closeDrawer);
    $("#mascot-img").addEventListener("click", () => {
      const facts = t("mascotFacts");
      if (Array.isArray(facts) && facts.length) mascotSay(facts[Math.floor(Math.random() * facts.length)]);
    });
  }
  $("#cart-title").textContent = t("cart");

  $("#lang-btn").addEventListener("click", () => setLang(LANG === "en" ? "ar" : "en"));
  $("#cart-btn").addEventListener("click", openDrawer);
  $("#burger").addEventListener("click", () => $("#nav-links").classList.toggle("open"));
  updateCartBadge();
  renderCartDrawer();
}

/* ---------- cart drawer ---------- */
function openDrawer() { $("#overlay").classList.add("open"); $("#cart-drawer").classList.add("open"); renderCartDrawer(); }
function closeDrawer() { $("#overlay").classList.remove("open"); $("#cart-drawer").classList.remove("open"); }

function renderCartDrawer() {
  const body = $("#cart-body"), foot = $("#cart-foot");
  if (!body) return;
  const cart = getCart();
  const products = getProducts();
  if (!cart.length) {
    body.innerHTML = `<div class="empty-note">
      <img src="${esc(img("cartEmpty"))}" alt="">
      <p><b>${t("cartEmpty")}</b></p><p>${t("cartEmptySub")}</p></div>`;
    foot.innerHTML = "";
    return;
  }
  let total = 0;
  body.innerHTML = cart.map(ci => {
    const p = products.find(x => x.id === ci.id);
    if (!p) return "";
    total += p.price * ci.qty;
    return `<div class="cart-item">
      <img src="${esc(p.img)}" alt="">
      <div class="ci-info">
        <h4>${esc(loc(p, "name"))}</h4>
        <div class="ci-price">${money(p.price)} × ${ci.qty}</div>
        <div class="qty">
          <button data-dec="${p.id}">−</button><b>${ci.qty}</b><button data-inc="${p.id}">+</button>
        </div>
      </div>
      <button class="icon-btn" data-rm="${p.id}" title="remove">🗑</button>
    </div>`;
  }).join("");
  foot.innerHTML = `
    <div class="total-row"><span>${t("total")}</span><span class="price">${money(total)}</span></div>
    <button class="btn btn-gold" id="checkout-btn">${t("checkout")}</button>`;

  $$("[data-inc]", body).forEach(b => b.addEventListener("click", () => changeQty(b.dataset.inc, 1)));
  $$("[data-dec]", body).forEach(b => b.addEventListener("click", () => changeQty(b.dataset.dec, -1)));
  $$("[data-rm]", body).forEach(b => b.addEventListener("click", () => { setCart(getCart().filter(i => i.id !== b.dataset.rm)); renderCartDrawer(); }));
  $("#checkout-btn").addEventListener("click", showOrderModal);
}

function changeQty(id, d) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  setCart(cart);
  renderCartDrawer();
}

/* The order message is always in Arabic (that's what Aya reads),
   and structured to be as clear as possible. */
function buildOrderText(buyer) {
  const cart = getCart(), products = getProducts();
  let total = 0, count = 0, n = 0;
  const lines = cart.map(ci => {
    const p = products.find(x => x.id === ci.id);
    if (!p) return "";
    const sub = p.price * ci.qty;
    total += sub; count += ci.qty; n++;
    const name = (p.ar && p.ar.name) || p.en.name;
    return `${n}) ${name}\n    الكمية: ${ci.qty} × ${moneyAr(p.price)} = ${moneyAr(sub)}`;
  }).filter(Boolean).join("\n\n");
  const user = currentUser();
  const when = new Intl.DateTimeFormat("ar-IQ", { timeZone: "Asia/Baghdad", dateStyle: "full", timeStyle: "short" }).format(new Date());
  const sep = "━━━━━━━━━━━━━━";
  return [
    "🛒 طلب جديد — متجر AyaYa",
    sep,
    `📦 المنتجات (${count} ${count === 1 ? "قطعة" : "قطع"}):`,
    "",
    lines,
    sep,
    `💰 المجموع الكلي: ${moneyAr(total)}`,
    sep,
    `👤 الاسم: ${buyer.name || "—"}`,
    `📱 التواصل: ${buyer.phone || "—"}`,
    buyer.notes ? `📝 ملاحظات: ${buyer.notes}` : null,
    `📧 حساب الموقع: ${user ? `${user.name} (${user.email})` : "زائر بدون حساب"}`,
    `🕐 وقت الطلب: ${when} (بغداد)`
  ].filter(x => x !== null).join("\n");
}

function showOrderModal() {
  const cart = getCart(), products = getProducts(), s = getSettings();
  if (!cart.length) return;
  const user = currentUser();

  const body = $("#cart-body"), foot = $("#cart-foot");
  const canBot = s.tgToken && s.tgChatId;
  body.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px">
    <img src="${esc(img("orderArt"))}" style="width:110px;margin-inline:auto" alt="">
    <h3 style="text-align:center">${t("orderTitle")}</h3>
    <p style="color:var(--muted);text-align:center">${t("orderHint")}</p>
    <div class="field" style="margin:0"><label>👤 ${t("fBuyerName")}</label>
      <input id="buyer-name" maxlength="60" value="${esc(user ? user.name : "")}"></div>
    <div class="field" style="margin:0"><label>📱 ${t("fBuyerPhone")}</label>
      <input id="buyer-phone" maxlength="60" placeholder="07xx xxx xxxx / @insta"></div>
    <div class="field" style="margin:0"><label>📝 ${t("fBuyerNotes")}</label>
      <textarea id="buyer-notes" rows="2" maxlength="300"></textarea></div>
    <label style="color:var(--purple-soft);font-weight:700;font-size:.92rem">${t("orderPreview")}</label>
    <textarea readonly id="order-text" dir="rtl" style="width:100%;min-height:210px;background:var(--bg-2);color:var(--text);border:1px solid var(--line);border-radius:14px;padding:12px;font-family:inherit;font-size:.92rem"></textarea>
    ${canBot ? `<button class="btn btn-gold" id="tg-send">${t("tgSend")}</button>` : ""}
    <button class="btn btn-primary" id="copy-order">${t("copyOrder")}</button>
    <div class="socials" style="justify-content:center">
      <a href="${esc(s.instagram)}" target="_blank" rel="noopener">📸 Instagram</a>
      <a href="${esc(s.youtube)}" target="_blank" rel="noopener">▶ YouTube</a>
    </div></div>`;
  foot.innerHTML = "";

  const buyer = () => ({
    name: $("#buyer-name").value.trim(),
    phone: $("#buyer-phone").value.trim(),
    notes: $("#buyer-notes").value.trim()
  });
  const refreshPreview = () => { $("#order-text").value = buildOrderText(buyer()); };
  ["buyer-name", "buyer-phone", "buyer-notes"].forEach(id => $("#" + id).addEventListener("input", refreshPreview));
  refreshPreview();

  const requireContact = () => {
    const b = buyer();
    if (!b.name || !b.phone) {
      toast(t("errNeedContact"));
      mascotSay(t("errNeedContact"), "mascotThinking");
      ($("#buyer-name").value ? $("#buyer-phone") : $("#buyer-name")).focus();
      return null;
    }
    return b;
  };

  $("#copy-order").addEventListener("click", async () => {
    if (!requireContact()) return;
    const ta = $("#order-text");
    ta.select();
    try { await navigator.clipboard.writeText(ta.value); } catch { document.execCommand("copy"); }
    $("#copy-order").textContent = t("copied");
    confettiBurst();
  });
  if (canBot) $("#tg-send").addEventListener("click", async () => {
    if (!requireContact()) return;
    const btn = $("#tg-send");
    btn.disabled = true;
    btn.textContent = t("tgSending");
    try {
      const res = await fetch(`https://api.telegram.org/bot${encodeURIComponent(s.tgToken)}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: s.tgChatId, text: $("#order-text").value })
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.description || "telegram error");
      btn.textContent = "✓ " + t("tgSent");
      mascotSay(t("tgSent"), "mascotHappy");
      setCart([]);
      confettiBurst();
      setTimeout(closeDrawer, 2600);
    } catch (e) {
      btn.disabled = false;
      btn.textContent = t("tgSend");
      toast(t("tgFail"));
    }
  });
}

/* ---------- toast & mascot ---------- */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

let mascotTimer;
function mascotSay(msg, pose) {
  const bubble = $("#mascot-bubble"), mimg = $("#mascot-img");
  if (!bubble) return;
  if (pose) mimg.src = img(pose);
  bubble.textContent = msg;
  bubble.classList.add("show");
  clearTimeout(mascotTimer);
  mascotTimer = setTimeout(() => {
    bubble.classList.remove("show");
    mimg.src = img("mascot");
  }, 3500);
}

/* ---------- sparkle cursor trail ---------- */
(function sparkles() {
  const canvas = document.createElement("canvas");
  canvas.id = "sparkle-canvas";
  document.addEventListener("DOMContentLoaded", () => document.body.appendChild(canvas));
  const ctx = canvas.getContext("2d");
  let parts = [], W, H;
  const resize = () => { W = canvas.width = innerWidth; H = canvas.height = innerHeight; };
  addEventListener("resize", resize); resize();
  let last = 0;
  addEventListener("pointermove", e => {
    const now = performance.now();
    if (now - last < 40) return;
    last = now;
    parts.push({ x: e.clientX, y: e.clientY, vx: (Math.random() - .5) * .8, vy: -.6 - Math.random(), life: 1, size: 2 + Math.random() * 3, hue: Math.random() < .8 ? 270 : 45 });
    if (parts.length > 60) parts.shift();
  });
  (function tick() {
    ctx.clearRect(0, 0, W, H);
    parts = parts.filter(p => p.life > 0);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy; p.life -= .022;
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.fillStyle = `hsl(${p.hue} 90% 70%)`;
      ctx.beginPath();
      const s = p.size * p.life;
      ctx.moveTo(p.x, p.y - s * 2); ctx.lineTo(p.x + s, p.y); ctx.lineTo(p.x, p.y + s * 2); ctx.lineTo(p.x - s, p.y);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  })();
})();

/* ---------- konami code ---------- */
(function konami() {
  const seq = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let i = 0;
  addEventListener("keydown", e => {
    i = (e.key === seq[i]) ? i + 1 : (e.key === seq[0] ? 1 : 0);
    if (i === seq.length) {
      i = 0;
      mascotSay(t("mascotKonami"), "mascotGrumpy");
      controllerRain();
    }
  });
})();

function controllerRain() {
  const emojis = ["🎮", "💜", "🕹", "⭐", "👾", "🎨"];
  for (let n = 0; n < 36; n++) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "rain-item";
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = Math.random() * 100 + "vw";
      el.style.animationDuration = (2 + Math.random() * 2.5) + "s";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 5000);
    }, n * 90);
  }
}

function confettiBurst() { controllerRain(); }

/* ---------- reveal on scroll ---------- */
function watchReveals() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("shown"); io.unobserve(en.target); } });
  }, { threshold: .12 });
  $$(".reveal").forEach(el => io.observe(el));
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", async () => {
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === "ar" ? "rtl" : "ltr";
  await seedAdmin();
  renderChrome();
  applyImages();
  watchReveals();
  if (!sessionStorage.getItem("ayaya_greeted")) {
    sessionStorage.setItem("ayaya_greeted", "1");
    setTimeout(() => mascotSay(t("mascotHi")), 1600);
  }
});
