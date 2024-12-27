import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import type { Language } from '@/lib/i18n';

const GAMES_DIRECTORY = path.join(process.cwd(), 'src/data/games');

export async function GET(
  request: Request,
  { params }: { params: { lang: Language; slug: string } }
) {
  try {
    const langPath = path.join(GAMES_DIRECTORY, params.lang);
    const files = await fs.readdir(langPath);
    const otherFiles = files
      .filter(file => file.endsWith('.md') && file !== `${params.slug}.md`)
      .slice(0, 3);

    const games = await Promise.all(
      otherFiles.map(async file => {
        const fullPath = path.join(langPath, file);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const { data } = matter(fileContents);
        const slug = file.replace(/\.md$/, '');
        return { slug, ...data };
      })
    );

    return NextResponse.json(games);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch related games' }, { status: 404 });
  }
}