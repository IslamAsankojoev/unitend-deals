import { Typography } from '@/src/shared'
import Image from 'next/image'

export const Card = () => {
  return (
    <div className="deals-card flex-col items-center">
      {/* card image */}
      <div className="card-image flex">
        <div className="image-placeholder flex min-h-78.75 min-w-79.5 items-center justify-center rounded-[28px] bg-[#FAFAFA] p-2">
          <div className="image-block relative flex min-h-83.75 min-w-75.5 items-center justify-center rounded-[26px] bg-[#ECEDEF]">
            <button className="image-badge py- absolute top-0 left-0 min-h-9.5 min-w-14.5 rounded-tl-3xl rounded-br-3xl bg-[#FCBD01] px-4">
              <Typography variant="text-faq" className="text-white">
                New
              </Typography>
            </button>
            <Image
              className="rounded-[18px]"
              src="/assets/img/card-image1.jpg"
              alt="cardImg"
              width={204}
              height={266}
            ></Image>
          </div>
        </div>
      </div>

      {/* card descript */}

      <div className="card-details flex-col">
        <div className="card-timing pt-2">
          <Typography
            variant="text-faq"
            className="text-card-badge text-[#397CFF]"
          >
            Flash Deal Ends in 5 Hours !
          </Typography>

          <div className="progress min-h-8px max-w-79.5 rounded-md bg-[#CFDFFF]">
            <div
              className="progress-bar h-1.5 max-w-[60%] rounded-md bg-[#397CFF] transition-all duration-300"
              role="progressbar"
            ></div>
          </div>
        </div>

        <Typography
          variant="text-faq"
          className="text-dealCard-title mt-2 max-w-79.5 font-extrabold text-black"
        >
          ADIDAS 4DFWD X PARLEY RUNNING SHOES{' '}
        </Typography>
        <button className="py-2s mt-3 min-h-12 min-w-79 rounded-lg bg-[#232321] px-4">
          <Typography
            variant="text-cardPrice"
            className="font-medium text-white"
          >
            BUY NOW -
            <span className="ml-2 font-medium text-[#FFA52F]">$250.00</span>
          </Typography>
        </button>
      </div>
    </div>
  )
}
