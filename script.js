/* Ningbo destination guide. Ratings/review notes are tied to the source links in each record. */
const xhs = q => `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(q)}`;
const amap = (name, location) => `https://uri.amap.com/marker?position=${location}&name=${encodeURIComponent(name)}&coordinate=gaode&callnative=0`;

const sights = [
  { id:'tianyi',name:'天一阁 · 月湖',kind:'老城散步',glyph:'阁',lat:29.8708,lng:121.5422,summary:'藏书楼与水巷园林相邻，适合慢慢逛半天。',reason:'想看宁波的历史底色，这里很有代表性；园林尺度也舒服，能把节奏放慢。',visit:'天一阁为收费景区；预约及票务要求请在出发前从官方景区页面确认。月湖开放区域可散步。',booking:'是否需预约：当前具体规则未核实。预约/票务入口：天一阁官方景区页面；页面未给出可确认的预约步骤。',transit:'地铁 1 号线「西门口」站，步行约 10–15 分钟；从阪急一带打车/自驾也方便，景区周边有停车场，节假日建议优先地铁。',official:'https://nbtygyh.haishu.gov.cn/sight_1.html',xhsq:'宁波 天一阁 月湖 游玩攻略',tags:['古建筑','园林','适合慢逛']},
  { id:'bund',name:'老外滩',kind:'江边夜景',glyph:'滩',lat:29.8832,lng:121.5587,summary:'三江口边的老建筑、咖啡馆和夜色，逛吃都轻松。',reason:'不用做复杂攻略，沿江散步、看建筑、找家店坐坐，很适合两个人轻松晃一圈。',visit:'街区公共步行区域一般无需预约；具体店铺和展馆另行确认。',booking:'预约：街区步行区域未见统一预约入口；个别场馆、餐厅按商家要求预约。',transit:'地铁 2 号线「外滩大桥」站，步行可达；自驾可导航街区附近停车场，夜间和周末车位紧张时地铁更省心。',official:'https://www.nbwb.net/',xhsq:'宁波 老外滩 游玩攻略 夜景',tags:['江景','夜游','咖啡']},
  { id:'museum',name:'宁波博物馆',kind:'建筑与展览',glyph:'博',lat:29.8175,lng:121.5488,summary:'王澍设计的建筑本身就值得看，室内展览可避晒避雨。',reason:'建筑很有辨识度，展览内容能补上宁波的人文背景；天气不理想时也是舒服的去处。',visit:'官方页面公布开放时间为周二至周日 9:00–17:00（16:00停止入馆），周一闭馆；节假日以公告为准。',booking:'预约：2026 年公开公告提到免费、免预约；临展和节假日可能调整，请以宁波博物馆官网最新公告为准。',transit:'地铁 3 号线「鄞州区政府」站，步行约 10 分钟；自驾可停馆内/周边停车场，节假日建议查看实时车位。',official:'https://www.nbmuseum.cn/',xhsq:'宁波博物馆 建筑 游玩攻略',tags:['建筑','室内','免费']},
  { id:'dongqian',name:'东钱湖',kind:'湖边放空',glyph:'湖',lat:29.7625,lng:121.6380,summary:'宁波近郊的大湖，沿湖有村落、步道和不同小景区。',reason:'想看开阔水面、吹风发呆可以来；可只挑一个湖边片区，不需要环湖打卡。',visit:'东钱湖范围较大，湖区公共空间与收费景点规则不同；具体景点开放、预约及停车按目的地确认。',booking:'预约：湖区无统一景点预约信息；收费景区按官方入口分别购票/预约。可从东钱湖旅游度假区官方信息入口查询。',transit:'地铁 4 号线「东钱湖」站到达湖区边缘；湖区景点分散，接驳公交/步行较多，自驾更方便，停车按具体景点导航。',official:'https://www.dongqianlake.com/',xhsq:'宁波 东钱湖 游玩攻略',tags:['湖景','近郊','自驾友好']},
  { id:'cicheng',name:'慈城古县城',kind:'古镇闲逛',glyph:'城',lat:30.0205,lng:121.4513,summary:'老街、古县衙和传统建筑集中，适合边走边吃。',reason:'离市区不算太远，街巷比大型景区松弛；喜欢老房子、糕团和慢节奏可以选这里。',visit:'古县城街区与收费景点（如县衙、孔庙等）票务规则不同；部分场馆可能单独售票。',booking:'预约：未核实当前是否需预约。可在「慈城古县城」官方旅游入口查看开放与票务；不要把街区免费通行等同于馆舍免票。',transit:'地铁 4 号线「慈城」站；下车后按目的地步行或接驳。自驾导航慈城古县城停车场较直接，周末留意车位。',official:'https://www.cicheng.net/',xhsq:'宁波 慈城古县城 游玩攻略',tags:['老街','历史','近郊']},
  { id:'xikou',name:'溪口 · 雪窦山',kind:'山水远郊',glyph:'山',lat:29.6902,lng:121.2781,summary:'溪口老街与雪窦山景区组合，山林、瀑布和人文路线。',reason:'更像一次完整的山水小旅行，风景与城区差异明显；适合愿意留出大半天的人。',visit:'雪窦山等景区通常涉及门票/景区交通；票种、预约和开放情况需以官方购票页为准。',booking:'预约：请通过雪窦山/溪口风景区官方购票入口确认；页面暂未核实国庆期间政策。',transit:'建议自驾，城区出发车程较长；景区内按票务规则换乘景交车。公共交通需先到奉化/溪口再接驳，耗时较多。',official:'https://www.xikoutourism.com/',xhsq:'宁波 溪口 雪窦山 游玩攻略',tags:['山景','瀑布','远郊']},
  { id:'qiantong',name:'前童古镇',kind:'古镇远行',glyph:'巷',lat:29.1817,lng:121.4314,summary:'保存较完整的明清古村落，巷弄与老宅适合慢走观察。',reason:'比市区更安静，有生活气息；喜欢看老建筑、拍巷子，可以把它作为宁海方向的目的地。',visit:'古镇景区票务、开放范围和村内场馆规则请以官方公告为准。',booking:'预约：当前是否预约未核实；可从宁海文旅官方渠道或景区售票页确认。',transit:'自驾最方便；公共交通可乘高铁到宁海站后转当地公交/出租车，需预留接驳时间。景区周边按现场指引停车。',official:'https://www.ninghai.gov.cn/',xhsq:'宁波 前童古镇 游玩攻略',tags:['古村','摄影','远郊']},
  { id:'shipu',name:'象山石浦渔港古城',kind:'海边远郊',glyph:'港',lat:29.2076,lng:121.9472,summary:'渔港、老街和海边风物，想感受海港气息可以来。',reason:'能看到和市区很不一样的海港日常；适合喜欢海鲜、渔港老街和沿海风景的人。',visit:'古城街区与周边景点票务可能不同；景区开放、预约及节假日停车以官方渠道为准。',booking:'预约：当前规则未核实，请查看象山文旅/石浦景区官方售票信息。',transit:'推荐自驾，距离城区较远；公共交通需到象山县城/石浦再接驳。旺季停车可能紧张，优先按景区停车指引。',official:'https://www.xiangshan.gov.cn/',xhsq:'象山石浦渔港古城 游玩攻略',tags:['渔港','海鲜','远郊']},
  { id:'tiantong',name:'天童禅寺',kind:'山林清静',glyph:'寺',lat:29.8076,lng:121.7754,summary:'千年寺院藏在山林间，适合安静走走、看看古树。',reason:'如果更喜欢清静和自然，这里比热门街区慢很多；山林氛围是独特的宁波一面。',visit:'寺院宗教活动及开放安排可能变化；入寺礼仪请尊重现场规定。',booking:'预约：未核实是否需预约及当前开放时间；出发前通过寺院/鄞州文旅官方渠道确认。',transit:'地铁接驳不够直接，建议自驾；公共交通可到东钱湖方向后再换乘，但需核对班次。自驾按天童寺停车场导航。',official:'https://www.tiantongsi.com/',xhsq:'宁波 天童寺 游玩攻略',tags:['寺院','山林','清静']},
  { id:'haitian',name:'海天一洲观景',kind:'跨海大桥途中',glyph:'桥',lat:30.4577,lng:121.1380,summary:'杭州湾跨海大桥上的观景平台，适合作为路上的停靠点。',reason:'你们想路过跨海大桥，这里是看桥和海面的直观停靠选择；可先确认开放、天气和当日路况。',visit:'位于杭州湾跨海大桥海中服务区；是否开放观光、票务和天气管制以景区官方公告/现场为准。',booking:'预约：当前入园和购票规则未核实。建议出发前搜索「海天一洲」官方售票/公告，不要仅凭旧攻略前往。',transit:'适合自驾途中停靠，按高速服务区及景区交通规则行驶；不可把观景停留安排为高速路肩停车。',official:'https://www.haitianyizhou.com/',xhsq:'海天一洲观景 杭州湾跨海大桥 实拍攻略',tags:['跨海大桥','观景','途中']}
];

