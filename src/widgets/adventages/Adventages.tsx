import { Typography } from '../../shared'

export const Adventages = () => {
  return (
    <div className="faq bg-white px-3 py-5">
      <div className="container">
        <div className="flex min-h-27 items-center justify-around rounded-md border border-[#E4E7E9] p-4">
          <div className="delivery flex min-h-19 min-w-70 items-center gap-4 border-r border-r-[#E4E7E9] p-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 27.7023V12.2961C34.9988 12.0736 34.939 11.8553 34.8265 11.6632C34.714 11.4712 34.5529 11.3122 34.3594 11.2023L20.6094 3.46797C20.4241 3.361 20.2139 3.30469 20 3.30469C19.7861 3.30469 19.5759 3.361 19.3906 3.46797L5.64062 11.2023C5.44711 11.3122 5.28599 11.4712 5.17352 11.6632C5.06105 11.8553 5.0012 12.0736 5 12.2961V27.7023C5.0012 27.9249 5.06105 28.1432 5.17352 28.3352C5.28599 28.5272 5.44711 28.6862 5.64062 28.7961L19.3906 36.5305C19.5759 36.6374 19.7861 36.6938 20 36.6938C20.2139 36.6938 20.4241 36.6374 20.6094 36.5305L34.3594 28.7961C34.5529 28.6862 34.714 28.5272 34.8265 28.3352C34.939 28.1432 34.9988 27.9249 35 27.7023V27.7023Z"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.6562 23.8281V15.7031L12.5 7.34375"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M34.8281 11.6562L20.1406 20L5.17188 11.6562"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.1406 20L20 36.6875"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="faqText flex flex-col gap-1">
              <Typography
                className="font-publicSans max-w-md font-medium text-[#191C1F]"
                variant="text-faq"
              >
                Fasted Delivery
              </Typography>
              <Typography
                className="font-publicSans font-normal text-[#5F6C72]"
                variant="text-faq"
              >
                Delivery in 24/H
              </Typography>
            </div>
          </div>
          <div className="guarantee flex min-h-19 min-w-70 items-center gap-4 border-r border-r-[#E4E7E9] p-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 8.75V17.3594C8.75 23.5625 13.7187 28.7031 19.9219 28.75C21.4058 28.7603 22.8771 28.4769 24.2511 27.9162C25.625 27.3554 26.8744 26.5284 27.9274 25.4827C28.9803 24.437 29.816 23.1933 30.3862 21.8233C30.9565 20.4533 31.25 18.984 31.25 17.5V8.75C31.25 8.41848 31.1183 8.10054 30.8839 7.86612C30.6495 7.6317 30.3315 7.5 30 7.5H10C9.66848 7.5 9.35054 7.6317 9.11612 7.86612C8.8817 8.10054 8.75 8.41848 8.75 8.75Z"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 35H25"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 28.75V35"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.9688 20H32.5C33.8261 20 35.0979 19.4732 36.0355 18.5355C36.9732 17.5979 37.5 16.3261 37.5 15V12.5C37.5 12.1685 37.3683 11.8505 37.1339 11.6161C36.8995 11.3817 36.5815 11.25 36.25 11.25H31.25"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.0625 20H7.48438C6.15829 20 4.88652 19.4732 3.94884 18.5355C3.01116 17.5979 2.48438 16.3261 2.48438 15V12.5C2.48438 12.1685 2.61607 11.8505 2.85049 11.6161C3.08491 11.3817 3.40285 11.25 3.73438 11.25H8.73438"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="faqText flex flex-col gap-1">
              <Typography
                className="font-publicSans max-w-md font-medium text-[#191C1F]"
                variant="text-faq"
              >
                24 Hours Return{' '}
              </Typography>
              <Typography
                className="font-publicSans font-normal text-[#5F6C72]"
                variant="text-faq"
              >
                100% money-back guarantee{' '}
              </Typography>
            </div>
          </div>{' '}
          <div className="money flex min-h-19 min-w-70 items-center gap-4 border-r border-r-[#E4E7E9] p-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 8.75H5C4.30964 8.75 3.75 9.30964 3.75 10V30C3.75 30.6904 4.30964 31.25 5 31.25H35C35.6904 31.25 36.25 30.6904 36.25 30V10C36.25 9.30964 35.6904 8.75 35 8.75Z"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.25 26.25H31.25"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.75 26.25H21.25"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.75 15.1406H36.25"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="faqText flex flex-col gap-1">
              <Typography
                className="font-publicSans max-w-md font-medium text-[#191C1F]"
                variant="text-faq"
              >
                Secure Payment{' '}
              </Typography>
              <Typography
                className="font-publicSans font-normal text-[#5F6C72]"
                variant="text-faq"
              >
                Your money is safe{' '}
              </Typography>
            </div>
          </div>{' '}
          <div className="support flex min-h-19 min-w-70 items-center gap-4 p-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.2344 21.2505H30.2344C29.5713 21.2505 28.9354 21.5139 28.4666 21.9828C27.9978 22.4516 27.7344 23.0875 27.7344 23.7505V30.0005C27.7344 30.6636 27.9978 31.2994 28.4666 31.7683C28.9354 32.2371 29.5713 32.5005 30.2344 32.5005H32.7344C33.3974 32.5005 34.0333 32.2371 34.5021 31.7683C34.971 31.2994 35.2344 30.6636 35.2344 30.0005V21.2505ZM35.2344 21.2505C35.2344 19.2701 34.8424 17.3093 34.0807 15.4813C33.3191 13.6532 32.203 11.994 30.7969 10.5995C29.3907 9.20495 27.7224 8.10268 25.888 7.35625C24.0537 6.60982 22.0897 6.23402 20.1094 6.25052C18.1304 6.23609 16.1681 6.61342 14.3355 7.36078C12.503 8.10814 10.8365 9.21074 9.432 10.6051C8.02751 11.9994 6.91283 13.6578 6.15218 15.4849C5.39153 17.3119 4.99995 19.2715 5 21.2505V30.0005C5 30.6636 5.26339 31.2994 5.73223 31.7683C6.20107 32.2371 6.83696 32.5005 7.5 32.5005H10C10.663 32.5005 11.2989 32.2371 11.7678 31.7683C12.2366 31.2994 12.5 30.6636 12.5 30.0005V23.7505C12.5 23.0875 12.2366 22.4516 11.7678 21.9828C11.2989 21.5139 10.663 21.2505 10 21.2505H5"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="faqText flex flex-col gap-1">
              <Typography
                className="font-publicSans max-w-md font-medium text-[#191C1F]"
                variant="text-faq"
              >
                Support 24/7{' '}
              </Typography>
              <Typography
                className="font-publicSans font-normal text-[#5F6C72]"
                variant="text-faq"
              >
                Live contact/message{' '}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
