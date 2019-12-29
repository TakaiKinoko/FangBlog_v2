---
title: "Notes From The Concepts and Practice of Mathematical Finance -- 1. Risk"
category: "Mathematical Finance"
cover: finance.jpg
author: Fang 
---

## 1. What is risk

Every transaction can be viewed as the buying and selling of risk.

Risk can be regarded as a synonym for __uncertainty__.

Absence of risk:

* A riskless asset is one that has a precisely determined future value. 

* Example: government bond? -- but the government can renege on its promise to pay (known as defaulting).

Importance of riskless assest:

* Example: financial institutions fund pensions by buying long-maturity government bonds and using the interest coupons to pay the pension. If there's a shortage of long-maturity bonds, pensions will become harder to fund and ultimately smaller.

Risky asset:

* Of uncertain future value.

* Riskiness: the asset can return less than the same amount invested in a riskless government bond for the same period.

## 2. Market efficiency

Key words: 
* Markov property
* hedging

### Hypothesis:
* In a free market, all available information about an asset is already included in its price. 
* Therefore there's no such a thing as a good buy. The only value an asset has is its market value.

The hypothesis only works if some does __not__ believe in it. (Ten dollar bill in the gutter and two economists story. The one who picks up the bill is the non-believer)

The hypothesis is sufficiently correct that we can work under the assumption that it is true.

### __Indications__:

* it's pointless to try to predict the future price of a share by looking at graphs of its past prices. All this information is already encoded in the share price. -- This is the __Markov property__, a.k.a. the _weak efficiency of markets_ -- there's no periodicity or trends. 

* the job of a financial mathematician is not to predict prices but instead to relate the movements of price in one asset to that of another. These price movements are driven by information arriving in the market. Since the information is by definition unknown until it arrives, it can be seen as random.

* mathematical finance use market instruments which are affected by the same information in such a way as to cancel out randomness. This process is called __hedging__.

Insider trading is based on the principle of market efficiency -- knowledge which is not publicly available and therefore not included in the share price.

How to distinguish assets from each other if all of them are correctly priced by the market?
* Riskiness is already included in the price.
* Increased riskiness means greater returns, but only on average. 
* An asset's price reflects the value it's likely to have in the future reduced by a factor depending upon its riskiness.

Example 1:
Toss a coin
* heads -> gain `$ 3`
* tails -> lose `$ 1`
* Expected winnings: `0.5 * 3 - 0.5 * 1 = 1`

Example 2:
Toss a coin
* heads -> gain `$ 103`
* tails -> lose `$ 101`
* Expected winnings: `0.5 * 103 - 0.5 * 101 = 1`

The maximum loss of the first game is `$1`, whereas the second game is `$101`. In the second game, aversion to the possibility of losing money might outweigh the expected gains.

Example 3:
The sum you lose is paid today. In a year a coin is tossed again, if heads comes up, you not only make the gain but also get the money you lose a year ago.

* If you didn't play the game, you'd have made interest on the money
* The amount of return you'd want from the risky game would increase to express the interest foregone
* Also since you'd have made money from the interest payment without taking any risks, you'll demand that the expected winnings be greater than the amount of interest you'd have earned.

## 3. The most important assets

Key words: maturity, coupon, yield

### Bonds

* principal: original investment
* date of maturity: the day the investor gets the principal back
* coupon: yearly sum that's paid
* zero-coupon bond: a bond that pays no interest but instead just returns the investor his investment on the date of maturity -- the investor might have paid a smaller amount for the principal.

There's risk in riskless bonds, not the possibility of __default__, but the possibility that __interest rates__ might change in the meantime.

Let's say you sell a bond before it's mature. If interest rates have gone up since the time of purchase, the market price will be less than what was paid because other investors will want the fixed sum on maturity to reflect how much money they could have got it by investing the money in a newly issued riskless bond.

* coupon payments reflects the interest rate.
* the price of a bond relects today's interest rates and today's expectations of future interest rates. 

The effective interest rate implied by the market price is called the __yield__, which can be very different from the coupon. 

Yield of a bond reflects expectations of future rates. Bonds of different maturities can have different yields implied by the market.

A bond of longer maturity will be exposed to more uncertainty (risk). Therefore long-dated bonds are expected to have higher yields to compensate investors for this additional risk.