const restaurants = [
  {id:'ninghai',name:'宁海食府 · 鼓楼孝闻店',kind:'宁波菜 / 海鲜',glyph:'鲜',lat:29.8769,lng:121.5420,rating:'大众点评 4.8',price:'约 ¥186/人（点评页面信息）',summary:'本地海鲜和宁波家常菜，油炸汤圆、椒盐皮皮虾常被点到。',pros:'点评商户页推荐数较多；油炸汤圆、椒盐皮皮虾、大竹蛏等有明确的用户推荐记录。',cons:'没有找到足够可复核的近期负面评价，暂不总结口味缺点；旺时等位情况建议看近期点评。',dishes:'油炸汤圆、椒盐皮皮虾、大竹蛏（以点评商户页用户推荐为据）。',reviewSource:'https://m.dianping.com/shopshare/l8U4hbMyOMpLdr4D',photoSource:'https://www.dianping.com/shop/17655086/photos?pg=1',xhsq:'宁海食府 鼓楼孝闻店 宁波 菜品',tags:['本地海鲜','汤圆','城区']},
  {id:'dongfuyuan',name:'东福园饭店 · 鼓楼店',kind:'老牌宁波菜',glyph:'园',lat:29.8723,lng:121.5480,rating:'携程用户评分 4.5/5',price:'约 ¥103/人（携程页面）',summary:'老牌宁波菜馆，腐皮包黄鱼、宁波汤圆等有用户提及。',pros:'携程评论提到熏鱼偏甜、烤麸入味，推荐菜信息较丰富；老牌宁波菜选择多。',cons:'同一来源有评论认为三鲜汤略咸；口味感受因人而异。',dishes:'腐皮包黄鱼、宁波汤圆、宁式烤菜等（点评用户相册/菜品标签）。',reviewSource:'https://gs.ctrip.com/html5/you/foods/fooddetail/2115612/270994.html',photoSource:'https://www.dianping.com/shop/2771200/photos',xhsq:'宁波 东福园 鼓楼店 菜品',tags:['老字号','宁波菜','城区']},
  {id:'alamz',name:'阿拉名灶 · 镇明路店',kind:'宁波菜 / 海鲜',glyph:'灶',lat:29.8653,lng:121.5453,rating:'携程用户评分 4.5/5',price:'约 ¥108/人（携程页面）',summary:'红膏呛蟹、椒盐虾潺等宁波海鲜菜是常见推荐。',pros:'页面收录的用户评论总体偏正向，并列出红膏呛蟹、东坡肉、海瓜子等推荐菜。',cons:'样本量有限；未找到明确且可核实的近期负面评价，不能据此保证每道菜稳定。',dishes:'红膏呛蟹、椒盐虾潺、东坡肉、海瓜子、黄鱼腐皮卷。',reviewSource:'https://gs.ctrip.com/html5/you/foods/Ningbo83/21404247.html',photoSource:'https://www.dianping.com/search/keyword/11/0_%E9%98%BF%E6%8B%89%E5%90%8D%E7%81%B6',xhsq:'阿拉名灶 镇明路店 宁波 菜品',tags:['海鲜','红膏呛蟹','城区']},
  {id:'zhuangyuanlou',name:'状元楼 · 和义路店',kind:'宁波老菜',glyph:'状',lat:29.8786,lng:121.5557,rating:'携程用户评论页（354 条）',price:'价格以门店菜单为准',summary:'老牌饭店与江景街区相邻，适合把吃饭和老城散步放一起。',pros:'用户评论提到环境和江景，也有人推荐腐皮包黄鱼、黄鱼羹等。',cons:'有用户提醒冰糖甲鱼制作时间较长，建议点单前确认；评分/价格信息请看商户近期页面。',dishes:'腐皮包黄鱼、黄鱼羹、冰糖甲鱼（按用户评论提及；菜品供应可能变动）。',reviewSource:'https://touch.travel.qunar.com/poi/3271761',photoSource:'https://www.dianping.com/shop/542537/photos/album',xhsq:'宁波 状元楼 和义路店 菜品',tags:['老牌饭店','江景附近','宁波菜']},
  {id:'yongshang',name:'甬上名灶 · 首店',kind:'甬菜 / 海鲜',glyph:'甬',lat:29.8810,lng:121.5359,rating:'携程用户评分 4.4/5',price:'约 ¥109/人（携程页面）',summary:'鲜海鲜与宁波家常味，冰山味皇、膏蟹等菜有用户推荐。',pros:'用户评论提到海鲜新鲜、地方口味浓；推荐菜包括鲍汁冰山味皇、酱青膏蟹、芋头煲。',cons:'有评论提到高峰时排队、口味偏咸鲜；想吃得轻可以先问清做法。',dishes:'鲍汁冰山味皇、酱青膏蟹、黄虾潺排、芋头煲。',reviewSource:'https://you.ctrip.com/food/ctripyouyoustar83/16487164-dianping.html',photoSource:'https://www.dianping.com/search/keyword/11/0_%E7%94%AC%E4%B8%8A%E5%90%8D%E7%81%B6',xhsq:'甬上名灶 宁波 首店 菜品',tags:['本地菜','海鲜','人气店']},
  {id:'mumu',name:'木木鲜海鲜面 · 天一店',kind:'海鲜面',glyph:'面',lat:29.8694,lng:121.5447,rating:'大众点评 4.3',price:'约 ¥54/人（点评页面）',summary:'黄鱼面、鲜虾面等海鲜面，适合想简单吃一顿时收藏。',pros:'点评用户推荐黄鱼面、鲜虾面；评论提到黄鱼无刺、汤底鲜、配料足。',cons:'目前找到的可核实评论以正面为主，没有可靠的具体负评可总结；实际价格按加料变化。',dishes:'招牌鲜虾面豪华款、黄鱼面豪华款（以点评商户页推荐为据）。',reviewSource:'https://m.dianping.com/shop/943956924?msource=applemaps',photoSource:'https://www.dianping.com/shop/H4dNVIzRKUveBvpw/photos',xhsq:'木木鲜海鲜面 天一店 黄鱼面',tags:['海鲜面','快速一餐','城区']},
  {id:'qianjiamu',name:'卿家姆小馆 · 旗舰店',kind:'生腌 / 熟醉',glyph:'姆',lat:29.8497,lng:121.5457,rating:'携程用户评分 4.3/5（4 条）',price:'约 ¥130/人（携程页面）',summary:'生腌、熟醉和家常菜；评分样本较少，先看近期评价再决定。',pros:'少量用户评论喜欢生腌河虾、熟醉沼虾等，适合想试宁波小鲜的人。',cons:'评论数量只有 4 条，代表性很弱；有用户提到节假日服务/出菜和份量问题，建议预约并谨慎参考评分。',dishes:'熟醉沼虾、小馆红烧肉、生腌河虾、熟醉大闸蟹（页面推荐）。',reviewSource:'https://gs.ctrip.com/html5/you/foods/fooddetail/83/119351383.html',photoSource:'https://www.dianping.com/search/keyword/11/0_%E5%8D%BF%E5%AE%B6%E5%A7%86%E5%B0%8F%E9%A6%86',xhsq:'卿家姆小馆 宁波 生腌 熟醉',tags:['生腌','熟醉','小样本评价']},
  {id:'xiaoyuchang',name:'小渔厂私厨',kind:'海鲜私厨',glyph:'渔',lat:29.8240,lng:121.5623,rating:'入选 2026 大众点评必吃榜',price:'价格以门店菜单为准',summary:'主打海鲜私厨，适合多人点菜；推荐先看菜价和当日海鲜。',pros:'入选大众点评 2026 宁波必吃榜；公开用户分享提到海鲜新鲜、口味传统。',cons:'公开评价中也有对服务和价格的保留意见；缺少可验证的稳定评分，点菜前先问时价。',dishes:'时令海鲜为主，具体招牌菜建议看商户近期菜单/用户评价。',reviewSource:'https://plat.dianping.com/app/femember-musteat-web/musteat-rank?cityid=11',photoSource:'https://www.dianping.com/search/keyword/11/0_%E5%B0%8F%E6%B8%94%E5%8E%82%E7%A7%81%E5%8E%A8',xhsq:'宁波 小渔厂私厨 评价 菜品',tags:['海鲜','多人聚餐','必吃榜']},
  {id:'shibashipu',name:'石浦饭店 · 月湖店',kind:'海鲜 / 宁波菜',glyph:'浦',lat:29.8676,lng:121.5426,rating:'Tripadvisor 用户评分 4.4/5',price:'价格以门店菜单为准',summary:'老城片区的海鲜餐馆选择之一，逛月湖时可顺路查看。',pros:'用户评论提到传统氛围和宁波海鲜菜，位置方便串联天一阁、月湖。',cons:'评论也有认为菜品表现普通的声音；不同分店体验可能不同，需确认是月湖店。',dishes:'海鲜和宁波家常菜，具体菜品以月湖店近期菜单为准。',reviewSource:'https://www.tripadvisor.com/Restaurant_Review-g297470-d10513169-Reviews-ShiPu_Restaurant-Ningbo_Zhejiang.html',photoSource:'https://www.dianping.com/search/keyword/11/0_%E7%9F%B3%E6%B5%A6%E9%A5%AD%E5%BA%97',xhsq:'宁波 石浦饭店 月湖店 菜品',tags:['海鲜','老城','月湖附近']},
  {id:'weirong',name:'伟荣餐饮 · 野生活海鲜',kind:'慈溪海鲜',glyph:'荣',lat:30.1640,lng:121.2470,rating:'大众点评榜单信息 4.8',price:'约 ¥158/人（榜单页面）',summary:'慈溪方向的海鲜餐饮选择，适合本来就去北部近郊时考虑。',pros:'大众点评 2026 必吃榜介绍提及经营多年，海鲜卷是榜单推荐菜。',cons:'可复核的负面评价不足；位置在慈溪，离宁波主城区较远，不建议为单独吃饭专程绕行。',dishes:'海鲜卷（榜单推荐）；其他菜按当日菜单和时价确认。',reviewSource:'https://plat.dianping.com/app/femember-musteat-web/musteat-rank?cityid=11',photoSource:'https://www.dianping.com/search/keyword/11/0_%E4%BC%9F%E8%8D%A3%E9%A4%90%E9%A5%AE',xhsq:'慈溪 伟荣 野生活海鲜 菜品',tags:['慈溪','海鲜','远郊']}
];

