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
    navHome: "Home", navStore: "Store", navBlog: "Blog", navAbout: "About", navAccount: "Account", navAdmin: "Admin",
    heroTitle1: "Handcrafted loot,", heroTitle2: "straight from the gloom",
    heroSub: "Hand-painted canvases, hand-made boxes, journals and stickers — inspired by the games and anime we love. Every piece is drawn, painted and glued together by one very caffeinated gamer.",
    shopNow: "Browse the loot ✦", readBlog: "Read the blog",
    featured: "Featured drops", featuredSub: "Fresh from the drawing desk",
    viewAll: "View everything",
    latestPosts: "Latest from the blog", latestSub: "Devlogs, doodles & unboxings",
    aboutTitle: "Hi, I'm Aya! 🎮",
    aboutBody: "I'm a YouTuber who plays through games, draws way too much, and turns favorite bosses into paintings, journals and little handmade treasures. Everything in this store is made by hand — markers, ink, acrylics, glue, and a suspicious amount of purple.",
    aboutCta: "Watch on YouTube",
    marquee: ["hand-painted", "one-of-a-kind", "gamer-made", "ships with love", "no microtransactions", "drops are limited"],
    addToCart: "Add to cart", soldOut: "Sold out", inCart: "In cart ✓",
    cart: "Cart", cartEmpty: "Your cart is emptier than Hallownest…", cartEmptySub: "Go grab some loot!",
    total: "Total", checkout: "Send order 📨",
    orderTitle: "Almost there!", orderHint: "This store takes orders by DM — copy your order below and send it on Instagram or YouTube, and Aya will reply with payment & shipping details.",
    copyOrder: "Copy order", copied: "Copied! Now send it 💌",
    searchPh: "Search the loot…", allCat: "All", paintings: "Paintings", crafts: "Crafts", stickers: "Stickers", commissions: "Commissions", drawings: "Drawings", gaming: "Gaming",
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
    fPrice: "Price (USD)", fCat: "Category", fImg: "Image", fImgHint: "URL or upload", fFeatured: "Show on home page", fStock: "In stock",
    fNameEn: "Name (English)", fNameAr: "Name (Arabic)", fDescEn: "Description (English)", fDescAr: "Description (Arabic)",
    fTitleEn: "Title (English)", fTitleAr: "Title (Arabic)", fBodyEn: "Text (English)", fBodyAr: "Text (Arabic)",
    fDate: "Date", fTag: "Tag", fYoutube: "YouTube link (optional)", fLink: "Other link (optional)",
    watchVideo: "▶ Watch video", openLink: "🔗 Open link",
    sYoutube: "YouTube URL", sInstagram: "Instagram URL", sTiktok: "TikTok URL", sDiscord: "Discord invite (optional)",
    settingsSaved: "Settings saved ✓",
    mascotHi: "Hi! I'm Aya ✦ click me!",
    mascotFacts: [
      "Everything here is 100% handmade!",
      "Purple is scientifically the best color.",
      "I died 47 times to Malenia while painting her.",
      "Stickers stick better with love.",
      "Try the Konami code… just saying 👀",
      "Silksong is real and I have proof (the box)."
    ],
    mascotCart: "Ooh, nice pick! ✦",
    mascotSearchEmpty: "Hmm, can't find that…",
    mascotKonami: "⬆⬆⬇⬇⬅➡⬅➡🅱🅰 YOU FOUND IT!",
    footNote: "Made with 💜, markers and way too much coffee.",
    rights: "AyaYa Store — all loot handcrafted.",
    newBadge: "NEW ✦", featBadge: "★ Featured",
    by: "by Aya", readMore: "Read more ↗", close: "Close",
    accWho: "Logged in as", accAdmin: "You're the admin! ✦", goAdmin: "Open admin panel"
  },
  ar: {
    brandTag: "مصنوع يدويًا بحب ومانا",
    navHome: "الرئيسية", navStore: "المتجر", navBlog: "المدونة", navAbout: "من أنا", navAccount: "حسابي", navAdmin: "الإدارة",
    heroTitle1: "غنائم مصنوعة يدويًا،", heroTitle2: "مباشرة من الظلال",
    heroSub: "لوحات مرسومة يدويًا، صناديق ودفاتر وستيكرات — مستوحاة من الألعاب والأنمي اللي نحبها. كل قطعة مرسومة ومصبوغة وملزوقة بإيد كيمر مدمن كافيين.",
    shopNow: "تصفّح الغنائم ✦", readBlog: "اقرأ المدونة",
    featured: "أحدث الإصدارات", featuredSub: "طازة من ميز الرسم",
    viewAll: "شاهد الكل",
    latestPosts: "آخر منشورات المدونة", latestSub: "يوميات، رسمات وفتح صناديق",
    aboutTitle: "هلا! آني آية 🎮",
    aboutBody: "يوتيوبرية ألعب الألعاب وأرسم هواي، وأحوّل البوسات المفضلة إلى لوحات ودفاتر وكنوز صغيرة مصنوعة يدويًا. كل شي بالمتجر مصنوع بإيدي — ماركرات وحبر وأكريليك وصمغ وكمية مشبوهة من البنفسجي.",
    aboutCta: "تابعني على يوتيوب",
    marquee: ["مرسوم يدويًا", "قطعة وحدة بس", "من كيمر لكيمر", "يوصل بحب", "بدون مشتريات داخلية", "الكمية محدودة"],
    addToCart: "أضف للسلة", soldOut: "نفذت", inCart: "بالسلة ✓",
    cart: "السلة", cartEmpty: "سلتك أفرغ من هولونست…", cartEmptySub: "روح اجمع شوية غنائم!",
    total: "المجموع", checkout: "أرسل الطلب 📨",
    orderTitle: "وصلت للنهاية!", orderHint: "المتجر يستقبل الطلبات عبر الرسائل — انسخ طلبك وأرسله على انستغرام أو يوتيوب، وآية راح ترد عليك بتفاصيل الدفع والتوصيل.",
    copyOrder: "انسخ الطلب", copied: "انتسخ! هسه أرسله 💌",
    searchPh: "دوّر على الغنائم…", allCat: "الكل", paintings: "لوحات", crafts: "أشغال يدوية", stickers: "ستيكرات", commissions: "طلبات خاصة", drawings: "رسمات", gaming: "كيمنغ",
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
    fPrice: "السعر (دولار)", fCat: "الفئة", fImg: "الصورة", fImgHint: "رابط أو رفع", fFeatured: "يظهر بالصفحة الرئيسية", fStock: "متوفر",
    fNameEn: "الاسم (انكليزي)", fNameAr: "الاسم (عربي)", fDescEn: "الوصف (انكليزي)", fDescAr: "الوصف (عربي)",
    fTitleEn: "العنوان (انكليزي)", fTitleAr: "العنوان (عربي)", fBodyEn: "النص (انكليزي)", fBodyAr: "النص (عربي)",
    fDate: "التاريخ", fTag: "الوسم", fYoutube: "رابط يوتيوب (اختياري)", fLink: "رابط آخر (اختياري)",
    watchVideo: "▶ شاهد الفيديو", openLink: "🔗 افتح الرابط",
    sYoutube: "رابط يوتيوب", sInstagram: "رابط انستغرام", sTiktok: "رابط تيك توك", sDiscord: "دعوة ديسكورد (اختياري)",
    settingsSaved: "تم حفظ الإعدادات ✓",
    mascotHi: "هلا! آني آية ✦ اضغط عليّ!",
    mascotFacts: [
      "كل شي هنا مصنوع يدويًا ١٠٠٪!",
      "البنفسجي علميًا أفضل لون.",
      "متت ٤٧ مرة بيد مالينيا وآني أرسمها.",
      "الستيكرات تلزك أحسن بالحب.",
      "جرّب كود كونامي… بس أكَلك 👀",
      "سيلكسونغ حقيقي وعندي دليل (الصندوق)."
    ],
    mascotCart: "اووه، اختيار حلو! ✦",
    mascotSearchEmpty: "همم، ما لكيتها…",
    mascotKonami: "⬆⬆⬇⬇⬅➡⬅➡🅱🅰 لكيتها!",
    footNote: "مصنوع بـ💜 وماركرات وكمية مو طبيعية من الكهوة.",
    rights: "متجر AyaYa — كل الغنائم مصنوعة يدويًا.",
    newBadge: "جديد ✦", featBadge: "★ مميز",
    by: "بقلم آية", readMore: "اقرأ المزيد ↗", close: "إغلاق",
    accWho: "مسجل دخول باسم", accAdmin: "إنت الأدمن! ✦", goAdmin: "افتح لوحة الإدارة"
  }
};

