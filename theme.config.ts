import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/images/minae-2024.jpg'
import logoImage from '@assets/img/green-spiral.svg'

export default defineThemeConfig({
  name: 'Unravel Editorial',
  id: 'unravel-editorial-website',
  logo: logoImage,
  seo: {
    title: 'Unravel Editorial',
    description:
      'Fiction and fiction editorial services',
    author: 'Minae Lee',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#738940ff',
    secondary: '#9e822cff',
    neutral: '#f3f5f8ff',
    outline: '#52def0ff',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Services',
        href: '/services',
      },
      {
        type: 'link',
        label: 'About / Contact',
        href: '/about',
      },
    ],
  },
})