// 本地保存的小红书笔记封面：每张图都保留作者、笔记名和原帖入口。
// 餐饮图片标明来自对应笔记；未直接写出门店名的笔记仅作宁波美食实拍参考。
const sightPhotos = {
  tianyi:{src:'assets/xiaohongshu/tianyi-ge.webp',title:'宁波｜在宁波花的最值的30块！！！！！',author:'REIKI',url:'https://www.xiaohongshu.com/explore/69fca4f5000000001e00e5d1'},
  museum:{src:'assets/xiaohongshu/ningbo-museum.webp',title:'宁波博物馆',author:'不羁放纵爱自由',url:'https://www.xiaohongshu.com/explore/6ab2689f0000000033010920'},
  dongqian:{src:'assets/xiaohongshu/dongqian-lake-tour.webp',title:'东钱湖游记：被严重低估的宁波后花园！',author:'大大晓',url:'https://www.xiaohongshu.com/explore/6aa23a4f000000002601c7dc'},
  cicheng:{src:'assets/xiaohongshu/cicheng-old-town.webp',title:'国庆别跑远❗️慈城古城赶集好热闹🔥',author:'山茶去哪玩',url:'https://www.xiaohongshu.com/explore/6abe59360000000015014896'},
  xikou:{src:'assets/xiaohongshu/xikou-xuedou.webp',title:'适合老年人的雪窦山攻略',author:'白夜',url:'https://www.xiaohongshu.com/explore/6aa37265000000002a027647'},
  qiantong:{src:'assets/xiaohongshu/qiantong-town.webp',title:'📍前童古镇||比乌镇更治愈的江南秘境',author:'含光の旅行手帐',url:'https://www.xiaohongshu.com/explore/69f1ae4c0000000038021230'},
  tiantong:{src:'assets/xiaohongshu/tiantong-temple.webp',title:'东南佛国天童寺｜松风入怀，一念“天真”🍃',author:'有西子',url:'https://www.xiaohongshu.com/explore/6a9026840000000020039e52'},
  haitian:{src:'assets/xiaohongshu/haitian-yizhou.webp',title:'带大家逛一逛海天一洲观景台~',author:'Anilla培瑶',url:'https://www.xiaohongshu.com/explore/6a9ecb3b000000002700a1ef'}
};
const foodPhotos = {
  ninghai:{src:'assets/xiaohongshu/ninghai-food.webp',title:'宁波吃什么 宁海食府',author:'Elaine Xu',url:'https://www.xiaohongshu.com/explore/69d32c6d000000001a02ea2c',exact:true},
  dongfuyuan:{src:'assets/xiaohongshu/ningbo-favorite-restaurant.webp',title:'宁波的这家饭店每次去都排队！',author:'成乐乐',url:'https://www.xiaohongshu.com/explore/6a8d0319000000000f0246ed'},
  alamz:{src:'assets/xiaohongshu/alam-mingzao.webp',title:'距宁波站10分钟的阿拉名灶·阿拉宁波人',author:'温一壶月光下酒',url:'https://www.xiaohongshu.com/explore/6a1a91dd0000000038036126',exact:true},
  zhuangyuanlou:{src:'assets/xiaohongshu/ningbo-seafood-oldshop.webp',title:'宁波觅食｜本地人反复光顾的海鲜老店',author:'高鹏凯GPK',url:'https://www.xiaohongshu.com/explore/6a1d5ec60000000006020f6b'},
  yongshang:{src:'assets/xiaohongshu/yongshang-dishes.webp',title:'排队88分钟终于吃上的甬上名灶真的好吃😋',author:'方子小姐姐',url:'https://www.xiaohongshu.com/explore/6a0077ef0000000008025481',exact:true},
  mumu:{src:'assets/xiaohongshu/ningbo-seafood.webp',title:'我一个人旅行｜宁波的海鲜果然不会让人失望',author:'刘小胖Pangpang',url:'https://www.xiaohongshu.com/explore/6aba7f4600000000140002f5'},
  qianjiamu:{src:'assets/xiaohongshu/ningbo-crab-season.webp',title:'宁波📍开渔季吃点什么🦀🦐',author:'每天要睡九小时🦁',url:'https://www.xiaohongshu.com/explore/6a913e9a0000000025026a8b'},
  xiaoyuchang:{src:'assets/xiaohongshu/ningbo-seafood-reviews.webp',title:'宁波必吃榜体验，海鲜比温州便宜还好吃',author:'吃遍东西',url:'https://www.xiaohongshu.com/explore/6a06a3530000000035038a25'},
  weirong:{src:'assets/xiaohongshu/weirong-seafood.webp',title:'宁波慈溪| 🐟伟荣海鲜❗CCTV报道过的老店',author:'我叫清蒸奥利奥',url:'https://www.xiaohongshu.com/explore/6a1ae7390000000006035f46',exact:true}
};

