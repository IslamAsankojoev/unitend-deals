import { Typography } from '@/src/shared'
import Image from 'next/image'

export const ExtraCards = () => {
  return (
    <div className="container mb-15">
      <div className="extra-cards-container grid grid-cols-[20.5rem_1fr_1fr_1fr_1fr] border border-[rgb(228,231,233)]">
        <div className="card1 relative row-span-2 border-r border-r-[rgb(228,231,233)] p-7">
          <div className="sale absolute top-4 left-4 flex max-w-18.25 flex-col items-start">
            <button className="offSalesButton font-publicSans text-card-badge mb-2 h-6.75 w-18.25 rounded-xs bg-[#EFD33D] font-semibold text-[#191C1F]">
              32% OFF
            </button>
            <button className="hotSalesButton font-publicSans text-card-badge h-6.75 w-11.5 rounded-xs bg-[#EE5858] font-semibold text-white">
              HOT
            </button>
          </div>
          <Image
            className="mb-2 h-67 w-70"
            src={'/assets/img/extra-card1.svg'}
            width={100}
            alt={'sony'}
            height={100}
          />
          <div className="cardDescription">
            <div className="overviews flex gap-2">
              <div className="stars mb-2 flex">
                <svg
                  className="star1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3519 14.908L14.292 17.4096C14.8001 17.7302 15.4255 17.2533 15.277 16.667L14.1356 12.1796C14.1047 12.0553 14.1096 11.9247 14.1498 11.803C14.1899 11.6813 14.2636 11.5733 14.3623 11.4917L17.8959 8.54444C18.3571 8.16137 18.1226 7.38743 17.5206 7.34834L12.9082 7.05127C12.7824 7.04395 12.6614 7.00012 12.56 6.92515C12.4587 6.85018 12.3814 6.74732 12.3375 6.62912L10.6177 2.29815C10.5721 2.17299 10.4892 2.06488 10.3801 1.98848C10.271 1.91208 10.1411 1.87109 10.0079 1.87109C9.87471 1.87109 9.74476 1.91208 9.63567 1.98848C9.52658 2.06488 9.44365 2.17299 9.39812 2.29815L7.67824 6.62912C7.63441 6.74732 7.55709 6.85018 7.45574 6.92515C7.3544 7.00012 7.23341 7.04395 7.10755 7.05127L2.49515 7.34834C1.8932 7.38743 1.65867 8.16137 2.11991 8.54444L5.65348 11.4917C5.75224 11.5733 5.82592 11.6813 5.86603 11.803C5.90614 11.9247 5.91105 12.0553 5.88019 12.1796L4.82481 16.3386C4.645 17.0422 5.39549 17.6129 5.99745 17.2298L9.66392 14.908C9.76674 14.8426 9.88605 14.8079 10.0079 14.8079C10.1297 14.8079 10.2491 14.8426 10.3519 14.908Z"
                    fill="#EBC80C"
                  />
                </svg>
                <svg
                  className="star2"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3519 14.908L14.292 17.4096C14.8001 17.7302 15.4255 17.2533 15.277 16.667L14.1356 12.1796C14.1047 12.0553 14.1096 11.9247 14.1498 11.803C14.1899 11.6813 14.2636 11.5733 14.3623 11.4917L17.8959 8.54444C18.3571 8.16137 18.1226 7.38743 17.5206 7.34834L12.9082 7.05127C12.7824 7.04395 12.6614 7.00012 12.56 6.92515C12.4587 6.85018 12.3814 6.74732 12.3375 6.62912L10.6177 2.29815C10.5721 2.17299 10.4892 2.06488 10.3801 1.98848C10.271 1.91208 10.1411 1.87109 10.0079 1.87109C9.87471 1.87109 9.74476 1.91208 9.63567 1.98848C9.52658 2.06488 9.44365 2.17299 9.39812 2.29815L7.67824 6.62912C7.63441 6.74732 7.55709 6.85018 7.45574 6.92515C7.3544 7.00012 7.23341 7.04395 7.10755 7.05127L2.49515 7.34834C1.8932 7.38743 1.65867 8.16137 2.11991 8.54444L5.65348 11.4917C5.75224 11.5733 5.82592 11.6813 5.86603 11.803C5.90614 11.9247 5.91105 12.0553 5.88019 12.1796L4.82481 16.3386C4.645 17.0422 5.39549 17.6129 5.99745 17.2298L9.66392 14.908C9.76674 14.8426 9.88605 14.8079 10.0079 14.8079C10.1297 14.8079 10.2491 14.8426 10.3519 14.908Z"
                    fill="#EBC80C"
                  />
                </svg>
                <svg
                  className="star3"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3519 14.908L14.292 17.4096C14.8001 17.7302 15.4255 17.2533 15.277 16.667L14.1356 12.1796C14.1047 12.0553 14.1096 11.9247 14.1498 11.803C14.1899 11.6813 14.2636 11.5733 14.3623 11.4917L17.8959 8.54444C18.3571 8.16137 18.1226 7.38743 17.5206 7.34834L12.9082 7.05127C12.7824 7.04395 12.6614 7.00012 12.56 6.92515C12.4587 6.85018 12.3814 6.74732 12.3375 6.62912L10.6177 2.29815C10.5721 2.17299 10.4892 2.06488 10.3801 1.98848C10.271 1.91208 10.1411 1.87109 10.0079 1.87109C9.87471 1.87109 9.74476 1.91208 9.63567 1.98848C9.52658 2.06488 9.44365 2.17299 9.39812 2.29815L7.67824 6.62912C7.63441 6.74732 7.55709 6.85018 7.45574 6.92515C7.3544 7.00012 7.23341 7.04395 7.10755 7.05127L2.49515 7.34834C1.8932 7.38743 1.65867 8.16137 2.11991 8.54444L5.65348 11.4917C5.75224 11.5733 5.82592 11.6813 5.86603 11.803C5.90614 11.9247 5.91105 12.0553 5.88019 12.1796L4.82481 16.3386C4.645 17.0422 5.39549 17.6129 5.99745 17.2298L9.66392 14.908C9.76674 14.8426 9.88605 14.8079 10.0079 14.8079C10.1297 14.8079 10.2491 14.8426 10.3519 14.908Z"
                    fill="#EBC80C"
                  />
                </svg>
                <svg
                  className="star4"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3519 14.908L14.292 17.4096C14.8001 17.7302 15.4255 17.2533 15.277 16.667L14.1356 12.1796C14.1047 12.0553 14.1096 11.9247 14.1498 11.803C14.1899 11.6813 14.2636 11.5733 14.3623 11.4917L17.8959 8.54444C18.3571 8.16137 18.1226 7.38743 17.5206 7.34834L12.9082 7.05127C12.7824 7.04395 12.6614 7.00012 12.56 6.92515C12.4587 6.85018 12.3814 6.74732 12.3375 6.62912L10.6177 2.29815C10.5721 2.17299 10.4892 2.06488 10.3801 1.98848C10.271 1.91208 10.1411 1.87109 10.0079 1.87109C9.87471 1.87109 9.74476 1.91208 9.63567 1.98848C9.52658 2.06488 9.44365 2.17299 9.39812 2.29815L7.67824 6.62912C7.63441 6.74732 7.55709 6.85018 7.45574 6.92515C7.3544 7.00012 7.23341 7.04395 7.10755 7.05127L2.49515 7.34834C1.8932 7.38743 1.65867 8.16137 2.11991 8.54444L5.65348 11.4917C5.75224 11.5733 5.82592 11.6813 5.86603 11.803C5.90614 11.9247 5.91105 12.0553 5.88019 12.1796L4.82481 16.3386C4.645 17.0422 5.39549 17.6129 5.99745 17.2298L9.66392 14.908C9.76674 14.8426 9.88605 14.8079 10.0079 14.8079C10.1297 14.8079 10.2491 14.8426 10.3519 14.908Z"
                    fill="#EBC80C"
                  />
                </svg>
                <svg
                  className="star5"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3519 14.908L14.292 17.4096C14.8001 17.7302 15.4255 17.2533 15.277 16.667L14.1356 12.1796C14.1047 12.0553 14.1096 11.9247 14.1498 11.803C14.1899 11.6813 14.2636 11.5733 14.3623 11.4917L17.8959 8.54444C18.3571 8.16137 18.1226 7.38743 17.5206 7.34834L12.9082 7.05127C12.7824 7.04395 12.6614 7.00012 12.56 6.92515C12.4587 6.85018 12.3814 6.74732 12.3375 6.62912L10.6177 2.29815C10.5721 2.17299 10.4892 2.06488 10.3801 1.98848C10.271 1.91208 10.1411 1.87109 10.0079 1.87109C9.87471 1.87109 9.74476 1.91208 9.63567 1.98848C9.52658 2.06488 9.44365 2.17299 9.39812 2.29815L7.67824 6.62912C7.63441 6.74732 7.55709 6.85018 7.45574 6.92515C7.3544 7.00012 7.23341 7.04395 7.10755 7.05127L2.49515 7.34834C1.8932 7.38743 1.65867 8.16137 2.11991 8.54444L5.65348 11.4917C5.75224 11.5733 5.82592 11.6813 5.86603 11.803C5.90614 11.9247 5.91105 12.0553 5.88019 12.1796L4.82481 16.3386C4.645 17.0422 5.39549 17.6129 5.99745 17.2298L9.66392 14.908C9.76674 14.8426 9.88605 14.8079 10.0079 14.8079C10.1297 14.8079 10.2491 14.8426 10.3519 14.908Z"
                    fill="#EBC80C"
                  />
                </svg>
              </div>
              <Typography
                className="font-publicSans font-normal text-[#77878F]"
                variant="text_cardCaption"
              >
                (52,677)
              </Typography>
            </div>
            <div className="cardCaption w-70">
              <Typography className="text-card-title mb-3 font-semibold">
                Xbox Series S - 512GB SSD Console with Wireless Controller - EU
                Versio...
              </Typography>

              <div className="price mb-3 flex gap-2">
                <Typography className="text-card-fixedPrice font-semibold text-[#ADB7BC] line-through">
                  ₹865.99
                </Typography>
                <Typography className="text-card-price font-semibold text-[#2DA5F3]">
                  ₹442.12
                </Typography>
              </div>

              <Typography className="text-card-caption mb-5 font-normal text-[#5F6C72]">
                Games built using the Xbox Series X|S development kit showcase
                unparalleled load times, visuals.
              </Typography>

              <div className="addingToUser flex items-center justify-center gap-5">
                <Image
                  className="h-6 w-6"
                  src={'/assets/img/heart-icon.svg'}
                  alt="heart"
                  width={10}
                  height={10}
                />
                <button className="addToCartButton min-h-12.25 min-w-36.5 rounded-md bg-[#2DA5F3] text-white">
                  ADD TO CARD{' '}
                </button>
                <Image
                  className="h-6 w-6"
                  src={'/assets/img/view-icon.svg'}
                  alt="view"
                  width={10}
                  height={10}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card2 relative border-r border-b border-r-[rgb(228,231,233)] border-b-[rgb(228,231,233)] p-4">
          <div className="sale absolute top-4 left-4 flex max-w-18.25 flex-col items-start">
            <button className="soldOutButton font-publicSans text-card-badge mb-2 h-6.75 w-20 rounded-xs bg-[#929FA5] font-semibold text-white">
              SOLD OUT
            </button>
          </div>
          <Image
            className="mb-2 min-h-47 min-w-54"
            src={'/assets/img/extra-card2.svg'}
            width={100}
            alt={'sony'}
            height={100}
          />
          <div className="cardDescription">
            <div className="cardCaption max-w-70">
              <Typography className="text-card-caption font-lato mb-3 font-semibold">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
              </Typography>

              <Typography className="text-card-caption font-semibold text-[#2DA5F3]">
                ₹442.12
              </Typography>
            </div>
          </div>
        </div>
        <div className="card3 relative border-r border-b border-r-[rgb(228,231,233)] border-b-[rgb(228,231,233)] p-4">
          <div className="sale absolute top-4 left-4 flex max-w-18.25 flex-col items-start">
            <button className="soldOutButton font-publicSans text-card-badge mb-2 h-6.75 w-20 rounded-xs bg-[#929FA5] font-semibold text-white">
              SOLD OUT
            </button>
          </div>
          <Image
            className="mb-2 min-h-47 min-w-54"
            src={'/assets/img/extra-card2.svg'}
            width={100}
            alt={'sony'}
            height={100}
          />
          <div className="cardDescription">
            <div className="cardCaption max-w-70">
              <Typography className="text-card-caption font-lato mb-3 font-semibold">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
              </Typography>

              <Typography className="text-card-caption font-semibold text-[#2DA5F3]">
                ₹442.12
              </Typography>
            </div>
          </div>
        </div>
        <div className="card4 relative border-r border-b border-r-[rgb(228,231,233)] border-b-[rgb(228,231,233)] p-4">
          <div className="sale absolute top-4 left-4 flex max-w-18.25 flex-col items-start">
            <button className="soldOutButton font-publicSans text-card-badge mb-2 h-6.75 w-20 rounded-xs bg-[#929FA5] font-semibold text-white">
              SOLD OUT
            </button>
          </div>
          <Image
            className="mb-2 min-h-47 min-w-54"
            src={'/assets/img/extra-card2.svg'}
            width={100}
            alt={'sony'}
            height={100}
          />
          <div className="cardDescription">
            <div className="cardCaption max-w-70">
              <Typography className="text-card-caption font-lato mb-3 font-semibold">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
              </Typography>

              <Typography className="text-card-caption font-semibold text-[#2DA5F3]">
                ₹442.12
              </Typography>
            </div>
          </div>
        </div>
        <div className="card5 relative border-r border-b border-[rgb(228,231,233)] border-b-[rgb(228,231,233)] p-4">
          <div className="sale absolute top-4 left-4 flex max-w-18.25 flex-col items-start">
            <button className="soldOutButton font-publicSans text-card-badge mb-2 h-6.75 w-20 rounded-xs bg-[#929FA5] font-semibold text-white">
              SOLD OUT
            </button>
          </div>
          <Image
            className="mb-2 min-h-47 min-w-54"
            src={'/assets/img/extra-card2.svg'}
            width={100}
            alt={'sony'}
            height={100}
          />
          <div className="cardDescription">
            <div className="cardCaption max-w-70">
              <Typography className="text-card-caption font-lato mb-3 font-semibold">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
              </Typography>

              <Typography className="text-card-caption font-semibold text-[#2DA5F3]">
                ₹442.12
              </Typography>
            </div>
          </div>
        </div>
        <div className="card6 relative col-start-2 border-r border-[rgb(228,231,233)] p-4">
          <div className="sale absolute top-4 left-4 flex max-w-18.25 flex-col items-start">
            <button className="soldOutButton font-publicSans text-card-badge mb-2 h-6.75 w-20 rounded-xs bg-[#929FA5] font-semibold text-white">
              SOLD OUT
            </button>
          </div>
          <Image
            className="mb-2 min-h-47 min-w-54"
            src={'/assets/img/extra-card2.svg'}
            width={100}
            alt={'sony'}
            height={100}
          />
          <div className="cardDescription">
            <div className="cardCaption max-w-70">
              <Typography className="text-card-caption font-lato mb-3 font-semibold">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
              </Typography>

              <Typography className="text-card-caption font-semibold text-[#2DA5F3]">
                ₹442.12
              </Typography>
            </div>
          </div>
        </div>
        <div className="card7 relative col-start-3 border-r border-[rgb(228,231,233)] p-4">
          <div className="sale absolute top-4 left-4 flex max-w-18.25 flex-col items-start">
            <button className="soldOutButton font-publicSans text-card-badge mb-2 h-6.75 w-20 rounded-xs bg-[#929FA5] font-semibold text-white">
              SOLD OUT
            </button>
          </div>
          <Image
            className="mb-2 min-h-47 min-w-54"
            src={'/assets/img/extra-card2.svg'}
            width={100}
            alt={'sony'}
            height={100}
          />
          <div className="cardDescription">
            <div className="cardCaption max-w-70">
              <Typography className="text-card-caption font-lato mb-3 font-semibold">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
              </Typography>

              <Typography className="text-card-caption font-semibold text-[#2DA5F3]">
                ₹442.12
              </Typography>
            </div>
          </div>
        </div>
        <div className="card8 relative col-start-4 border-r border-[rgb(228,231,233)] p-4">
          <div className="sale absolute top-4 left-4 flex max-w-18.25 flex-col items-start">
            <button className="soldOutButton font-publicSans text-card-badge mb-2 h-6.75 w-20 rounded-xs bg-[#929FA5] font-semibold text-white">
              SOLD OUT
            </button>
          </div>
          <Image
            className="mb-2 min-h-47 min-w-54"
            src={'/assets/img/extra-card2.svg'}
            width={100}
            alt={'sony'}
            height={100}
          />
          <div className="cardDescription">
            <div className="cardCaption max-w-70">
              <Typography className="text-card-caption font-lato mb-3 font-semibold">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
              </Typography>

              <Typography className="text-card-caption font-semibold text-[#2DA5F3]">
                ₹442.12
              </Typography>
            </div>
          </div>
        </div>
        <div className="card9 relative col-start-5 border-r border-[rgb(228,231,233)] p-4">
          <div className="sale absolute top-4 left-4 flex max-w-18.25 flex-col items-start">
            <button className="soldOutButton font-publicSans text-card-badge mb-2 h-6.75 w-20 rounded-xs bg-[#929FA5] font-semibold text-white">
              SOLD OUT
            </button>
          </div>
          <Image
            className="mb-2 min-h-47 min-w-54"
            src={'/assets/img/extra-card2.svg'}
            width={100}
            alt={'sony'}
            height={100}
          />
          <div className="cardDescription">
            <div className="cardCaption max-w-70">
              <Typography className="text-card-caption font-lato mb-3 font-semibold">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
              </Typography>

              <Typography className="text-card-caption font-semibold text-[#2DA5F3]">
                ₹442.12
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
