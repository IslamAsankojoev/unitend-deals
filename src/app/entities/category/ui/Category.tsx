import { Typography } from '@/src/shared'
import Image from 'next/image'

export const Category = () => {
  return (
    <div className="shop-categorie flex-column items-center justify-center">
      <button className="categorie mb-3 flex min-h-36.5 min-w-36.5 items-center justify-center rounded-[100%] bg-[#F5F5F5]">
        <Image
          src={'/assets/img/shop-categorie1.svg'}
          className="min-h-26.75 min-w-14.25"
          width={14.25}
          alt={'shop category '}
          height={26.75}
        />
      </button>
      <Typography className="text-center">Mobile</Typography>
    </div>
  )
}
