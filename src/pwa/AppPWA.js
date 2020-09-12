import React, { useEffect, useContext } from "react";
import {
  Link,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import {isIOS , isAndroid} from 'react-device-detect'
import { User } from "../service";

import * as Views from "./view/";
import { MenuSA } from "./component/";

import { TRANSLATE } from '../options'


import "./assets/scss/App.scss";

var devModel = "iPhone";

const PageFrame = (props) => {
  const Component = props.component;

  return (
    <>
      <Component {...props} />
      <MenuSA />
    </>
  );
};

const AppPWA = () => {
  const { setUserAuthFN, userAuth } = useContext(User.Context);

  function referralCheck(location) {
    const websites = ["https://www.xxx.com/"];
    const prevURL = document.referrer;
    const result = websites.filter((site) => site === prevURL);
    const agentName = new URLSearchParams(location.search).get("act");

    if (result.length > 0) {
      localStorage.setItem("referral", JSON.stringify("123"));
    } else if (agentName) {
      localStorage.setItem("referral", JSON.stringify(agentName));
    }
  }

  useEffect(() => {
    document.body.classList.add("body-pwa");

    return () => document.body.classList.remove("body-pwa");
  }, []);


  const onClose = () =>{
    setUserAuthFN(userAuth.status, userAuth.data, false);
  }

  const onClickApp = () => {
    // console.log(isAndroid, isIOS)
    if(isAndroid){
      window.location.href = `https://www.u2d8899.com/download/2020new.apk`
    } 
    if(isIOS){
      // window.location.href = `http://www.ss88ss88.com/u2020new.html`
      // window.location.href = `https://lk.16888888888888.com/g5cvghe7`
      window.location.href = `https://a123.16888888888888.com/g5cvghe7`
    }

  }

  // console.log(userAuth)

  return (
    <div className="app-sa">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"
            render={(props) => {
              referralCheck(props.location);
              return <PageFrame {...props} component={Views.Home} />;
            }}
          />
          <Route exact path="/promotions" render={() => <PageFrame component={Views.Promotions} />} />
          <Route exact path="/promotion/:id" render={() => <PageFrame component={Views.Promotion} />}/>
          <Route path="/profile" render={() => <PageFrame component={Views.Profile} />}/>
          <Route exact path="/login" component={Views.Login} />
          <Route exact path="/game/:id/:name" component={Views.Game} />
          <Route exact path="/about" component={Views.About} />

          <Route exact path="/inbox" component={Views.Inbox} />

          <Route exact path="/collection" component={Views.Collection} />
          <Route exact path="/feedback" component={Views.Feedback} />
          <Route exact path="/transaction-record" component={Views.TransactionRecord} />
          <Route exact path="/referral" component={Views.Referral} />
          <Route exact path="/speed-app" component={Views.SpeedApp} />
          <Route exact path="/join-us" component={Views.JoinUs} />
          <Route exact path="/deposit-history" component={Views.DepositHistory}/>
          <Route exact path="/promo-history" component={Views.PromoHistory} />
          <Route exact path="/transfer-record" component={Views.TransferRecord} />
          <Route exact path="/rebate-history" component={Views.RebateHistory} />
          <Route exact path="/withdrawal-history" component={Views.WithdrawalHistory} />
          
          <Route exact path="/deposit-method" component={Views.DepositMethod} />

          <Route exact path="/news" component={Views.News} />
          <Route exact path="/vip" component={Views.Vip} />
          <Route exact path="/vip-details" component={Views.VipDetails} />

          <Route exact path="/restore" component={Views.Restore} />
          <Redirect to="/" />
        </Switch>
        {userAuth.modal && !userAuth.modal.wap && (
          <div className="ticker-over-sa shown">
            <div className="ticker-over-sa-cont">
              <div className="ticker-over-sa--header">
                <h3>{TRANSLATE('登录提醒')}</h3>
              </div>
              <div className="ticker-over-sa--body">
                <div className="ticker-text">{TRANSLATE('此功能进队注册会员开放')}</div>
                <div className="ticker-button">
                  <button className="btn ticker-close" onClick={onClose}>
                    {TRANSLATE('关闭')}
                  </button>
                  <Link
                    to="/login"
                    className="btn ticker-view"
                    onClick={onClose}
                  >
                    {TRANSLATE('查看全部')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {userAuth.modal && userAuth.modal.error && (
          <div className="ticker-over-sa shown error">
            <div className="ticker-over-sa-cont">
              <div className="ticker-over-sa--header">
                <h3>系统提示</h3>
              </div>
              <div className="ticker-over-sa--body">
                <div className="ticker-text">{userAuth.modal.error}</div>
                <div className="ticker-button">
                  <button className="btn ticker-close" onClick={onClose}>
                    确认
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}


        {userAuth.modal && userAuth.modal.wap && (
          <div className="ticker-over-sa shown wap">
            <div className="ticker-over-sa-cont">
              <div className="ticker-over-sa--body">
                <span className="xclose" onClick={onClose}/>
                <div className="ticker-text">请选择打开方式</div>
                <div className="ticker-button">
                  <a 
                    {...userAuth.modal.wap.rest}
                    href={userAuth.modal.wap.pathname}
                    className="btn ticker-close"
                    onClick={onClose}>
                    WAP
                  </a>
                  <button
                    className="btn ticker-view"
                    onClick={onClickApp}
                  >
                    APP
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default AppPWA;