let LANG = LS.get("ayaya_lang", "en");
const t = k => (I[LANG] && I[LANG][k]) ?? I.en[k] ?? k;
const loc = (obj, field) => (obj[LANG] && obj[LANG][field]) || (obj.en && obj.en[field]) || "";

function setLang(l) {
  LANG = l;
  LS.set("ayaya_lang", l);
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  renderChrome();
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
  mascotSay(t("mascotCart"), "oc-giving.png");
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
        <img src="assets/img/logo.png" alt="AyaYa">
        <span>Aya<span class="ya">Ya</span> ✦</span>
      </a>
      <button class="burger" id="burger" aria-label="menu">☰</button>
      <div class="nav-links" id="nav-links">
        ${navLink("index.html", "navHome")}
        ${navLink("store.html", "navStore")}
        ${navLink("blog.html", "navBlog")}
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
        <a class="brand" href="index.html"><img src="assets/img/logo.png" alt=""><span>Aya<span class="ya">Ya</span></span></a>
        <div class="socials">
          <a href="${esc(s.youtube)}" target="_blank" rel="noopener">▶ YouTube</a>
          <a href="${esc(s.instagram)}" target="_blank" rel="noopener">📸 Instagram</a>
          <a href="${esc(s.tiktok)}" target="_blank" rel="noopener">🎵 TikTok</a>
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
        <img id="mascot-img" src="assets/img/oc-pointing-up.png" alt="Aya mascot">
      </div>
      <div id="toast"></div>`);
    $("#overlay").addEventListener("click", closeDrawer);
    $("#cart-close").addEventListener("click", closeDrawer);
    $("#mascot-img").addEventListener("click", () => {
      const facts = t("mascotFacts");
      mascotSay(facts[Math.floor(Math.random() * facts.length)]);
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
      <img src="assets/img/oc-thinking.png" alt="">
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
        <div class="ci-price">$${p.price} × ${ci.qty}</div>
        <div class="qty">
          <button data-dec="${p.id}">−</button><b>${ci.qty}</b><button data-inc="${p.id}">+</button>
        </div>
      </div>
      <button class="icon-btn" data-rm="${p.id}" title="remove">🗑</button>
    </div>`;
  }).join("");
  foot.innerHTML = `
    <div class="total-row"><span>${t("total")}</span><span class="price">$${total}</span></div>
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

function showOrderModal() {
  const cart = getCart(), products = getProducts(), s = getSettings();
  if (!cart.length) return;
  let total = 0;
  const lines = cart.map(ci => {
    const p = products.find(x => x.id === ci.id);
    if (!p) return "";
    total += p.price * ci.qty;
    return `• ${loc(p, "name")} ×${ci.qty} — $${p.price * ci.qty}`;
  }).join("\n");
  const user = currentUser();
  const orderText = `🛍 AyaYa Store order:\n${lines}\n${t("total")}: $${total}` + (user ? `\n👤 ${user.name}` : "");

  const body = $("#cart-body"), foot = $("#cart-foot");
  body.innerHTML = `<div style="display:flex;flex-direction:column;gap:14px">
    <img src="assets/img/oc-giving.png" style="width:120px;margin-inline:auto" alt="">
    <h3 style="text-align:center">${t("orderTitle")}</h3>
    <p style="color:var(--muted);text-align:center">${t("orderHint")}</p>
    <textarea readonly id="order-text" style="width:100%;min-height:140px;background:var(--bg-2);color:var(--text);border:1px solid var(--line);border-radius:14px;padding:12px;font-family:inherit">${esc(orderText)}</textarea>
    <button class="btn btn-primary" id="copy-order">${t("copyOrder")}</button>
    <div class="socials" style="justify-content:center">
      <a href="${esc(s.instagram)}" target="_blank" rel="noopener">📸 Instagram</a>
      <a href="${esc(s.youtube)}" target="_blank" rel="noopener">▶ YouTube</a>
    </div></div>`;
  foot.innerHTML = "";
  $("#copy-order").addEventListener("click", async () => {
    const ta = $("#order-text");
    ta.select();
    try { await navigator.clipboard.writeText(ta.value); } catch { document.execCommand("copy"); }
    $("#copy-order").textContent = t("copied");
    confettiBurst();
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
  const bubble = $("#mascot-bubble"), img = $("#mascot-img");
  if (!bubble) return;
  if (pose) img.src = "assets/img/" + pose;
  bubble.textContent = msg;
  bubble.classList.add("show");
  clearTimeout(mascotTimer);
  mascotTimer = setTimeout(() => {
    bubble.classList.remove("show");
    img.src = "assets/img/oc-pointing-up.png";
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
      mascotSay(t("mascotKonami"), "oc-grumpy.png");
      controllerRain();
    }
  });
})();

function controllerRain() {
  const emojis = ["🎮", "✦", "💜", "🕹", "⭐", "👾"];
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
  watchReveals();
  if (!sessionStorage.getItem("ayaya_greeted")) {
    sessionStorage.setItem("ayaya_greeted", "1");
    setTimeout(() => mascotSay(t("mascotHi")), 1600);
  }
});
