MVP

- User registration
- User Sign in

- Responsive design
- Display top 100 coins
- Display chart with Chart.JS
- Top volume increase
- Cryptocurrency news


BACKLOG
- Coin Portfolio
- Password Recovery
- Connect to NiceHASH to view miner status


CLIENT

- / - The homepage
- routerLink /login
- routerLink /signup
- routerLink /topcoins
- routerLink /topcoins/:id
- routerLink /gainers
- routerLink /gainers/:id
- routerLink /cryptocurrency-news
- routerLink /portfolio


API

- https://api.coinmarketcap.com/v2/ticker/
- https://api.coinmarketcap.com/v2/global/
- https://min-api.cryptocompare.com/data/histoday?fsym=`${symbol}`&tsym=USD&limit=10
- https://min-api.cryptocompare.com/data/v2/news/?lang=EN


ROUTES

- POST /auth/signup -- creates a new account
- POST /auth/login -- connects the user to his/her account
- POST /auth/logout -- removes user from session
- GET /auth/me -- returns current user in session (if any)

- GET /topcoins -- retruns top 100 coins
- GET /topcoins/:id -- retruns one specific coin with data visualization + general information
- GET /gainers -- retruns top gainers
- GET /gainers:/id -- retruns one specific coin with data visualization + general information
-GET /cryptocurrency-news -- returns 50 articles of news related to the cryptocurrency industry




SERVICES

- Auth.service()
- Crypto.service()
- Crypto-Chart.service()
- News.service()



This was my final project for the bootcamp I attended. This project was made in 10 days.
