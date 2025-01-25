import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'data', 'games')

export function getSortedGamesData(lang = 'en') {
  // Get file names under /data/games
  const fileNames = fs.readdirSync(path.join(postsDirectory))
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '')
    // Read markdown file as string
    const mainFilePath = path.join(postsDirectory, fileName,"0.md")
    const mainContents = fs.readFileSync(mainFilePath, 'utf8')
    const titleFile = path.join(postsDirectory, fileName,`${lang}.md`)
    const titleContents = fs.readFileSync(titleFile, 'utf8')
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(mainContents)
    const titlerResult = matter(titleContents)
    // Combine the data with the id
    return {
      slug:matterResult.data.slug,
      title: titlerResult.data.title?titlerResult.data.title:matterResult.data.title,
      ogImage: matterResult.data.ogImage,
      gameUrl: matterResult.data.title ? path.join("/",lang,"game",slug) : matterResult.data.gameUrl,
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

   const mainFilePath = path.join(postsDirectory, slug,"0.md")
   const mainContents = fs.readFileSync(mainFilePath, 'utf8')
   const contentFile = path.join(postsDirectory, slug,`${lang}.md`)
   const contentContents = fs.readFileSync(contentFile, 'utf8')
   // Use gray-matter to parse the post metadata section and merge results
   const matterResult = matter(mainContents)
   const contentResult = matter(contentContents)
   const mergedResult = {
     data: {
       ...matterResult.data,
       ...contentResult.data
     },
     content: contentResult.content
   }
   //console.log(contentFile)
   //console.log(matterResult)
   //console.log(mergedResult)
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(mergedResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    title: mergedResult.data.title,
    pageTitle: mergedResult.data.pageTitle,
    description: mergedResult.data.description,
    gameUrl: mergedResult.data.gameUrl,
    ogImage: mergedResult.data.ogImage,
    keywords: mergedResult.data.keywords,
    features: mergedResult.data.features,
    videosUrl: mergedResult.data.videosUrl,
    faqs: mergedResult.data.faqs,
    date: mergedResult.data.date,
  };
}