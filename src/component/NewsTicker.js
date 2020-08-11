import React, { useEffect, useState } from 'react';
import Ticker from 'react-ticker';

import { Promotions } from '../service/';
// import TickerOver from '../component/TickerOver';
import TickerOver from '../component/TickerOver'

import '../assets/scss/Ticker.scss';

function NewsTicker (props) {
	const { onPop } = props
	const [ tickerOver, setTickerOver ] = useState(false);
	const [ ticker, setTicker ] = useState({
		text: '',
		news: [],
	});

	useEffect(() => {

		const q = Promotions.getAnnouncements({ num: 1 });

		q.promise.then(r => {

			setTicker(t => ({
				...t,
				text: r.info.map(n => n.content).join(' '),
				news: r.info.map(n => ({ title: n.content, text: n.edit_time })),
			}));

		}, e => {

			if (!e.is_aborted) {
				console.warn(e);
			}

		});

		return () => q.cancel();

	}, []);

	return (
		<>
			<div className="ticker-wrap" >
				<div onClick={() => setTickerOver(true)}>
					{ticker.text ? (
					<Ticker speed={1}>
					{() => <p>{ticker.text}</p>}
					</Ticker>
					) : null}
				</div>
				<div className="ticker-online-service-wrap" onClick={() => onPop()}>
					<div className="ticker-online-service-icon" />
					<div className="ticker-text-online-service">在线客服</div>
				</div>
			</div>
			{tickerOver ? <TickerOver onClose={() => setTickerOver(false)} news={ticker.news} /> : null}
		</>
	);

}

export default NewsTicker;
