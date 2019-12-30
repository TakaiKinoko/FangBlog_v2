---
title: "Notes From The Concepts and Practice of Mathematical Finance -- 2. Pricing Methodologies"
category: "Mathematical Finance"
cover: black-schole.png
author: Fang 
---

These notes about how to price options and derivative products.

Derivative product is a product whose value is determined by the behavior of another asset, called underlying. 

Any option is a derivative.

## Some possible methodologies

The price of derivatives is closely related to that of the underlying asset. The objective of mathematical finance is to find these relationships.

Problem Setting:

* Price an option to buy a stock for $1 five years from now. The stock price today is $0.95.

#### Approaches 1:

* study the stock and estimate its growth potential affected by its riskiness.
    * we think the stock will be worth $3 at the options's expiry date.
    * argument 1: Since the option holder will make $2, we should charge him $2.
    * argument 2: We would charge less taking into account the fact that we could invest the premium for five years. We'd charge the amount of money it would take to have $2 in five years by investing in a 5-year riskless bond.
* in a more sophisticated version, we estimate the future distribution of the stock price and take the average value of the option under this distibution.
    * we can then average the pay-offs and obtain an expected value for the option.
    * we then discount this, to compute the amount of money we need to invest today to match the expected pay-off.

Flaws:

Suppose we sold such an option for $1.5.

Instead of investing the money in bond, we buy the stock today for $0.95.

In 5 years:

* if the stock < $1.0, the option will not be exercised. We make `$1.5 - $0.95 = $0.55` plus the stock price on the expiry date.

* if the stock > $1.0, we sell it to the option buyer for $1.0. We make `$1.5 - $0.95 + $1.0 = $1.55`.

Therefore we make a riskless profit of at least $0.55.

This example shows that **the cost of a call option should never be more than today's value of the stock**. Otherwise the seller can use the option's premium to buy the stock today and cover himself in all possible outcomes. This is independent of any opinions about future movements.

The issue here is the seller has adopted a **hedging strategy**, which can be dynamic, meaning the seller can buy/sell the underlying according to its price movements.

#### An alternative pricing methodology
Estimate the expected loss to the seller under every possible hedging strategy. Then adopt the strategy that minimizes the expected loss.

Or, we could adopt a strategy that minimizes the maximum possible loss. 

Example:

Option will be exercised at expiry if stock > $1. The stock price is initially < $1.0.

* When the stock price crosses $1.0, we buy.
* When the stock price crosses $1.0 again, we sell.
* again and again.

If the price is < $1.0 at the end, we hold no stock and no liability. If assuming zero interest rate, any money spent buying the stock on upcrosses will have been regained on selling on downcrosses. We have lost nothing.

If the price is > $1.0 on expiry, we sell the stock to the option holder for $1.0 which repays us the $1.0 we used to buy the stock.

This way we hedged the option for free, but the option holder will have paid us a positive amount for buying it. We gain this premium.

Flaw:

When stock price is at $1, it's equally likely to go up as down. So how do we know whether to buy or sell at $1.0?

#### Modified strategy
Buy at $1.01 and sell at $0.99. The strategy is now well-defined.

But with each buy-sell, we lose $0.02.

The cost of hedging the option under this hedging strategy as well as our expected loss would depend upon the number of times the option crosses the intervals.

If the stock has a high growth component, it's less likely to cross the interval many times -- **stocks with high growth should have cheaper options**.

If this seems counter-intuitive:
*  think of the connection between risk and return. A high growth stock will be very risky which means it bobs up and down a lot. Thus we can expect it to cross the interval more often, which means the expected cost of hedging is higher.
* there are also better ways of pricing.

Downside of this strategy:

There's no upper limit to the hedging cost. If the stock cross the interval thousands of times, it'd be much costly than the strategy of just buying the stock today.

### Seller's goals for the hedging strategy

1. make a good return on average 
1. cap the total amount that can be lost
1. minimize the **variance** (i.e. the riskiness) of the outcome
1. invest an amount today that will always precisely cover the cost of the option's pay-off at expiry
1. avoid mispricing any risk

The first one is a speculator's objective. All others are those of hedgers and arbitrageurs.

Financial mathematics tries to achieve all objectives except for the first.

## Delta hedging

Under certain assumptions on the behavior of the stock, it can be shown that there's a mathematically correct price.

An **optimal hedging strategy**: guarantees that the option's value at expiry will always be covered **precisely** by the option's premium at purchase.

Assume the value of the option is known and depends on:
* the time to expiry
* current value of the stock
* interest rates -- assume fixed throughout

Then we also know _the rate of change of the option price w.r.t. the stock price_. 

Mathematically, we know the **derivative w.r.t. the stock price**.

We buy an amount of stock equal to this rate of change. 
* our total portfolio is: `amount(stock) - 1 option`
* Then the rate of change of our total portfolio is `0`.
* We have effectively removed all risk from the portfolio.

As soon as the stock price changes, the rate of change changes too, so does the amount of stock held.

This hedging strategy is called __Delta hedging__.

Assuming that the rehedging can be carried out continuously, then it leads to a **riskless portfolio** -- a portfolio of totally predictable value, which allows the option always to be hedged and this yields a correct price, called the __Black-Scholes price__.

### An alternative way to arrive at the Black-Schole prices

Estimate the future distribution of the stock price in terms of how risky it is.

Take the average `E(price)` to be the same as could be achieved by holding a riskless bond. 

This is assuming that stock buyers are not risk-averse but __risk neutral__: they do not demand a discounting of the price to take account of risk.

The point is: the option seller have hedged her risk precisely, holds a riskless asset which should therefore grow at the same rate as a riskless bond.

Since all risk has been removed, we don't need to worry about the effect of risk on pricing. And we can simplify things by assuming that investors are risk-neutral.

The __risk-neutral pricing__ is the most pervasive in the markets.