### Stocks and shares

share `==` stock.

The holder of a share of a company owns a fraction of that company, which is a PLC (public limited company).

What's a PLC:
* public: anyone can buy shares
* limited: limited liability. The owners of such a company have no liability for its debs if it goes bankrupt.

PLC can be seen as the foundation of modern capitalism, because it reduces the riskiness of investing in a company by _capping the total losses to be the amount invested_.

### Corporate bond

Somewhere between a share an a government bond. 

A company wishing a loan issues bonds in the market paying some coupon in interest.

Investor's risk: the company may default on its payments as it has gone bankrupt in the meatime. 

Advantage:

* Bond-holders have more claim on the company's assets than shareholders so the riskiness is reduced.

Disadvantage:

* If the company share price soars the bondholder does not gain at all.

It can be seen from above that both the returns and the riskiness of bonds are lower than those of shares. Therefore __convertible bonds__ are issued to attract investors to buy bonds. These bonds can be converted into shares if the inveestor so chooses.

### Positivity
All the assets above carry rights **without** liabilities. 

This has an important consequence for the mathematician: their values are **always positive**.

There are plenty of market instruments that do not share this property.

### The risk paradigm outside the markets

The concepts of risk is inherent in all investment, not just those in financial markets. 

For example: a company wishes to invest in a new plant to produce some product. It should demand the same or higher return as a market instrument of comparable riskiness. Otherwise, it would do better just to buy relevant market instrument.

## 4. Risk diversification and hedging

Some risks are better than others. In particular, some risks can be effectively eliminated by judicious trading, achieved mainly by:

* hedging
* diversification

### Hedging: 🤔
* contract A: pays $100 if a coin flip is heads
* contract B: pays $100 if the same coin flip is tails

The two contracts are expected to be worth less than $50 individually, the number depends on the risk aversion of investors. 

But if both these contracts are trading in the market, we can buy both and be guaranteed $100 whatever happens. The risk has disappeared.

This process is called hedging. As long as only one of the contracts is tradable, its value is less than $50 but as soon as both are, the risk stops being unhedgeable and the risk premium disappears.

### Diversification:

Bet a very small amount on a very large number of independent coin tosses.

Divide portfolio into N bets each paying 100/N on heads.

Average pay-out: still $50 but as N gets larger the variance gets smaller and smaller. The risk has therefore been effectively eliminated. So we cannot expect the individual contracts to trade for less than $50.

### Lesson to be learnt 🤔
The market only compensate investors for taking risks that are __not diversifiable__, which are known as __systemic risk__. 

A investor's job is to achieve the maximum amount of systemic risk for a given level of riskiness by diversifying the portfolio.

## 5. The use of options
To manage risk carefully, a bank/company may want to buy certain sorts of financial instruments to increase of decrease a certain type of risk -- options and related products.

Option:
* an instrument which gives the holder the right to buy or sell a quantity of some fixed asset during a specified period of time at a price fixed today.
* unlike forward contract, there's no obligation to buy or sell. The option carries right but not obligations.

Example:

A company that exports to Japan receive payment in JPY. The variability of the exchange rate between dollar and yen means that the company is exposed to some extra risk. To avoid the risk, it can: 

* enter a forward contract: to exchange a fixed amount of yen for dollars at a fixed future date at today's exchange rate.

But the company doesn't know how many yen it'll wish to sell so it cannot remove (or hedge) all the risk. One solution:

* enter a forward contract for a billion yen it's sure it'll need to sell.
* buy an option for the rest of teh yen that's maybe between 0 and one billion.

Derivatives market jargon:
* an option to buy: a call option
* an option to sell: a put option
* using an option: exercise it
* the price which is guaranteed by the option: strike price
* an option is struck at a price.

Rules for **when** the options can be exercised:
* European option: on one specified date in the future
* American option: any day before a specified date in the future

Since an american option carries all the same rights as an European one and more, it'll always be worth at least as much as a European option. 

Categories of options:
* vanilla options: the ones above -- standardized
* exotic options: some are not even really options because the holder might not get a choice but instead receives a payoff, which can be negative dependent on the behavior of some __underlying__ asset. 

All instruments whose value is defined in terms of the behavior of some other asset is __derivatives__.

