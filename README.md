# X TRADING (Orange Edition)

Virtual-money paper-trading simulator. No real orders are placed.

## Publish on GitHub Pages (copy-paste, works from a phone)
1. GitHub → **New repository** (Public), e.g. `x-trading`.
2. **Add file → Create new file**, name it `index.html`, paste the full contents of `index.html`, **Commit**.
3. Optional (installable app): repeat for `manifest.json`, `icon.svg`, `service-worker.js`.
4. **Settings → Pages → Deploy from a branch → main / (root) → Save**.
5. Open `https://YOUR-USERNAME.github.io/x-trading/` after ~1 minute.

## Required for login to work
- Firebase Console → Authentication → Settings → **Authorized domains** → add `YOUR-USERNAME.github.io`.
- Firebase Console → Firestore → Rules → paste `firestore.rules` → **Publish**.
- Email/Password and Google providers must be enabled.

## Live prices
Quotes come from the Cloudflare Worker set in `API_BASE` inside `index.html`. Test `<worker-url>/api/health` and `/api/quote?symbol=TCS:NSE` in a browser. Without a working Worker the app shows demo prices and says so.

## Limits
Intraday candles (1m/5m/15m) and NIFTY/SENSEX tiles are demo data. A green dot next to a symbol means its price is a live quote.