// 只录入能在对应大众点评商户页直接核实的分数；链接与门店一一对应。
const dianpingScores = {
  ninghai:{score:4.8,url:'https://m.dianping.com/shopshare/l8U4hbMyOMpLdr4D'},
  yongshang:{score:4.7,url:'https://m.dianping.com/shop/l59yWYUiqxLUQMy2?poiidEncrypt=qB4r4a7d71ee69d1f9ba21eb58f73c0e2b1ffcf57e66c5e8720ce0d6677aab3126c49d2a41ed92aaaff8282c246900vxu5'},
  mumu:{score:4.3,url:'https://m.dianping.com/shop/943956924?msource=applemaps'}
};
restaurants.forEach(place=>{const dp=dianpingScores[place.id];place.dianpingScore=dp?.score??null;place.dianpingUrl=dp?.url??null;});
restaurants.sort((a,b)=>(b.dianpingScore??-1)-(a.dianpingScore??-1));
const dianpingSearch=name=>`https://www.dianping.com/search/keyword/11/0_${encodeURIComponent(name)}`;
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function makeCard(item,isFood=false){
  const photo=(isFood?foodPhotos:sightPhotos)[item.id];
  const tag = item.tags[0] || (isFood?'本地味道':'宁波');
  const sub = isFood ? `${item.kind} · ${item.price}` : item.summary;
  const reason = isFood ? `值得看：${item.dishes}` : `推荐理由：${item.reason}`;
  return `<article class="place-card ${isFood?'food-card':''}" tabindex="0" role="button" data-id="${item.id}" data-type="${isFood?'food':'sight'}" aria-label="打开${esc(item.name)}详情">
    <div class="card-visual">${photo?`<img class="place-photo" src="${esc(photo.src)}" alt="${esc(photo.title)} · ${esc(photo.author)} 的小红书笔记图片" loading="lazy"><a class="photo-source" href="${esc(photo.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" aria-label="打开小红书原笔记">小红书原帖 ↗</a><span class="photo-credit">${esc(photo.author)} · 小红书</span>`:`<div class="photo-missing"><span>对应实拍图暂未核实</span><a href="${esc(xhs(item.xhsq))}" target="_blank" rel="noopener" onclick="event.stopPropagation()">去小红书看相关笔记 ↗</a></div>`}<span class="visual-label">${esc(tag)}</span></div>
    <div class="card-body"><div class="card-topline"><h3 class="card-title">${esc(item.name)}</h3><span class="kind-chip">${esc(item.kind)}</span></div>
    <p class="card-summary">${esc(sub)}</p><p class="card-reason">${esc(reason)}</p>
    <div class="card-footer"><strong>${isFood?(item.dianpingScore===null?'点评分未核实':`大众点评 ${item.dianpingScore.toFixed(1)}`):'点开看交通与预约'}</strong><span class="card-open">看详情 ↗</span></div></div></article>`;
}
document.querySelector('#sight-cards').innerHTML=sights.map(d=>makeCard(d)).join('');
document.querySelector('#food-cards').innerHTML=restaurants.map(d=>makeCard(d,true)).join('');

