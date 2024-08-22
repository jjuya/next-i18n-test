import App, { AppContext, AppInitialProps, AppProps } from 'next/app'


type AppOwnProps = {}

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

MyApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps> => {
	const ctx = await App.getInitialProps(context)

	return { ...ctx }
}

export default MyApp
