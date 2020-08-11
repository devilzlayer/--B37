import React, { useContext, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { map } from 'lodash'
import { Icon } from '../component/';

import { User } from '../service/';

import '../assets/scss/Nav.scss';

function SubmenuSports ({ setGame }) {

	return (
		<>
		<div className="submenu--items">
			<div className="submenu--item info">
				<h5>体育投注</h5>
				<h4>SPORTS EVENTS</h4>
				<p className="subhead">返水最高可达</p>
				<div className="percentage">
					<h2>1.0<small>%</small></h2>
				</div>
				<button>
					<p>查看详情</p>
				</button>
			</div>
			<div className="submenu--item item-n1">
				{/* <div className="logo-wrap"><div className="logo"></div></div> */}
				<div className="main" onClick={e => setGame(e, { id: '1206', 'name': 'BTI体育' })}></div>
				{/* <button className="venue-button" onClick={e => setGame(e, { id: '1206', 'name': 'BTI体育' })}>立即游戏</button> */}
			</div>
			<div className="submenu--item item-n2">
				{/* <div className="logo-wrap"><div className="logo"></div></div> */}
				<div className="main" onClick={e => setGame(e, { id: '1201', name: 'IM体育' })}></div>
				{/* <button className="venue-button" onClick={e => setGame(e, { id: '1201', name: 'IM体育' })}>立即游戏</button> */}
			</div>
			<div className="submenu--item item-n10">
				{/* <div className="logo-wrap"><div className="logo"></div></div> */}
				<div className="main" onClick={e => setGame(e, { id: '1211', name: '沙巴体育' })}></div>
				{/* <button className="venue-button" onClick={e => setGame(e, { id: '1211', name: '沙巴体育' })}>立即游戏</button> */}
			</div>
		</div>
		<div className="submenu-qr-code-item">
			<div className="submenu-qr-image"/>
			<div className="submenu-qr-text">扫描进入下载页面</div>
			<div className="submenu-qr-link">www.ubet8866.app</div>
		</div>
		</>
	);

}

function SubmenuCasino ({ setGame }) {

	return (
		<div className="submenu--items">
			<div className="submenu--item info">
				<h5>真人娱乐</h5>
				<h4>LIVE CASINO</h4>
				<p className="subhead">返水最高可达</p>
				<div className="percentage">
					<h2>1.0<small>%</small></h2>
				</div>
				<button>
					<p>查看详情</p>
				</button>
			</div>
			<div className="submenu--item item-n3">
				{/* <div className="logo-wrap"><div className="logo"></div></div> */}
				<div className="main" onClick={e => setGame(e, { id: '1204', name: 'AG真人' })}></div>
				{/* <button className="venue-button" onClick={e => setGame(e, { id: '1204', name: 'AG真人' })}>立即游戏</button> */}
			</div>
			<div className="submenu--item item-n4">
				{/* <div className="logo-wrap"><div className="logo"></div></div> */}
				<div className="main" onClick={e => setGame(e, { id: '1209', name: 'EB真人' })}></div>
				{/* <button className="venue-button" onClick={e => setGame(e, { id: '1209', name: 'EB真人' })}>立即游戏</button> */}
			</div>
		</div>
	);

}

function SubmenuEsport ({ setGame }) {

	return (
		<div className="submenu--items">
			<div className="submenu--item info">
				<h5>电子竞技</h5>
				<h4>ELECTRONIC SPORTS</h4>
				<p className="subhead">返水最高可达</p>
				<div className="percentage">
					<h2>1.0<small>%</small></h2>
				</div>
				<button>
					<p>查看详情</p>
				</button>
			</div>
			<div className="submenu--item item-n5">
				{/* <div className="logo-wrap"><div className="logo"></div></div> */}
				<div className="main" onClick={e => setGame(e, { id: '1208', name: 'IM电竞' })}></div>
				{/* <button className="venue-button" onClick={e => setGame(e, { id: '1208', name: 'IM电竞' })}>立即游戏</button> */}
			</div>
		</div>
	);

}

function SubmenuChess ({ setGame }) {

	return (
		<div className="submenu--items">
			<div className="submenu--item info">
				<h5>棋牌游戏</h5>
				<h4>POKER GAMES</h4>
				<p className="subhead">返水最高可达</p>
				<div className="percentage">
					<h2>1.0<small>%</small></h2>
				</div>
				<button>
					<p>查看详情</p>
				</button>
			</div>
			<div className="submenu--item item-n9">
				{/* <div className="logo-wrap"><div className="logo"></div></div> */}
				<div className="main" onClick={e => setGame(e, { id: '1205', name: '开元棋牌' })} ></div>
				{/* <button className="venue-button" onClick={e => setGame(e, { id: '1205', name: '开元棋牌' })}>立即游戏</button> */}
			</div>
		</div>
	);

}

function SubmenuSlots ({ setGame }) {

	return (
		<div className="submenu--items">
			<div className="submenu--item info">
				<h5>电子游艺</h5>
				<h4>SLOT GAMES</h4>
				<p className="subhead">返水最高可达</p>
				<div className="percentage">
					<h2>1.0<small>%</small></h2>
				</div>
				<button>
					<p>查看详情</p>
				</button>
			</div>
			<div className="submenu--item item-n6">
				{/* <div className="logo-wrap"><div className="logo"></div></div> */}
				<div className="main" onClick={e => setGame(e, { id: '1207', name: 'CQ电子' })} ></div>
				{/* <button className="venue-button" onClick={e => setGame(e, { id: '1207', name: 'CQ电子' })}>立即游戏</button> */}
			</div>
			<div className="submenu--item item-n7">
				{/* <div className="logo-wrap"><div className="logo"></div></div> */}
				<div className="main" onClick={e => setGame(e, { id: '1202', name: 'PT电子' })}></div>
				{/* <button className="venue-button" onClick={e => setGame(e, { id: '1202', name: 'PT电子' })}>立即游戏</button> */}
			</div>
			<div className="submenu--item item-n8">
				{/* <div className="logo-wrap"><div className="logo"></div></div> */}
				<div className="main" onClick={e => setGame(e, { id: '1203', name: 'MG电子' })} ></div>
				{/* <button className="venue-button" onClick={e => setGame(e, { id: '1203', name: 'MG电子' })}>立即游戏</button> */}
			</div>
		</div>
	);

}

function NavItem (props) {

	if (props.submenu) {
		const SubMenu = props.submenu;
		return (
			<div className="nav-item">
				<span>{props.name}</span>
				<Icon name="chevron-down" />
				<SubmenuWrap name={props.name} setGame={props.setGame}>
					<SubMenu {...props} />
				</SubmenuWrap>
			</div>
		);
	}

	return (
		<NavLink exact to={props.to}>
			<span>{props.name}</span>
		</NavLink>
	);

}

function SubmenuWrap (props) {

	return (
		<div className="submenu-wrap">
			<div className="submenu">
				<div className={`submenu--inner item--${props.name}`}>
					{props.children}
				</div>
			</div>
		</div>
	);

}

function Nav () {

	const history = useHistory();

	const { userAuth } = useContext(User.Context);

	const [form ,setForm ]= useState({
		username: '',
		password: '',
	})

	const fields = [
		{
			name: 'username',
			type: 'text',
			placeholder: '用户名',
			value: form.username,
		},
		{
			name: 'password',
			type: 'password',
			placeholder: '密码',
			tick: '忘记？',
			link: '',
			value: form.password,
		}

	]

	const login = () =>{
		const req = User.login(form)
		req.promise.then(r => {
			localStorage.setItem('user', JSON.stringify(form));
			window.location.reload();

		}, e => {
			
		});
	}


	const logout = async () => {
		await User.logout();
		window.location.reload();
	}

	const onChange = e =>{
		const { name, value } = e.target;

		setForm(f => ({
			...f,
			[name]: value,
		}));
	}


	const setGame = (e, { id, name }) => {
		history.push({
			pathname: `/game/${id}/${name}`,
			search: '?from_home=1',
		});
	}

	return (
		<div className="nav">
			<div className="nav-inner">
				<div className="inline logo-wrap">
					<a href="/">App</a>
				</div>
				<div className="inline menu-wrap">
					<NavItem name="主页" to="/" />
					<NavItem name="体育竞赛" submenu={SubmenuSports} setGame={setGame} />
					<NavItem name="真人娱乐" submenu={SubmenuCasino} setGame={setGame} />
					<NavItem name="电子竞技" submenu={SubmenuEsport} setGame={setGame} />
					<NavItem name="棋牌游戏" submenu={SubmenuChess} setGame={setGame} />
					<NavItem name="电子游戏" submenu={SubmenuSlots} setGame={setGame} />
					<NavItem name="优惠活动" to="/promotions" />
					<NavItem name="APP下载" to="/applications" />
				</div>
				<div className="inline user-wrap">
					{userAuth.data ? (
					<>
					<div className="user-icon"/>
					<div className="user-block">
						<div className="user-links">
							<p className="user-name">{userAuth.data.account}</p>
							<div className="links">
								<Link to="/inbox">信息</Link>
								<Link to="/dashboard/transactions?tab=debit">提款</Link>
								<Link to="/dashboard/deposit?a=1">存款</Link>
								<Link to="/dashboard/transactions?tab=transfer">转账</Link>
							</div>
						</div>
						<div className="user-balance">
							<p className="user-balance-amount">钱包：<i>{userAuth.data.balance}</i> 元</p>
							<button className="logout-button" onClick={logout}>退出登录</button>
						</div>
					</div>
					<div className="user-avatar-wrap">
						<div className="user-avatar" />
						<div className="user-avatar-overlay" />
					</div>
					</>
					) : (
					<div className="home-pre-login">
						<div className="home-pre-fields">
							{fields && map(fields , (obj ,i ) =>{
								return 	<div key={i} className="home-pre-input-wrap">
											<input {...obj} 
											onChange={onChange}
											/>
											{obj.tick && <Link to={obj.link} className="tick">{obj.tick}</Link>}
										</div>
							})}
						</div>
						<div className="home-pre-button">
							<button  onClick={login} className="button-default">登录</button>
							<Link to="/login?tab=signup" className="button-default secondary">注册</Link>
						</div>
					</div>
					)}
				</div>
			</div>
		</div>
	);

}

export default Nav;
