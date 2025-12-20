import localFont from 'next/font/local'

export const dimensions = localFont({
  src: './Dimensions.woff2',
  variable: '--font-dimensions',
  weight: '400',
  display: 'swap',
})

export const helvetica = localFont({
  src: './Helvetica.woff2',
  variable: '--font-helvetica',
  weight: '500',
  display: 'swap',
})

export const sfPro = localFont({
  src: './SFPro.woff2',
  variable: '--font-sf',
  weight: '400',
  display: 'swap',
})