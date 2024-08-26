import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'

type AppOwnProps = {}

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	return (
		<NextIntlClientProvider locale={router.locale} messages={pageProps.messages}>
			<Component {...pageProps} />
		</NextIntlClientProvider>
	)
}

MyApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps> => {
	const ctx = await App.getInitialProps(context)

	return { ...ctx }
}

export default MyApp
