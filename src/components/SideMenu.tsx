/* eslint-disable no-undef */
import Avatar from '@mui/material/Avatar';
import React from 'react';
import '../css/Menu.scss';
import Image from '../image/609.jpg';
import { Menu, MenuItem, SubMenu } from './Menu';
export const Menus = () => {
	return (
		<div className="contain-sideMenu">
			<div className="info">
				<Avatar
					alt="Remy Sharp"
					className="MuiAvatar-img"
					src={Image}
					sx={{ width: 80, height: 80 }}
				/>
			</div>
			<Menu>
				<MenuItem default href="#/" key={0}>
					首页
				</MenuItem>
				<SubMenu key={10} title="题库">
					<MenuItem href="#/question" key={1} level={1}>
						一年级
					</MenuItem>
					<MenuItem href="#/question" key={2} level={2}>
						二年级
					</MenuItem>
					<MenuItem href="#/question" key={3} level={3}>
						三年级
					</MenuItem>
					<MenuItem href="#/question" key={4} level={4}>
						四年级
					</MenuItem>
					<MenuItem href="#/question" key={5} level={5}>
						五年级
					</MenuItem>
					<MenuItem href="#/question" key={6} level={6}>
						六年级
					</MenuItem>
				</SubMenu>
				<MenuItem href="#/wrongSet" key={20}>
					错题集
				</MenuItem>
				<MenuItem href="#/history" key={30}>
					历史记录
				</MenuItem>
			</Menu>
		</div>
	);
};
