'use client'

import { FC, HTMLProps } from 'react'

import clsx from 'clsx'
import { Roboto, Libre_Caslon_Text } from 'next/font/google'

interface TypographyProps extends HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?:
    | 'text_main'
    | 'text_mini_footer'
    | 'text_mobile_footer'
    | 'text_1'
    | 'text_mobile_categories'
    | 'text_categories'
    | 'text_title'
    | 'text_mobile_title'
    | 'text_pageTitle'
    | 'text_mobile_title2'
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
})

const libreCaslonText = Libre_Caslon_Text({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

const variantStyles: Record<string, string> = {
  text_main: clsx('text-main', `${roboto.className}`),
  text_mini_footer: clsx('text-mini-footer', `${roboto.className}`),
  text_mobile_footer: clsx('text-mobile-footer', `${roboto.className}`),
  text_1: clsx('text-1', `${roboto.className}`),
  text_mobile_categories: clsx('text-mobile-categories', `${roboto.className}`),
  text_categories: clsx('text-categories', `${roboto.className}`),
  text_title: clsx('text-title', `${libreCaslonText.className}`),
  text_mobile_title: clsx('text-mobile-title', `${libreCaslonText.className}`),
  text_pageTitle: clsx('text-mobile-title md:text-pageTitle', `${libreCaslonText.className}`),
  text_mobile_title2: clsx('text-mobile-title2', `${libreCaslonText.className}`),
}

export const Typography: FC<TypographyProps> = ({
  children,
  variant = 'text_main',
  className = '',
  tag = 'p',
  ...props
}) => {
  const styles = variantStyles
  const classNames = clsx(styles[variant], className, `${roboto.className}`)
  const Tag = tag

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  )
}
