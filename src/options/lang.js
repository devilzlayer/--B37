/*
    CAREFUL EDITING
*/
//  =============== START HERE =============//
const LANG = [
    [ 
        { lang : 'zh' , word : '充值', },
        { lang : 'en' , word : 'Deposit', },
    ],
    [ 
        { lang : 'zh' , word : '转账', },
        { lang : 'en' , word : 'Transfer', },
    ],
    [ 
        { lang : 'zh' , word : '提款', },
        { lang : 'en' , word : 'Withraw', },
    ],
    [ 
        { lang : 'zh' , word : '信息', },
        { lang : 'en' , word : 'Inbox', },
    ],
    [ 
        { lang : 'zh' , word : '体育', },
        { lang : 'en' , word : 'Sports', },
    ],
    [ 
        { lang : 'zh' , word : '真人', },
        { lang : 'en' , word : 'Casino', },
    ],
    [ 
        { lang : 'zh' , word : '电竞', },
        { lang : 'en' , word : 'Esports', },
    ],
    [ 
        { lang : 'zh' , word : '棋牌', },
        { lang : 'en' , word : 'Poker', },
    ],
    [ 
        { lang : 'zh' , word : '电子', },
        { lang : 'en' , word : 'Games', },
    ],

    [ 
        { lang : 'zh' , word : '首页', },
        { lang : 'en' , word : 'Home', },
    ],
    [ 
        { lang : 'zh' , word : '优惠', },
        { lang : 'en' , word : 'Promo', },
    ],
    [ 
        { lang : 'zh' , word : '客服', },
        { lang : 'en' , word : 'Chat', },
    ],
    [ 
        { lang : 'zh' , word : '我的', },
        { lang : 'en' , word : 'Account', },
    ],

    [ 
        { lang : 'zh' , word : '登录提醒', },
        { lang : 'en' , word : 'Login', },
    ],
    [ 
        { lang : 'zh' , word : '此功能进队注册会员开放', },
        { lang : 'en' , word : 'Please login or register', },
    ],
    [ 
        { lang : 'zh' , word : ['关闭','取消'], },
        { lang : 'en' , word : 'Cancel', },
    ],
    [ 
        { lang : 'zh' , word : '查看全部', },
        { lang : 'en' , word : 'Join now', },
    ],

    [ 
        { lang : 'zh' , word : 'U体育', },
        { lang : 'en' , word : 'U Sports', },
    ],
    [ 
        { lang : 'zh' , word : '赞助伙伴', },
        { lang : 'en' , word : 'Sponsorship', },
    ],
    [ 
        { lang : 'zh' , word : '奥格斯堡', },
        { lang : 'en' , word : 'FC Augsburg', },
    ],
    [ 
        { lang : 'zh' , word : '登录', },
        { lang : 'en' , word : 'Login', },
    ],
    [ 
        { lang : 'zh' , word : '注册', },
        { lang : 'en' , word : 'Register', },
    ],
    [ 
        { lang : 'zh' , word : '用户名', },
        { lang : 'en' , word : 'Username', },
    ],
    [ 
        { lang : 'zh' , word : '密码', },
        { lang : 'en' , word : 'Password', },
    ],
    [ 
        { lang : 'zh' , word : '忘记密码了吗', },
        { lang : 'en' , word : 'Forget your password?', },
    ],

    [ 
        { lang : 'zh' , word : '再次输入密码', },
        { lang : 'en' , word : 'Confirm Password', },
    ],
    [ 
        { lang : 'zh' , word : '11号手机号', },
        { lang : 'en' , word : 'Phone number', },
    ],
    [ 
        { lang : 'zh' , word : '好友优惠推荐码', },
        { lang : 'en' , word : 'Affiliate Code', },
    ],
    [ 
        { lang : 'zh' , word : '促销活动', },
        { lang : 'en' , word : 'Promotions', },
    ],
    [ 
        { lang : 'zh' , word : '更多内容', },
        { lang : 'en' , word : 'Show More', },
    ],

    [ 
        { lang : 'zh' , word : 'VIP详情', },
        { lang : 'en' , word : 'VIP System', },
    ],
    [ 
        { lang : 'zh' , word : '中心', },
        { lang : 'en' , word : 'Main wallet', },
    ],

    [ 
        { lang : 'zh' , word : '交易记录', },
        { lang : 'en' , word : 'Transaction history', },
    ],
    [ 
        { lang : 'zh' , word : '优惠领取', },
        { lang : 'en' , word : 'Free Bonus', },
    ],
    [ 
        { lang : 'zh' , word : '邀请奖励', },
        { lang : 'en' , word : 'Referral', },
    ],
    [ 
        { lang : 'zh' , word : '个人资料', },
        { lang : 'en' , word : 'Personal Setting', },
    ],
    [ 
        { lang : 'zh' , word : '加入我们', },
        { lang : 'en' , word : 'Affiliate', },
    ],
    [ 
        { lang : 'zh' , word : '关于我们', },
        { lang : 'en' , word : 'About US', },
    ],
    [ 
        { lang : 'zh' , word : '极速APP', },
        { lang : 'en' , word : '1-Click App', },
    ],
    [ 
        { lang : 'zh' , word : '意见反馈', },
        { lang : 'en' , word : 'Feedback', },
    ],

    [ 
        { lang : 'zh' , word : '转账', },
        { lang : 'en' , word : 'Transfer', },
    ],
    [ 
        { lang : 'zh' , word : '中心钱包', },
        { lang : 'en' , word : 'Main wallet', },
    ],
    [ 
        { lang : 'zh' , word : '一键回收', },
        { lang : 'en' , word : '1-Click', },
    ],

    [ 
        { lang : 'zh' , word : '推出', },
        { lang : 'en' , word : 'From', },
    ],
    [ 
        { lang : 'zh' , word : '进入', },
        { lang : 'en' , word : 'To', },
    ],
    [ 
        { lang : 'zh' , word : '金额', },
        { lang : 'en' , word : 'Amount', },
    ],
    [ 
        { lang : 'zh' , word : '最大金额', },
        { lang : 'en' , word : 'Max', },
    ],
    [ 
        { lang : 'zh' , word : '立即转账', },
        { lang : 'en' , word : 'Transfer Now', },
    ],

    [ 
        { lang : 'zh' , word : '转账成功', },
        { lang : 'en' , word : 'Successful', },
    ],
    [ 
        { lang : 'zh' , word : '确认', },
        { lang : 'en' , word : 'OK', },
    ],

    [ 
        { lang : 'zh' , word : '系统提示', },
        { lang : 'en' , word : 'Please Note', },
    ],
    [ 
        { lang : 'zh' , word : '余额不足', },
        { lang : 'en' , word : 'Insufficent', },
    ],

    [ 
        { lang : 'zh' , word : '马上提款', },
        { lang : 'en' , word : 'Withraw', },
    ],
    [ 
        { lang : 'zh' , word : '选择银行卡', },
        { lang : 'en' , word : 'Select', },
    ],
    [ 
        { lang : 'zh' , word : '新增银行卡', },
        { lang : 'en' , word : 'Add bank acc', },
    ],
    [ 
        { lang : 'zh' , word : '解绑银行卡', },
        { lang : 'en' , word : 'Delete bank acc', },
    ],
    [ 
        { lang : 'zh' , word : '提交', },
        { lang : 'en' , word : 'Submit', },
    ],
    [ 
        { lang : 'zh' , word : '最近30天', },
        { lang : 'en' , word : 'Last 30 Days', },
    ],
    [ 
        { lang : 'zh' , word : '信息', },
        { lang : 'en' , word : 'Inbox', },
    ],
    [ 
        { lang : 'zh' , word : '暂无记录', },
        { lang : 'en' , word : 'No record', },
    ],

    [ 
        { lang : 'zh' , word : '存款记录', },
        { lang : 'en' , word : 'Deposit History', },
    ], 
    [ 
        { lang : 'zh' , word : '提款记录', },
        { lang : 'en' , word : 'Withrawal History', },
    ],
    [ 
        { lang : 'zh' , word : '转账记录', },
        { lang : 'en' , word : 'Transfer History', },
    ], 
    [ 
        { lang : 'zh' , word : '优惠记录', },
        { lang : 'en' , word : 'Promotion History', },
    ],
    [ 
        { lang : 'zh' , word : ['反水记录','返水记录'], },
        { lang : 'en' , word : 'Rebate History', },
    ],

    [ 
        { lang : 'zh' , word : 'VIP特权', },
        { lang : 'en' , word : 'Privileges', },
    ],
    [ 
        { lang : 'zh' , word : ['加入U体育' , '天'] , },
        { lang : 'en' , word : 'Days with U', },
    ],
    [ 
        { lang : 'zh' , word : '先去逛逛' , },
        { lang : 'en' , word : 'Go To Home Page', },
    ],
    

    

    //===========================================================
    //================================== GAME LIST 
    //===========================================================
    [ 
        { lang : 'zh' , word : 'BTI体育', },
        { lang : 'en' , word : 'BTI SB', },
    ],
    [ 
        { lang : 'zh' , word : 'IM体育', },
        { lang : 'en' , word : 'IM SB', },
    ],
    [ 
        { lang : 'zh' , word : '沙巴体育', },
        { lang : 'en' , word : 'IBC SB', },
    ],
    [ 
        { lang : 'zh' , word : 'AG真人', },
        { lang : 'en' , word : 'AG SB', },
    ],
    [ 
        { lang : 'zh' , word : 'EB真人', },
        { lang : 'en' , word : 'EB SB', },
    ],
    [ 
        { lang : 'zh' , word : 'IM电竞', },
        { lang : 'en' , word : 'IM SB', },
    ],
    [ 
        { lang : 'zh' , word : '开元棋牌', },
        { lang : 'en' , word : 'KY SB', },
    ],
    [ 
        { lang : 'zh' , word : 'CQ电子', },
        { lang : 'en' , word : 'CQ SB', },
    ],
    [ 
        { lang : 'zh' , word : 'PT电子', },
        { lang : 'en' , word : 'PT SB', },
    ],
    [ 
        { lang : 'zh' , word : 'MG电子', },
        { lang : 'en' , word : 'MG SB', },
    ],
    [ 
        { lang : 'zh' , word : '确定', },
        { lang : 'en' , word : 'Determine', },
    ],
 
    
]

export default LANG