# AyaYa Store ✦ 💜

A fun, handcrafted-goods store + blog (مدونة) for **Aya** — YouTuber, gamer and artist.
Hand-painted canvases, handmade boxes, journals and stickers inspired by games & anime.

**Bilingual** (English / عربي with full RTL), Vex-purple themed, and full of little
surprises (click the mascot, try the Konami code ⬆⬆⬇⬇⬅➡⬅➡BA).

## Pages

| Page | What it does |
|---|---|
| `index.html` | Home — hero, featured drops, about Aya, latest blog posts |
| `store.html` | Store with search, category filters and a cart drawer |
| `blog.html` | The blog (المدونة) — posts with photos, YouTube embeds & links |
| `account.html` | Create an account / log in |
| `admin.html` | Admin panel — manage products, posts, links & password |

## Admin access

Log in on the **Account** page with the seeded admin account:

- Email: `aya@ayaya.store`
- Password: `ayaya123`

⚠️ **Change the password right away** from Admin → Settings.

### How content editing works

This site is 100% static (perfect for GitHub Pages), so there is no server database:

- Accounts, carts and admin edits live in each visitor's **browser (localStorage)**.
- Admin edits are visible only in *your* browser until you press
  **⬇ Export data.js** in the admin panel, then replace `assets/js/data.js`
  in the repo with the downloaded file and push. That publishes your changes for everyone.

## Ordering

There's no payment processor — checkout builds a ready-to-send order message the
customer copies and DMs to you on Instagram/YouTube. Set your real social links in
**Admin → Settings** (then export + push so they go live).

## Run locally

Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8080
```

Made with 💜, markers, and way too much coffee.
