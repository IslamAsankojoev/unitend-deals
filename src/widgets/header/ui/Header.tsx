'use client'

import { Typography } from '@/src/shared'
import Link from 'next/link'

const categories = [
  'Groceries',
  'Premium Fruits',
  'Home & Kitchen',
  'Fashion',
  'Electronics',
  'Beauty',
  'Home Improvement',
  'Sports, Toys & Luggage',
]

export const Header = () => {
  return (
    <header>
      <div className="offer-section bg-black p-4">
        <div className="container flex items-center justify-between">
          <div className="leftSide">
            <Typography
              className="text-[#EDEDED]"
              variant="text-header"
              tag="h2"
            >
              Welcome to worldwide Megamart!
            </Typography>
          </div>

          <div className="rightSide flex items-center justify-between gap-6">
            <Link
              className="flex items-center gap-2 border-r pr-6"
              href="/deliver"
            >
              <img
                className="gray-300 h-4.5 w-4.5"
                src="/assets/img/delivery-icon.svg"
                alt="Delivery Icon"
              />
              <Typography
                className="text-[#EDEDED]"
                variant="text-header"
                tag="h2"
              >
                Deliver to 423651
              </Typography>
            </Link>

            <Link
              className="flex items-center gap-2 border-r pr-6"
              href="/track"
            >
              <img
                className="h-4.5 w-4.5"
                src="/assets/img/track-order-icon.svg"
                alt="Track Order Icon"
              />

              <Typography
                className="text-[#EDEDED]"
                variant="text-header"
                tag="h2"
              >
                Track your order{' '}
              </Typography>
            </Link>

            <Link className="flex items-center gap-2 pr-6" href="/offers">
              <img
                className="h-4.5 w-4.5"
                src="/assets/img/all-offers-icon.svg"
                alt="All Offers Icon"
              />
              <span className="text-primary text-[#EDEDED]">All Offers</span>
            </Link>
          </div>
        </div>
      </div>
      {/* navbar top offer section */}
      <div className="header-offer border-b border-[#ededed] bg-white">
        <div className="container flex items-center justify-between">
          <div className="menuSide flex items-center justify-between gap-3">
            <button className="group cursor-pointer">
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48.0622" height="48" rx="10" fill="#F3F9FB" />

                {/* line 1 */}
                <line
                  x1="12.7656"
                  y1="15.25"
                  x2="37.2993"
                  y2="15.25"
                  stroke="#161616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="origin-center transition-all duration-500 ease-in-out group-hover:translate-y-2.25 group-hover:rotate-45"
                />

                {/* line 2 */}
                <line
                  x1="12.7656"
                  y1="24.25"
                  x2="30.1992"
                  y2="24.25"
                  stroke="#161616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="transition-all duration-500 ease-in-out group-hover:scale-x-0 group-hover:opacity-0"
                />

                {/* line 3 */}
                <line
                  x1="12.7656"
                  y1="33.25"
                  x2="24.2825"
                  y2="33.25"
                  stroke="#161616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="origin-center transition-all duration-500 ease-in-out group-hover:-translate-y-2.25 group-hover:scale-x-[1.55] group-hover:-rotate-45"
                />
              </svg>
            </button>
            <Typography
              className="text-title-lg font-extrabold"
              variant="text-mainTitle"
              tag="h2"
            >
              UNITED DEALS
            </Typography>

            <img src="/assets/img/flash-sale.png" alt="flashSale" />
          </div>
          <search>
            <label
              htmlFor="search-input"
              className="flex min-h-12 w-full min-w-89 rounded-[10px] bg-[#F3F9FB] px-4 py-3"
            >
              <img
                className="mr-3"
                src="/assets/img/search-icon.svg"
                alt="search"
              />
              <input
                className="font-lato w-full bg-[#F3F9FB] text-[14px] text-[#666666] outline-none placeholder:text-[#666666]"
                type="text"
                placeholder="Search essentials, groceries and more..."
              />
            </label>
          </search>
          <div className="userSide flex items-center justify-between gap-2">
            <button className="userDeals flex cursor-pointer items-center gap-1 border-r border-r-[#D9D9D9] pr-4">
              <img src="/assets/img/deals-icon.svg" alt="deals" />
              <Typography
                className="ml-2 text-[#666666] hover:text-[#FC7901]"
                variant="text-header"
                tag="h2"
              >
                My Deals
              </Typography>
            </button>
            <button className="signUp flex cursor-pointer items-center gap-1 border-r border-r-[#D9D9D9] pr-5 pl-3">
              <img src="/assets/img/user-icon.svg" alt="sign-up" />
              <Typography
                className="ml-2 text-[#666666] hover:text-[#FC7901]"
                variant="text-header"
                tag="h2"
              >
                Sign Up/Sign In
              </Typography>
            </button>
            <button className="cart flex cursor-pointer items-center gap-1 pl-3">
              <img src="/assets/img/cart-icon.svg" alt="deals" />
              <Typography
                className="ml-2 text-[#666666] hover:text-[#FC7901]"
                variant="text-header"
                tag="h2"
              >
                Cart{' '}
              </Typography>
            </button>
          </div>
        </div>
      </div>

      {/* categories section */}

      <div className="categories-section min-h-17.25 border-b border-[#ededed] bg-white px-3 py-4">
        <div className="container flex justify-between gap-4">
          {categories.map((categorie) => (
            <button
              className="rounded-3xl bg-[#F3F9FB] px-4 py-2 hover:bg-black hover:text-white"
              key={categorie}
            >
              <Typography variant="text-categories">
                {categorie}
              </Typography>{' '}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
