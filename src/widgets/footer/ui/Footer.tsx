import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '../../../shared'

export const Footer = () => {
  return (
    <footer className="footer font-publicSans bg-[black] text-[white]">
      <div className="container">
        <div className="wrapper flex gap-10 px-56.25 py-13.5">
          <div className="companyInfo min-w-58.5 flex-col">
            <Image
              className="logo mb-5"
              src={'/assets/img/company-logo.svg'}
              alt="logo"
              width={198}
              height={36}
            />
            <div className="phoneNumber">
              <Typography className="text-[10px] font-normal text-[#77878F]">
                Customer Supports:
              </Typography>
              <Typography className="font-publicSans mb-2 text-[13px] font-medium">
                (629) 555-0129
              </Typography>
            </div>

            {/* adress */}
            <div className="adress flex-start flex flex-col">
              <Typography className="place text-card-badge mb-2 max-w-46.5 font-normal text-[#ADB7BC]">
                4517 Washington Ave. <br />
                Manchester, Kentucky 39495
              </Typography>
              <Typography className="email text-card-badge font-medium text-[white]">
                info@kinbo.com
              </Typography>
            </div>
          </div>

          {/* top category */}
          <div className="topCategory min-w-37.5 flex-col">
            <Typography className="title mb-4">TOP CATEGORY</Typography>
            <div className="topCategories font-publicSans font-,edium flex flex-col justify-start gap-2 text-[10px] text-[#929FA5]">
              <Link className="hover:text-white" href="">
                Computer & Laptop
              </Link>
              <Link className="hover:text-white" href="">
                SmartPhone
              </Link>
              <Link className="hover:text-white" href="">
                Headphone
              </Link>
              <Link
                href=""
                className="flex items-center gap-2 hover:text-white"
              >
                {' '}
                <svg
                  width="18"
                  height="2"
                  viewBox="0 0 18 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.75"
                    y1="0.75"
                    x2="17.25"
                    y2="0.75"
                    stroke="#EBC80C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Accessories
              </Link>
              <Link className="hover:text-white" href="">
                Camera & Photo
              </Link>
              <Link className="hover:text-white" href="">
                TV & Homes
              </Link>
              <Link
                href=""
                className="flex items-center gap-2 hover:text-white"
              >
                Browse All Product{' '}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.34375 7.5H12.6562"
                    stroke="#EBC80C"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.4375 3.28125L12.6562 7.5L8.4375 11.7188"
                    stroke="#EBC80C"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick links  */}
          <div className="links min-w-37.5 flex-col">
            <Typography className="title mb-4">QUICK LINKS</Typography>
            <div className="font-publicSans flex flex-col justify-start gap-2 text-[10px] font-medium text-[#929FA5]">
              <Link className="hover:text-white" href="">
                Shop Product
              </Link>
              <Link className="hover:text-white" href="">
                Shoping Cart
              </Link>
              <Link className="hover:text-white" href="">
                Wishlist
              </Link>
              <Link className="hover:text-white" href="">
                Refund Policy
              </Link>
              <Link className="hover:text-white" href="">
                Shipping Policy
              </Link>
              <Link className="hover:text-white" href="">
                Privacy Policy
              </Link>
              <Link className="hover:text-white" href="">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* app links */}
          <div className="appLinks flex flex-col gap-4">
            <Typography className="title mb-4">DOWNLOAD APP</Typography>
            <Link href="/">
              <button className="googleMarket flex min-w-33 items-center justify-center gap-2 rounded-xs bg-[#303639] px-3.75 py-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1102_2705)">
                    <path
                      d="M15.0652 11.4848L4.7188 1.1096L17.8828 8.6672L15.0652 11.4848ZM2.0176 0.5C1.408 0.8192 1 1.4 1 2.156V22.844C1 23.6 1.408 24.1808 2.0176 24.5L14.05 12.4976L2.0176 0.5ZM21.9532 11.0768L19.192 9.4784L16.1116 12.5024L19.192 15.5264L22.0096 13.928C22.8532 13.2572 22.8532 11.7476 21.9532 11.0768ZM4.7188 23.8952L17.8828 16.3376L15.0652 13.52L4.7188 23.8952Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1102_2705">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="appText font-inter flex flex-col items-start text-[8px] font-normal text-[white]">
                  <Typography className="text-[8px] font-semibold">
                    Get it now
                  </Typography>
                  <Typography className="text-[10px] font-semibold">
                    Google Play
                  </Typography>
                </div>
              </button>
            </Link>
            <Link href="/">
              <button className="appStore flex min-w-33 items-center justify-center gap-4 rounded-xs bg-[#303639] px-3.75 py-3">
                <svg
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.792 18.7035C19.442 19.5187 19.0097 20.296 18.502 21.0235C17.823 21.991 17.2675 22.6605 16.8395 23.0325C16.176 23.6425 15.4645 23.9555 14.703 23.973C14.1565 23.973 13.4975 23.8175 12.73 23.502C11.96 23.188 11.2525 23.032 10.6055 23.032C9.927 23.032 9.1995 23.188 8.421 23.502C7.6415 23.8175 7.0135 23.982 6.5335 23.998C5.8035 24.0295 5.0755 23.708 4.3485 23.0325C3.885 22.6275 3.3055 21.9345 2.6105 20.9525C1.865 19.9035 1.252 18.6875 0.772 17.3005C0.258 15.803 0 14.3525 0 12.9485C0 11.34 0.3475 9.953 1.0435 8.7905C1.591 7.8565 2.3185 7.1205 3.2295 6.5795C4.12324 6.04467 5.14302 5.75686 6.1845 5.7455C6.7645 5.7455 7.525 5.925 8.4705 6.2775C9.413 6.631 10.018 6.8105 10.2835 6.8105C10.4815 6.8105 11.154 6.6005 12.2935 6.1825C13.3715 5.7945 14.281 5.634 15.026 5.6975C17.0455 5.8605 18.5625 6.6565 19.571 8.0905C17.7655 9.1845 16.872 10.717 16.89 12.683C16.906 14.2145 17.4615 15.489 18.5535 16.5005C19.0485 16.9705 19.601 17.3335 20.2155 17.591C20.0867 17.9664 19.9454 18.3374 19.792 18.7035ZM15.161 0.4805C15.161 1.6805 14.7225 2.8015 13.8485 3.8385C12.7935 5.072 11.518 5.7845 10.1345 5.672C10.1159 5.52105 10.1066 5.3691 10.1065 5.217C10.1065 4.065 10.608 2.832 11.499 1.8235C11.944 1.313 12.509 0.8885 13.195 0.55C13.88 0.2165 14.527 0.032 15.136 0C15.1535 0.1605 15.161 0.321 15.161 0.48V0.4805Z"
                    fill="white"
                  />
                </svg>

                <div className="appText font-inter flex flex-col items-start text-[8px] font-normal text-[white]">
                  <Typography className="text-[8px] font-semibold">
                    Get it now
                  </Typography>
                  <Typography className="text-[10px] font-semibold">
                    App Store{' '}
                  </Typography>
                </div>
              </button>
            </Link>
          </div>

          <div className="popularTags">
            <Typography className="title mb-4">POPULAR TAG</Typography>

            <div className="tags flex max-h-36.25 max-w-58.5 flex-wrap gap-2">
              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Game
              </button>
              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Iphone
              </button>
              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                TV
              </button>

              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Asus Laptops{' '}
              </button>

              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Macbook{' '}
              </button>

              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                SSD{' '}
              </button>

              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Graphics Card{' '}
              </button>

              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Power Bank{' '}
              </button>

              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Smart TV{' '}
              </button>

              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Speaker{' '}
              </button>

              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Tablet{' '}
              </button>

              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Microwave{' '}
              </button>

              <button className="font-publicSans rounded-xs border border-[#303639] bg-none px-[4.5px] py-1.25 text-[10px] font-medium text-white hover:border-[#FFFFFF] hover:bg-[#3A4044]">
                Samsung{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
