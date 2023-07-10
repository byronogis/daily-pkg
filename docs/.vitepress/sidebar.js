import fg from 'fast-glob'
import matter from 'gray-matter'

const sidebarItemMap = (source) => {
  if (!Array.isArray(source))
    throw new Error('参数需要为数组')

  return source.map((file) => {
    const { data, path } = matter.read(file)
    return {
      text: data.title,
      link: `/${path}`,
    }
  })
}

const guideFiles = fg.sync('guide/**/*.md')
const guideItems = sidebarItemMap(guideFiles)

const packageFiles = fg.sync('package/**/*.md')
const packageItems = sidebarItemMap(packageFiles)

export const sidebarArr = [
  {
    text: '引导',
    items: [...guideItems],
  },
  {
    text: 'Package',
    items: [...packageItems],
  },
]
