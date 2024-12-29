import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'data', 'games')

export function getSortedGamesData(lang = 'en') {
  // Get file names under /data/games
  const fileNames = fs.readdirSync(path.join(postsDirectory, lang))
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, lang, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    // Combine the data with the id
    return {
      slug:matterResult.data.slug,
      title: matterResult.data.title,
      ogImage: matterResult.data.ogImage,
      gameUrl: matterResult.data.features && matterResult.data.features.length > 0 ? path.join("/",lang,"game",slug) : matterResult.data.gameUrl,
      position: matterResult.data.position,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.position < b.position) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getGameData(lang, slug) {
  const fullPath = path.join(postsDirectory, lang, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    description: matterResult.data.description,
    gameUrl: matterResult.data.gameUrl,
    ogImage: matterResult.data.ogImage,
    keywords: matterResult.data.keywords,
    features: matterResult.data.features,
    videos: matterResult.data.videos,
    faqs: matterResult.data.faqs,
    date: matterResult.data.date,
  };
}