const drawer=document.querySelector('#detail-drawer'), backdrop=document.querySelector('#drawer-backdrop');
function links(item,isFood){
 const result=[];
 if(isFood){
   result.push(`<a class="source-link" href="${esc(item.dianpingUrl||dianpingSearch(item.name))}" target="_blank" rel="noopener">${item.dianpingScore===null?'在大众点评查看评分':`大众点评商户页 · ${item.dianpingScore.toFixed(1)} 分 ↗`}</a>`);
   if(item.reviewSource&&!item.reviewSource.includes('dianping.com'))result.push(`<a class="source-link" href="${esc(item.reviewSource)}" target="_blank" rel="noopener">其他平台评价参考 ↗</a>`);
   result.push(`<a class="source-link coral" href="${esc(item.photoSource)}" target="_blank" rel="noopener">看点评用户实拍 ↗</a>`);
   const photo=foodPhotos[item.id];
   if(photo)result.push(`<a class="source-link coral" href="${esc(photo.url)}" target="_blank" rel="noopener">看实拍原帖：${esc(photo.title)} ↗</a>`);
   result.push(`<a class="source-link coral" href="${esc(xhs(item.xhsq))}" target="_blank" rel="noopener">搜更多小红书笔记 ↗</a>`);
 }else{
   result.push(`<a class="source-link" href="${esc(item.official)}" target="_blank" rel="noopener">官方信息 / 预约入口 ↗</a>`);
   const photo=sightPhotos[item.id];
   if(photo)result.push(`<a class="source-link coral" href="${esc(photo.url)}" target="_blank" rel="noopener">看实拍原帖：${esc(photo.title)} ↗</a>`);
   result.push(`<a class="source-link" href="${esc(amap(item.name,`${item.lng},${item.lat}`))}" target="_blank" rel="noopener">高德地图导航 ↗</a>`);
 }
 return result.join('');
}
function openDetail(id,type){
 const item=(type==='food'?restaurants:sights).find(p=>p.id===id); if(!item)return;
 const isFood=type==='food';
 const photo=(isFood?foodPhotos:sightPhotos)[item.id];
 const photoBlock=photo?`<a class="detail-photo-link" href="${esc(photo.url)}" target="_blank" rel="noopener"><img class="detail-photo" src="${esc(photo.src)}" alt="${esc(photo.title)} · ${esc(photo.author)} 的小红书实拍"><span class="detail-photo-caption">${esc(photo.title)} · ${esc(photo.author)} 发布于小红书　打开原帖 ↗</span></a>`:`<div class="detail-art ${isFood?'food-art':''}" aria-hidden="true">${esc(item.glyph)}</div>`;
 const body=isFood?`
  <p class="drawer-kicker">LOCAL TABLE / 宁波味道</p><h2 class="drawer-title" id="drawer-title">${esc(item.name)}</h2><p class="drawer-subtitle">${esc(item.kind)}　<span class="micro-rating">${item.dianpingScore===null?'大众点评评分暂未核实':`大众点评 ${item.dianpingScore.toFixed(1)} / 5`}</span></p>
  ${photoBlock}
  <p class="detail-photo-note">${photo?.exact?'图片来自这家店相关的小红书实拍笔记。':'这是独立的小红书用户实拍图，原帖未能确认就是这家门店；仅作宁波本地菜品参考。'} 点图片可打开原帖查看。</p>
  <section class="detail-block"><h3>推荐菜</h3><p>${esc(item.dishes)}</p></section>
  <section class="detail-block"><h3>用户评价摘记</h3><ul><li><b>大家喜欢：</b>${esc(item.pros)}</li><li><b>需要留意：</b>${esc(item.cons)}</li></ul><p class="disclaimer">评价摘要仅概括链接来源可见内容；不同门店、时段和个人口味会有差异。</p></section>
  <section class="detail-block"><h3>位置与来源</h3><p>${esc(item.price)}。地图点位仅供找位置，点击高德导航核对营业地址。</p><div class="source-links">${links(item,true)}</div></section>`:`
  <p class="drawer-kicker">A LITTLE PLACE / 宁波去处</p><h2 class="drawer-title" id="drawer-title">${esc(item.name)}</h2><p class="drawer-subtitle">${esc(item.kind)}　·　${esc(item.summary)}</p>
  ${photoBlock}
  <p class="detail-photo-note">图片取自小红书用户笔记并保留作者与原帖链接；地点相关性请以原帖内容为准。</p>
  <section class="detail-block"><h3>为什么值得去</h3><p>${esc(item.reason)}</p></section>
  <section class="detail-block"><h3>预约与开放</h3><p>${esc(item.visit)}</p><p style="margin-top:7px">${esc(item.booking)}</p></section>
  <section class="detail-block"><h3>怎么去更轻松</h3><p>${esc(item.transit)}</p></section>
  <section class="detail-block"><h3>原始信息</h3><div class="source-links">${links(item,false)}</div><p class="disclaimer">小红书入口为关键词搜索页；平台内容可能要求登录。预约及开放信息请以当天官方公告为准。</p></section>`;
 document.querySelector('#drawer-content').innerHTML=body;
 document.body.classList.add('drawer-open'); drawer.setAttribute('aria-hidden','false');
 document.querySelector('#drawer-close').focus();
}
function closeDetail(){document.body.classList.remove('drawer-open');drawer.setAttribute('aria-hidden','true');}
document.querySelector('#drawer-close').addEventListener('click',closeDetail); backdrop.addEventListener('click',closeDetail);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDetail();});
document.querySelectorAll('.place-card').forEach(el=>{el.addEventListener('click',()=>openDetail(el.dataset.id,el.dataset.type));el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDetail(el.dataset.id,el.dataset.type);}})});

