import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
	const supportedLocales = ['en', 'ko', 'vi']
	const defaultLocale = 'vi'

	if (
		!req.nextUrl.pathname.startsWith('/_next') &&
		!req.nextUrl.pathname.includes('/api/') &&
		!PUBLIC_FILE.test(req.nextUrl.pathname)
	) {
		const locale = supportedLocales.find((loc) => req.nextUrl.pathname.startsWith(`/${loc}`))

		if (!locale) {
			req.nextUrl.pathname = `/${defaultLocale}${req.nextUrl.pathname}`;
			return NextResponse.redirect(req.nextUrl);
		}

		return NextResponse.next()
	}
}
