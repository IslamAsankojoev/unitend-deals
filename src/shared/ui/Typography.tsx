'use client'

import { FC, HTMLProps } from 'react'

import clsx from 'clsx'
import { Lato, Poppins, Public_Sans, Rubik } from 'next/font/google'

interface TypographyProps extends HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?:
    | 'text-header'
    | 'text-mainTitle'
    | 'text-faq'
    | 'text-footerSubTitle'
    | 'text-footerTitle'
    | 'text-categories'
    | 'text-title'
    | 'text-dealCardTitle'
    | 'text-cardTitle'
    | 'text-cardSubTitle'
    | 'text-cardPrice'
    | 'text-cardFixedPrice'
    | 'text-cardSale'
    | 'text-welcome'
    | 'font-lato'
    | 'text_cardCaption'
}

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const publicSans = Public_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

const rubik = Rubik({
  weight: ['400'],
  subsets: ['latin'],
})

const variantStyles: Record<string, string> = {
  text_header: clsx('text-header font-bold', `${lato.className}`),
  text_welcome: clsx('text-header', `${lato.className}`),

  text_mainTitle: clsx('text-main', `${lato.className}`),
  text_faq: clsx('text-faq', `${publicSans.className}`),

  text_footerSubTitle: clsx('text-footerSubTitle', `${publicSans.className}`),
  text_footerTitle: clsx('text-footerTitle', `${publicSans.className}`),

  text_categories: clsx('text-categories ', `${lato.className}`),

  text_title: clsx('text-title', `${lato.className}`),

  text_dealCardTitle: clsx('text-dealCard', `${lato.className}`),
  text_cardTitle: clsx('text-cardTitle', `${lato.className}`),
  text_cardSubTitle: clsx('text-cardSubTitle', `${publicSans.className}`),
  text_cardPrice: clsx('text-cardPrice', `${publicSans.className}`),
  text_cardFixedPrice: clsx('text-cardFixedPrice', `${publicSans.className}`),
  text_cardSale: clsx('text-cardSale', `${publicSans.className}`),
  font_dealCardTitle: clsx('font-lato', `${lato.className}`),
  text_cardCaption: clsx('text-cardCaption', `${lato.className}`),
  text_rubik: clsx('rubik', `${rubik.className}`),
}

export const Typography: FC<TypographyProps> = ({
  children,
  variant = 'text_main',
  className = '',
  tag = 'p',
  ...props
}) => {
  const styles = variantStyles
  const classNames = clsx(styles[variant], className, `${lato.className}`)
  const Tag = tag

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  )
}