/* Offline-first map: local SVG basemap plus local, accessible buttons. No map SDK,
   external tile server, canvas, or device-specific permission is needed. */
{
 const map=document.querySelector('#map');
 const markers=document.querySelector('#map-markers');
 const satellite=document.querySelector('#satellite-layer');
 const entries=[...sights.map((item,index)=>({item,type:'sight',index:index+1})),...restaurants.map((item,index)=>({item,type:'food',index:index+1}))];
 const bounds={west:121.08,east:122,south:29.10,north:30.52};
 const tilePosition=({lat,lng},zoom)=>{const scale=2**zoom,rad=lat*Math.PI/180;return{x:(lng+180)/360*scale,y:(1-Math.log(Math.tan(Math.PI/4+rad/2))/Math.PI)/2*scale};};
 const topLeft=tilePosition({lat:bounds.north,lng:bounds.west},10),bottomRight=tilePosition({lat:bounds.south,lng:bounds.east},10);
 const spanX=(bottomRight.x-topLeft.x)*256,spanY=(bottomRight.y-topLeft.y)*256;
 const project=({lat,lng})=>{const p=tilePosition({lat,lng},10);return{x:((p.x-topLeft.x)*256/spanX)*100,y:((p.y-topLeft.y)*256/spanY)*100};};
 // Esri World Imagery is loaded as ordinary web tiles. The embedded local map
 // stays underneath as a dependable fallback when an environment blocks tiles.
 const minTileX=Math.floor(topLeft.x),maxTileX=Math.ceil(bottomRight.x)-1,minTileY=Math.floor(topLeft.y),maxTileY=Math.ceil(bottomRight.y)-1;
 for(let ty=minTileY;ty<=maxTileY;ty++)for(let tx=minTileX;tx<=maxTileX;tx++){
   const image=document.createElement('img');image.className='satellite-tile';image.alt='';image.draggable=false;image.decoding='async';image.src=`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/10/${ty}/${tx}`;
   image.style.left=`${((tx*256-topLeft.x*256)/spanX*100).toFixed(3)}%`;image.style.top=`${((ty*256-topLeft.y*256)/spanY*100).toFixed(3)}%`;image.style.width=`${(256/spanX*100).toFixed(3)}%`;image.style.height=`${(256/spanY*100).toFixed(3)}%`;
   image.addEventListener('load',()=>satellite.classList.add('tiles-loaded'),{once:true});satellite.appendChild(image);
 }
 // Nudge close pins apart by a few screen pixels so downtown targets stay tappable.
 markers.innerHTML=entries.map(entry=>`<button class="map-marker ${entry.type}" type="button" data-id="${esc(entry.item.id)}" data-type="${entry.type}" aria-label="打开${entry.type==='sight'?'景点':'餐厅'}：${esc(entry.item.name)}" title="${esc(entry.item.name)}"><span>${entry.index}</span></button>`).join('');
 markers.querySelectorAll('.map-marker').forEach(button=>button.addEventListener('click',()=>openDetail(button.dataset.id,button.dataset.type)));
 function positionMarkers(){
   const rect=map.getBoundingClientRect();if(!rect.width||!rect.height)return;
   const scaleX=rect.width/100,scaleY=rect.height/100,minGap=28;
   const layout=entries.map(entry=>({entry,...project(entry.item)}));
   for(let pass=0;pass<160;pass++){
     let changed=false;
     for(let i=0;i<layout.length;i++)for(let j=i+1;j<layout.length;j++){
       const a=layout[i],b=layout[j],dx=(b.x-a.x)*scaleX,dy=(b.y-a.y)*scaleY,d=Math.hypot(dx,dy);
       if(d>0&&d<minGap){const shift=(minGap-d)/2+0.08,nx=dx/d,ny=dy/d;a.x-=nx*shift/scaleX;a.y-=ny*shift/scaleY;b.x+=nx*shift/scaleX;b.y+=ny*shift/scaleY;changed=true;}
     }
     layout.forEach(p=>{p.x=Math.max(2.2,Math.min(97.8,p.x));p.y=Math.max(4,Math.min(96,p.y));});
     if(!changed)break;
   }
   layout.forEach(({entry,x,y})=>{const button=markers.querySelector(`[data-id="${CSS.escape(entry.item.id)}"][data-type="${entry.type}"]`);if(button){button.style.left=`${x.toFixed(2)}%`;button.style.top=`${y.toFixed(2)}%`;}});
 }
 positionMarkers();window.addEventListener('resize',positionMarkers,{passive:true});
 const key=document.querySelector('.map-key');
 const toggle=document.createElement('button'); toggle.className='map-toggle';toggle.type='button';toggle.setAttribute('aria-pressed','true');toggle.innerHTML='<i class="dot dot-food"></i> 餐厅点位';
 toggle.addEventListener('click',()=>{const on=toggle.getAttribute('aria-pressed')!=='true';toggle.setAttribute('aria-pressed',String(on));markers.classList.toggle('hide-food',!on);});
 key.appendChild(toggle);
}

