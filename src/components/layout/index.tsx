/**
 * 布局页面
 */

import React, { useEffect, useState } from 'react'
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom'
import { Header } from './widgets/header';
import { Sidebar } from './widgets/sidebar';
import { Content } from './widgets/content';

const AppRoot = () => {
	const navigate = useNavigate()
	useEffect( ()=> {
		navigate('/index', {
      replace: true
    })
		const el = document.getElementById('root')
		if (el) {
			el.style.height = '100%'
		}
	}, [])

	return (
		<Layout style={{ height: 'var(--layout-height, 100vh)' }}>
			<Header />
			<Layout>
				<Sidebar />
				<Content />
			</Layout>
		</Layout>
	)
}
export default AppRoot
