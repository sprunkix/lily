import { NextResponse } from 'next/server';
import { loadMarkdownContent } from '@/lib/content/server';
import type { Language } from '@/lib/i18n';

export async function GET(
  request: Request,
  { params }: { params: { lang: Language; slug: string } }
) {
  try {
    const content = await loadMarkdownContent('games', params.lang, params.slug);
    return NextResponse.json({ 
      slug: params.slug,
      ...content.frontmatter 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Game not found' }, { status: 404 });
  }
}