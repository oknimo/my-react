import React, { useEffect, useState } from 'react'
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

export const Content = () => {
	const { Content } = Layout;

	return (
		<Layout style={{ padding: '0 24px 24px' }}>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb>
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
						background: '#ffffff'
					}}
				>
					<Outlet />
				</Content>
		</Layout>
	)
}