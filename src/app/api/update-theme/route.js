import { writeFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { color } = await request.json();

    if (!color) {
      return NextResponse.json(
        { error: 'Color is required' },
        { status: 400 }
      );
    }

    const filePath = join(process.cwd(), 'src/helpers/colorHelper.js');
    const content = `export const THEME_COLOR = "${color}";\n`;

    writeFileSync(filePath, content, 'utf8');

    return NextResponse.json(
      { success: true, message: 'Theme color updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating theme color:', error);
    return NextResponse.json(
      { error: 'Failed to update theme color' },
      { status: 500 }
    );
  }
}
