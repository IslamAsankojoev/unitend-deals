import { Typography } from '@/src/shared'

export const DealsBlock = () => {
  ;<div className="deals-section mb-15">
    <div className="container">
      {/* deals timing */}
      <div className="deals-timing mb-10 flex items-center justify-between">
        <Typography
          variant="text-title"
          className="font-lato text-3xl font-extrabold"
        >
          TODAY'S DEALS OF THE DAY
        </Typography>
        <div className="ending-time flex items-center justify-between gap-4">
          <Typography
            variant="text-faq"
            className="text-bold text-lg font-semibold"
          >
            Deals ends in
          </Typography>
          <button className="min-h-11.5 rounded-[9px] bg-[#FCBD01]">
            <Typography
              variant="text-faq"
              className="text-card-title font-lato flex items-center justify-between px-6 font-extrabold text-black"
            >
              <span className="mr-2">16d :</span>
              <span className="mr-2">21h :</span>
              <span className="mr-2">57m :</span>
              <span className="mr-2">23s</span>
            </Typography>
          </button>
          <button className="min-h-12 min-w-32 rounded-[9px] bg-[#FCBD01]">
            <Typography
              className="text-[13px] font-semibold"
              variant="text_cardCaption"
            >
              VIEW ALL
            </Typography>
          </button>
        </div>
      </div>

      {/* deals cards */}

      <div className="deals-cards-container container flex items-center justify-center gap-4">
        {/* card1 */}
      </div>
    </div>
  </div>
}
