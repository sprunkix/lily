import { NextResponse } from 'next/server';
import { loadMarkdownContent } from '@/lib/content/server';
import type { Language } from '@/lib/i18n';

export async function GET(
  request: Request,
  { params }: { params: { lang: Language; type: string } }
) {
  try {
    const content = await loadMarkdownContent('home', params.lang, params.type);
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Content not found' }, { status: 404 });
  }
}