const localTreats = [
 {name:'吴记港奶',category:'老派港式奶茶',glyph:'奶',signature:'芒果血糯米奶茶、港式奶茶',why:'想喝点有宁波街坊小店气息的奶茶，可以从这家老派小店开始。用户点评提到血糯米和芒果料足、价格亲切。',watch:'这是较早的用户点评，店址、营业时间和菜单可能已经变化；出发前先点开地图/点评确认。',review:'https://you.ctrip.com/food/ningbo83/7311765-dianping163959406.html',search:'吴记港奶 宁波',sourceLabel:'用户点评参考',photo:{src:'assets/xiaohongshu/wuji-mango-milk-tea.webp',title:'在宁波！！吼吼喝的芒果血糯米奶茶！！',author:'umi小章鱼',url:'https://www.xiaohongshu.com/explore/66091057000000001a010022'}},
 {name:'岩野咖啡',category:'宁波本土咖啡品牌',glyph:'咖',signature:'精品咖啡与手冲豆',why:'宁波本土独立咖啡品牌，适合想逛一家有本地咖啡文化的小店，而不只是找连锁店。',watch:'门店数量、位置和营业时间会变；先从大众点评查看离你们最近的在营门店。',review:'https://epaper.zjgrrb.com/images/2023-09/21/z2023092100002.pdf',search:'岩野咖啡 宁波',sourceLabel:'本地媒体介绍',photo:{src:'assets/user-photos/yanye-coffee.png',title:'岩野咖啡门店与饮品实拍拼图',author:'用户提供',platform:'用户提供实拍',layout:'user-photo-full'}},
 {name:'Bamboo Coffee Roasters',category:'本地烘焙咖啡',glyph:'豆',signature:'自家烘焙咖啡、咖啡吧',why:'宁波本地烘焙品牌，适合把咖啡当作目的地慢坐一会儿；官网列有鄞州咖啡吧与慈城湖畔烘焙店。',watch:'两家店位置相距较远，营业时间和当日开放情况请以官网最新信息为准。',review:'https://www.bamboocoffee.cn/',search:'Bamboo Coffee Roasters 宁波',sourceLabel:'品牌官网',photo:{src:'assets/user-photos/bamboo-coffee-roasters.png',title:'Bamboo Coffee Roasters 门店实拍',author:'用户提供',platform:'用户提供实拍',layout:'user-photo-full'}},
 {name:'好野咖啡·蛋糕',category:'手作蛋糕与咖啡',glyph:'甜',signature:'草莓蛋糕卷、提拉米苏、Dirty、自制奶茶',why:'用户评价喜欢手作蛋糕和咖啡，也提到自制奶茶；想把下午茶和甜点一次解决，可以收藏。',watch:'可查到的详细用户评价较早且样本不多，评论提过部分蛋糕需要提前预订；先问当天供应。',review:'https://hk.trip.com/restaurant/china/ningbo/detail/restaurant-30926598/',search:'好野咖啡 蛋糕 宁波',sourceLabel:'用户评价与门店信息',photo:{src:'assets/user-photos/hoye-cafe-cake.png',title:'好野咖啡·蛋糕店内、咖啡与甜品实拍拼图',author:'用户提供',platform:'用户提供实拍',layout:'user-photo-full'}},
 {name:'缸鸭狗 · 天一广场店',category:'宁波传统甜品',glyph:'圆',signature:'宁波猪油汤圆、桂花酒酿圆子、酒酿核桃羹',why:'想尝宁波甜口代表，汤圆和桂花酒酿圆子是很直观的选择；天一广场店适合逛市区时顺路。',watch:'热门时段可能排队；用户评价对价格、等餐和口味有不同看法，建议少量点几样先尝。',review:'https://www.dianping.com/shop/HaFA8J21TM7NwZmz/photos?pg=1',search:'缸鸭狗 天一广场店 宁波',sourceLabel:'大众点评用户图/商户页',photo:{src:'assets/dianping/gangyagou-tianyi-user-photo.jpg',title:'缸鸭狗（天一广场店）大众点评用户实拍',author:'大众点评用户（昵称未显示）',platform:'大众点评',url:'https://www.dianping.com/shop/HaFA8J21TM7NwZmz/photos?pg=1'}}
];
document.querySelector('#treat-cards').innerHTML=localTreats.map((place,index)=>`<article class="place-card food-card treat-card"><div class="card-visual ${place.photo?'has-treat-photo':''} ${esc(place.photo?.layout||'')}">${place.photo?`<img class="treat-photo" src="${esc(place.photo.src)}" alt="${esc(place.photo.title)} · ${esc(place.photo.author)}">${place.photo.url?`<a class="photo-source" href="${esc(place.photo.url)}" target="_blank" rel="noopener">${esc(place.photo.platform||'图片来源')}原帖 ↗</a>`:`<span class="photo-source">${esc(place.photo.platform||'用户提供实拍')}</span>`}<span class="photo-credit">${esc(place.photo.author)} · ${esc(place.photo.platform||'来源未注明')}</span>`:`<span class="treat-icon">${esc(place.glyph)}</span>`}<span class="visual-label">${esc(place.category)}</span></div><div class="card-body"><div class="card-topline"><h3 class="card-title">${esc(place.name)}</h3></div><p class="card-summary"><b>可以试试：</b>${esc(place.signature)}</p><p class="card-reason">${esc(place.why)}</p><p class="treat-caution">${esc(place.watch)}</p><div class="treat-links"><a href="${esc(dianpingSearch(place.search))}" target="_blank" rel="noopener">大众点评看门店与近期评价 ↗</a><a href="${esc(place.review)}" target="_blank" rel="noopener">${esc(place.sourceLabel)} ↗</a>${place.photo?.url?`<a href="${esc(place.photo.url)}" target="_blank" rel="noopener">打开这张${esc(place.photo.platform||'来源')}实拍 ↗</a>`:''}</div></div></article>`).join('');
