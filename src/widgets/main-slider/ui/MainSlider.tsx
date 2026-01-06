import Image from 'next/image'

export const MainSlider = () => {
  return (
    <div className="sliderSection pt-5 pb-4">
      <div className="container">
        <div className="slider placeholder">
          <Image
            className="min-w-328"
            src={'/assets/img/main-pagination.svg'}
            width={328}
            height={86}
            alt={'pagination'}
          />
        </div>

        {/* arrows for slider */}
        {/* <button className="flex items-center justify-center rounded-full bg-[#F3F9FB] hover:border-[8.75px] hover:border-[white]">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.29297 5.46612L16.9456 13.1188L9.29297 20.7715"
                    stroke="#242424"
                    strokeWidth="1.63986"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center rounded-full bg-[#F3F9FB] hover:border-[8.75px] hover:border-[white]">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.29297 5.46612L16.9456 13.1188L9.29297 20.7715"
                    stroke="#242424"
                    strokeWidth="1.63986"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button> */}
      </div>
    </div>
  )
}
