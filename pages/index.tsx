import { GetStaticPropsContext } from 'next'
import React from 'react'
import { HomeView } from '@/views'

export default function Home() {
	return <HomeView />
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`../messages/shared/${locale}.json`)).default,
		},
	}
}
