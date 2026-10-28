import type { ImageMetadata } from 'astro'

export type NavigationItem =
  | {
      type?: 'link'
      label: string
      href: string
      external?: boolean
      highlight?: boolean
      icon?: string
      excludeFromLauncher?: boolean
    }
  | {
      type: 'dropdown'
      label: string
      icon?: string
      items: {
        label: string
        href: string
        external?: boolean
      }[]
      excludeFromLauncher?: boolean
    }

export type SocialItem = {
  label: string
  href: string
  icon: string
  external?: boolean
}

export type ThemeConfig = {
  name: string
  id: string
  logo?: ImageMetadata | null
  seo: {
    title: string
    subtitle?: string
    description?: string
    author?: string
    image?: ImageMetadata | string | null
  }
  colors: {
    primary: string
    secondary: string
    neutral: string
    outline: string
  }
  navigation: {
    darkmode?: boolean
    items: NavigationItem[]
  }
  socials?: SocialItem[]
}

const defaultConfig: Omit<ThemeConfig, 'name' | 'id' | 'colors'> = {
  seo: {
    title: 'Unravel Editorial',
    subtitle: '',
    description: 'Editorial services for fiction and nonfiction',
    author: 'Minae Lee',
    image: null,
  },
  navigation: {
    darkmode: true,
    items: [],
  },
  socials: [],
}

export function defineThemeConfig(config: ThemeConfig): ThemeConfig {
  return {
    ...config,
    seo: {
      ...defaultConfig.seo,
      ...config.seo,
    },
    colors: config.colors,
    socials: config.socials ?? defaultConfig.socials,
    navigation: {
      ...defaultConfig.navigation,
      ...config.navigation,
    },
  }
}
