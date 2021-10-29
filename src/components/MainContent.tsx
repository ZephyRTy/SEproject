import { observer } from 'mobx-react';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styles from '../css/MainContent.module.css';
import { User } from '../utils/user';
import { IndexPage } from './IndexPage';
import { LogIn } from './LogIn';
import { Nothing } from './nothing';
export const MainContent = observer((props: { user: User }) => {
	return (
		<Router>
			<div className={styles.mainContent}>
				<Switch>
					<Route path="/question">
						<Nothing />
					</Route>
					<Route path="/">
						{props.user.isLogIn ? (
							<IndexPage />
						) : (
							<LogIn user={props.user} />
						)}
					</Route>
				</Switch>
			</div>
		</Router>
	);
});
