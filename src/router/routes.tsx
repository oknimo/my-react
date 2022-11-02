import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import AppRoot from '../components/layout'
import HomePage from '../views/home'

export const MainRoutes = () => {
	const myRoutes = [
		{
			path: '/',
			element: <AppRoot />,
			children: [
				{
					path: 'index',
					element: <HomePage />
				}
			]
		}
	]

	return useRoutes(myRoutes)
}