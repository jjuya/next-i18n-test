import Link from 'next/link'
import { useRouter } from 'next/router'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import { useTranslations } from 'next-intl'

export const HomeView = ({ ...props }) => {
	const router = useRouter()
	const { locale, locales, defaultLocale } = router

	const headerMessage = useTranslations('Header')
	const footerMessage = useTranslations('Footer')

	return (
		<div>
			<h1>{headerMessage('title')}</h1>
			<h2>{headerMessage('subTitle')}</h2>

			<p>Current locale: {locale}</p>
			<p>Default locale: {defaultLocale}</p>
			<p>Configured locales: {JSON.stringify(locales)}</p>

			<LocaleSwitcher/>


			<h2>
				{footerMessage('title')}
			</h2>
		</div>
	)
}
