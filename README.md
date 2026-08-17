# AyaYa Store ✦ 💜

A fun, handcrafted-goods store + blog (مدونة) for **Aya** — YouTuber, gamer and artist.
Hand-painted canvases, handmade boxes, journals and stickers inspired by games & anime.

**Bilingual** (English / عربي with full RTL), Vex-purple themed, and full of little
surprises (click the mascot, try the Konami code ⬆⬆⬇⬇⬅➡⬅➡BA).

🔗 Live: https://ausama0.github.io/ayaya-store/
▶ YouTube: https://www.youtube.com/@AyaYa.7 · 📸 Instagram: https://www.instagram.com/ayaya.str/

## Pages

| Page | What it does |
|---|---|
| `index.html` | Home — hero, featured drops, about Aya, latest blog posts |
| `store.html` | Store with search, category filters and a cart drawer |
| `product.html?id=…` | Product page — photo gallery, quantity, optional YouTube video |
| `blog.html` | The blog (المدونة) — posts with photos, YouTube & Instagram embeds |
| `account.html` | Create an account / log in |
| `admin.html` | Admin panel — products, posts, texts, images, links, Telegram |

## Admin access

Log in on the **Account** page with the seeded admin account:

- Email: `aya@ayaya.store`
- Password: `ayaya123`

⚠️ **Change the password right away** from Admin → Settings.

### What the admin can edit

- **Products** — add/edit/delete, multiple photos per product (upload or URL),
  price, category, stock, optional YouTube video on the product page.
- **Blog posts** — bilingual text, photo, YouTube embed, Instagram embed, links.
- **Texts** — every wording on the site, English & Arabic side by side,
  plus the mascot's click-phrases and the moving banner words.
- **Images** — replace any site image (logo, hero, mascot poses, corner art…)
  by uploading a PNG/JPG.
- **Settings** — social links, Telegram ordering, admin password.

### How content editing works

This site is 100% static (perfect for GitHub Pages), so there is no server database:

- Accounts, carts and admin edits live in each visitor's **browser (localStorage)**.
- Admin edits are visible only in *your* browser until you press
  **⬇ Export data.js** in the admin panel, then replace `assets/js/data.js`
  in the repo with the downloaded file and push. That publishes your changes for everyone.

## Ordering (Telegram bot 🚀)

Checkout builds an order message. If a **Telegram bot token + chat id** are set in
Admin → Settings, the customer can press one button and the order is delivered
straight to Aya's Telegram. There is also a copy-the-order fallback plus
Instagram/YouTube/Telegram DM buttons.

Setup:
1. Create a bot with **@BotFather** → get the token.
2. Message your bot once, then get your chat id from **@userinfobot**
   (or the site owner can read it from the bot's `getUpdates`).
3. Put both in Admin → Settings, Export, and push.

> ⚠️ On a static site the bot token is visible to visitors. Use a bot created
> *only* for order notifications, and `/revoke` it in BotFather if it's abused.

## Run locally

Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8080
```

Made with 💜, markers, and way too much coffee.
