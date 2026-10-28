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
      'Fiction and nonfiction editorial services, specializing in speculative fiction',
    author: 'Minae Lee',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#738940ff',
    secondary: '#9e822cff',
    neutral: 'rgb(250, 250, 245)',
    outline: 'rgb(240, 153, 82)',
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
        label: 'Guide',
        href: '/guide',
      },
      {
        type: 'link',
        label: 'Services',
        href: '/services',
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
      {
        type: 'link',
        label: 'About',
        href: '/about',
      },
    ],
  },
})
