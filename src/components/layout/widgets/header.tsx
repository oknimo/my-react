import React, { useEffect, useState } from 'react'
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd';
import styled from "styled-components"

const Logo = styled.div`
	float: left;
	width: 120px;
	height: 31px;
	margin: 16px 24px 16px 0;
	background: rgba(255, 255, 255, 0.3);
`
export const Header = () => {
	const { Header } = Layout;
	const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
		key,
		label: `nav ${key}`,
	}));

	return (
		<Header className="header">
			<Logo className="logo" />
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
		</Header>
	)
}