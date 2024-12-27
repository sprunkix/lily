import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import type { Language } from '@/lib/i18n';

const GAMES_DIRECTORY = path.join(process.cwd(), 'src/data/games');

export async function GET(
  request: Request,
  { params }: { params: { lang: Language } }
) {
  try {
    const langPath = path.join(GAMES_DIRECTORY, params.lang);
    const files = await fs.readdir(langPath);
    const slugs = files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''));
    
    return NextResponse.json(slugs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch games' }, { status: 404 });
  }
}