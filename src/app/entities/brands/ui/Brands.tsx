import Image from 'next/image'

export const Brands = () => {
  return (
    <div className="brands-slider">
      <div className="container">
        <div className="pagination-container flex justify-between gap-5">
          <Image
            className="pagin1 min-h-56.5 min-w-106.25"
            src={'/assets/img/pagin1.svg'}
            alt={'iphone'}
            width={106.25}
            height={56.5}
          />
          <Image
            className="pagin2 min-h-56.5 min-w-106.25"
            src={'/assets/img/pagin2.svg'}
            alt={'iphone'}
            width={106.25}
            height={56.5}
          />
          <Image
            className="pagin3 min-h-56.5 min-w-106.25"
            src={'/assets/img/pagin3.svg'}
            alt={'iphone'}
            width={106.25}
            height={56.5}
          />
          <div className="pagination-placeHolder"></div>
        </div>
      </div>
    </div>
  )
}
