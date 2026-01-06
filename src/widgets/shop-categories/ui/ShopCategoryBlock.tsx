import { Typography } from '@/src/shared'
import Image from 'next/image'

export const ShopCategoryBlock = () => {
  return (
    <div className="shop-categories-section mb-15">
      <div className="container">
        <div className="wrapper border-b border-b-[#D9D9D9] pb-6">
          <div className="title flex items-center justify-between">
            <Typography
              variant="text-title"
              className="font-lato text-main font-extrabold text-black"
            >
              SHOP FROM <span className="text-[#FCBD01]">TOP CATEGORIES</span>
            </Typography>
            <button className="min-h-10 min-w-27.75 rounded-lg bg-[#FCBD01]">
              <Typography
                className="text-[13px] font-semibold"
                variant="text_cardCaption"
              >
                VIEW ALL
              </Typography>
            </button>
          </div>
        </div>
      </div>

      {/* shop categories */}

      <div className="shop-categories-container">
        <div className="container flex flex-wrap gap-10 pt-10">
          {/* shop category 1  */}
        </div>
      </div>
    </div>
  )
}