Difference between buying an option on a stock and buying the stock:

* If the stock price moves the wrong way the option will be valueless whereas the stock will not.
* If the stock price moves the right way, the option holder will have made much more money for the amount of money spent than the stock holder.

Attraction of speculating using options: 
* The maximum downside is the loss of the initial premium, whereas the upside is unlimited.

Note that for option seller the position is reversed.

Another way to use option to reduce risk:
* An investor holds a large number of stocks which he might sell a year from now but he's worried about a crash in the meantime. 
* He can buy an option on the stock guaranteeing him a price, thus capping his risk for the cost of the premium today.


Credit derivatives:
* example: company A pays B a regular premium until C defaults on some of its debts. Upon default B pays A a payment fixed in advance.
* why useful? A can use the credit derivative to reduce the risk it's taken by loaning to C, without affecting its businees relationship with C, either by refusing the loan or trying to sell on the loan.
* In order to fund the derivative, A could write a credit derivative on another company D to which it has no exposure. 
* A in this way reduced its overall risk at no cost to itself.

Another example of using derivative contracts: 
* Ryanair used hedging of oil prices (derivative contracts) to lock in the price of oil, thus became immune to price changes.

Weather derivatives: 
* the holder of a weather derivative recieves a pay-off based on the temperature on certain days or the amount of rainfall.
* example: a wine bar whose profit depends on how many sunny Thurs/Fri there were in July/August can buy a weather derivative which would pay a sum of money each Thurs/Fri which was not hot. This way their profits are no longer dependent on the whims of weather.

Difference between insurance and derivatives:
* derivative products are hedgeable: the seller can reduce his risk by holding the underlying asset or a similar asset, or selling another derivative product to another client which cancels out much of the risk. 
    * continuing from the wine bar example, another company might purchase an opposite derivative that pays on hot days when the company bleeds on AC cost. The two derivative products cancel each other.
* derivatives are always specified in terms of the occurrence of events rather than loss.


Option: an attempt to encapsulate a specific piece of risk. Its purpose is to allow the buyer to guard against certain events and thus reduce his risk. 

Cases where the use of options has led to big loss:
* when a trader broke the rules set him, and took on much riskier positions than he was set by his bank
* a company who should be using derivatives to hedge its positions starts to use them to speculate instead.
    * companies have a tendency to __overhedge__: they buy so many derivative contracts that instead of hedging their risks they cancel out all their risk, and in addition create an exposure in the opposite direction.
    * example: Ashanti, the gold mining company, 'hedged' its exposure to falls in the gold price that they lost a huge amount of money when the price of gold increased.
    * hedging should be for hedging, not speculation. 


## 6. Classifying market participants

* Hedger: uses market instruments to reduce his risks.

* Speculator: uses market instruments to increase his risks -- more risk equals more return.

* Arbitrageur: tries to spot discrepancies in the pricing of risks. By selling one risk and buying it elsewhere at a different price, he tries to make profits without risks.

Bank: mixture of speculator and arbitrageur.
* every time it makes a loan, it's speculating that the return on the loan will outweigh the credit risks taken on.
* it has better access to the markets, thus it can sell products to companies at a margin above what it can buy them for -- this is a form of **arbitrage**.

Private investors: speculators.

Companies: hedgers. They can reduce their risks by the use of derivatives.


**We are mainly interested in the bank's role as arbitrageur** -- the ability to spot market mispricings of derivative products depends upon some complicated mathematics. 

## 7. Key points

* Risk is key to investment decisions, because the only way to make money is by taking risky positions.

* Market effciency means that all information is already encoded in the price of an asset so we cannot foretell stock prices.

* The risk premium is the amount of money we receive for taking on a risk.

* Hedging is the process of taking positions in different assets which reduce the total risk.

* Diversifiable risk does not receive a risk premium as it can be hedged away. 🤔

* A bond is an asset that pays a regular coupon and returns the principal at its maturity.

* A stock or share is a fraction of the ownership of a company. It is of limited liability so carries rights without obligations. 

* A forward contract is the right and obligation to buy an asset at an agreed day in the future at a price agreed today.

* A call option is the right but not the obligation to buy an asset at an agreed day in the future at a price agreed today.

* A put option is the right but not the obligation to see an asset at an agreed day in the future at a price agreed today.