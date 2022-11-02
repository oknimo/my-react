import React from "react";
import { BrowserRouter, HashRouter, useNavigate } from 'react-router-dom'
import { MainRoutes } from "./routes";

interface Props {}
const IRouter = import.meta.env.DEV ? HashRouter : BrowserRouter
export default function() {
// export const myRoutes: React.FC<Props> = (props) => {
	return (
		<IRouter>
			<MainRoutes />
		</IRouter>
	)
}