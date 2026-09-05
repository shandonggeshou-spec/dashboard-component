const groups = [
  { id:"select", name:"选择输入", hint:"从选项中做选择", items:[
    ["基础下拉","Select","选项少，只需要选一个值。","点击字段后在下方展开选项，选择后收起并显示结果。","做一个基础下拉 Select。点击字段后在下方展开选项；单击一项立即选中并收起，字段中显示选中值。"],
    ["可搜索下拉","Searchable Select","选项很多，用户知道要找什么。","输入关键词实时过滤，支持键盘选择和无结果状态。","做一个可搜索下拉。展开后聚焦搜索框，输入时过滤并高亮关键词，回车选中，Esc 关闭。"],
    ["级联选择","Cascader","选项有上下级，如省—市—区。","逐级展开；选中后显示完整路径。","做一个三级 Cascader，按省—市—区逐级展开；选中后显示完整路径，切换上级时清空失效的下级。"],
    ["多选下拉","Multi Select","一次选择多个筛选条件。","勾选后不收起；显示已选数量，并可一键清空。","做一个可搜索多选下拉。勾选后保持展开，顶部显示已选数量，并提供全选与清空。"],
    ["日期范围","Date Range","同时选择开始和结束日期。","高亮完整区间，并提供最近 7 天、30 天快捷项。","做一个日期范围选择器。先选开始日再选结束日，高亮整个区间，并提供最近 7 天和最近 30 天。"]
  ]},
  { id:"expand", name:"展开动画", hint:"让内容出现得自然", items:[
    ["圆点变胶囊","Circle to Pill","展示短状态或确认信息。","圆形入口平滑变宽，文字随后淡入。","点击圆形按钮后，让它从中心平滑扩展成胶囊；保留图标，文字随后淡入，300ms 后稳定。"],
    ["手风琴展开","Accordion","在当前位置查看更多内容。","内容向下展开，箭头同步旋转，再次点击收起。","点击标题行后向下展开正文，高度与透明度同时过渡，右侧箭头旋转 180 度。"],
    ["下推展开","Push Down","详情属于页面结构，不应遮住内容。","新内容进入文档流，平滑推开下方内容。","点击查看详情后，在当前卡片下方展开内容并平滑推开后续区域，滚动位置保持不变。"],
    ["分段展开","Staggered Reveal","一组项目按顺序进入。","项目依次淡入并轻微上移，整组控制在 500ms 内。","面板展开时，列表项从上到下依次淡入并上移 8px，每项间隔 40ms。"]
  ]},
  { id:"drag", name:"拖拽操作", hint:"移动、排序或调整", items:[
    ["排序拖拽","Sortable","改变同一列表里的顺序。","拖动项浮起，原位保留占位，松手后保存顺序。","列表项按住后可拖动排序；拖动项浮起，原位置显示虚线占位，松手后保存并提供撤销。"],
    ["跨区移动","Transfer","把卡片移动到另一个状态或容器。","目标区域高亮，不可放置处显示禁用。","支持卡片在三列看板间拖动；进入目标列时高亮落点，松手后更新状态。"],
    ["自由画布","Free Move","调整节点在画布里的位置。","靠近其他节点时显示参考线并吸附，不能拖出边界。","让节点可在画布内自由拖动，接近其他节点时显示对齐线并吸附，不得拖出画布。"],
    ["调整尺寸","Resize","改变卡片、列或面板大小。","显示拖拽把手和实时尺寸，设置最小最大值。","在卡片右下角提供缩放把手，拖动时显示宽高并吸附栅格，限制最小和最大尺寸。"]
  ]},
  { id:"panel", name:"面板弹层", hint:"补充信息或完成任务", items:[
    ["提示气泡","Tooltip","悬停时补充一句解释，不承载操作。","贴近目标，自动避让边缘，移开后消失。","悬停图标后在上方显示两行以内的 Tooltip，自动避让窗口边缘，移开或失焦后消失。"],
    ["操作气泡","Popover","在触发点附近放少量信息或操作。","点击外部或按 Esc 关闭。","点击头像后在下方打开 Popover，显示三个快捷操作；点击外部或按 Esc 关闭。"],
    ["右侧抽屉","Drawer","不离开当前页，查看或编辑较长内容。","从右侧滑入；说明宽度、遮罩和关闭方式。","点击详情后，从页面右侧滑入宽 360px 的 Drawer；标题固定、内容滚动，关闭后焦点回到入口。"],
    ["底部面板","Bottom Sheet","移动端展示选项或连续操作。","从底部出现，可下拉关闭，并适配安全区域。","移动端点击筛选后，从底部弹出 Bottom Sheet；可拖动调整高度，下拉超过阈值关闭。"],
    ["模态弹窗","Modal","必须先确认或填写才能继续。","锁定背景，焦点留在弹窗内，主次按钮清楚。","点击删除后打开居中 Modal，遮罩并锁定背景；默认聚焦取消按钮，确认后显示处理结果。"]
  ]},
  { id:"nav", name:"导航结构", hint:"切换内容与层级", items:[
    ["标签页","Tabs","切换同级内容。","当前项高亮，切换时不刷新整个页面。","在内容区顶部放 Tabs，点击后切换概览、数据、成员；当前项高亮，不刷新整页。"],
    ["步骤条","Stepper","展示流程进度和下一步。","区分已完成、当前与未开始状态。","表单顶部显示三步 Stepper，区分已完成、当前和未开始；提交后推进，并允许返回已完成步骤。"],
    ["面包屑","Breadcrumb","说明当前位置和页面层级。","前级可返回；当前页只显示、不链接。","标题上方显示首页—项目—报表的 Breadcrumb；前两级可返回，当前页加粗且不可点击。"],
    ["折叠侧边栏","Collapsible Sidebar","承载长期稳定的主导航，同时节省空间。","展开显示文字，收起只留图标，并记住用户状态。","在左侧做宽 240px 的可折叠侧边栏；收起后宽 64px 只留图标，悬停显示名称，当前页持续高亮。"],
    ["锚点目录","Anchor Nav","在长页面章节间快速定位。","滚动时同步高亮当前章节。","长页面右侧放锚点目录，点击平滑滚动到章节；滚动时自动高亮当前项。"]
  ]},
  { id:"loading", name:"加载反馈", hint:"告诉用户正在发生什么", items:[
    ["骨架屏","Skeleton","结构已知，内容还在请求。","占位对应真实结构；完成后淡入内容，避免布局跳动。","数据卡加载时显示与标题、指标和图表结构一致的 Skeleton；数据返回后淡入真实内容。"],
    ["进度条","Progress Bar","任务进度可以计算。","显示比例与当前阶段；失败时保留重试。","导入文件时显示进度条、百分比和当前阶段；失败时停在失败点并提供重试。"],
    ["按钮加载","Loading Button","提交动作正在执行。","按钮宽度不变，并禁用重复提交。","提交后按钮保持原宽度，显示加载状态和“提交中”；结束后短暂显示结果。"],
    ["局部加载","Inline Loader","只更新一个卡片或表格区域。","只阻塞受影响区域，其他内容保持可用。","刷新图表时只在图表区域显示半透明 Loader，筛选区和其他卡片仍可操作。"]
  ]},
  { id:"chart", name:"图表交互", hint:"探索、比较和下钻数据", items:[
    ["十字线","Crosshair","精准读取同一位置的时间与数值。","横纵辅助线跟随鼠标，并吸附最近的数据点。","鼠标移入折线图后显示横纵辅助线，交点吸附最近数据点；同时显示时间和数值，移出后消失。"],
    ["提示框","Chart Tooltip","在不打断阅读时补充详细数值。","跟随目标，显示名称、时间、数值和必要说明。","悬停数据点时，在旁边显示名称、时间、数值和同比变化；提示框自动避让边缘。"],
    ["图例筛选","Legend Filter","隐藏或恢复系列，减少比较干扰。","关闭项变灰，坐标轴保持稳定，再点一次恢复。","点击图例时隐藏或显示对应系列；关闭项变灰，剩余曲线保留，坐标轴范围不跳动。"],
    ["框选与缩放","Brush & Zoom","选一段数据并放大查看。","拖动形成半透明选区，松手后更新主图或明细。","按住鼠标拖动选择时间范围；松手后放大主图并筛选下方明细，提供恢复全部按钮。"],
    ["数据下钻","Drill Down","从汇总进入下一层明细。","图表更新，同时显示层级路径和返回入口。","点击地区柱子后进入城市明细；更新标题和面包屑，并提供返回上一级按钮。"]
  ]},
  { id:"dashboard", name:"看板布局", hint:"让数据更清晰而非更花", items:[
    ["极简数据板","Minimal","管理层总览与日常监控。","大留白、细分隔、单一强调色。","做一个极简 Dashboard：浅色背景、细分隔线、一个强调色；先指标、再趋势、最后明细。"],
    ["便当盒布局","Bento Grid","信息模块多、优先级不同。","统一栅格，用卡片面积表达优先级。","用 Bento Grid 排列看板；核心指标占大卡片，其余模块按统一间距对齐，避免装饰性阴影。"],
    ["深色监控台","Dark Ops","实时监控和异常发现。","深背景、高对比状态色，严格控制发光效果。","做一个深色实时监控台；仅异常和告警使用高亮色，其他数据使用低饱和中性色。"],
    ["高密度分析","High Density","专业用户需要同时查看大量数据。","紧凑表格、小倍图和联动筛选，仍保持统一对齐。","做一个高密度分析看板，用紧凑表格、小倍图和顶部联动筛选；所有模块严格对齐到同一栅格。"]
  ]}
];

let currentGroup = 0;
let currentItem = 0;
const categoryGrid = document.querySelector("#category-nav");
const detail = document.querySelector("#detail");

function demo(type, item) {
  const key=`${type}-${item}`;
  const demos={
    "select-0":`<button class="ui-select trigger" type="button">请选择地区 <b>⌄</b></button><div class="ui-menu"><button>北京市</button><button>上海市</button><button>广东省</button></div>`,
    "select-1":`<div class="search-select"><input aria-label="搜索城市" placeholder="搜索城市"><div class="search-options"><button>上海市</button><button>长沙市</button><button>成都市</button><p class="empty">没有匹配项</p></div></div>`,
    "select-2":`<div class="cascader"><div><button class="chosen">浙江省 ›</button><button>广东省 ›</button></div><div><button>杭州市 ›</button><button>宁波市 ›</button></div><div><button>西湖区</button><button>滨江区</button></div></div><p class="demo-result">浙江省 / 杭州市 / 西湖区</p>`,
    "select-3":`<div class="multi-field"><span>华东 ×</span><span>华南 ×</span><b>已选 2 项</b></div><div class="check-list"><button class="checked">✓ 华东</button><button class="checked">✓ 华南</button><button>华北</button></div>`,
    "select-4":`<div class="quick-range"><button>最近 7 天</button><button>最近 30 天</button></div><div class="calendar">${Array.from({length:14},(_,i)=>`<button>${i+1}</button>`).join("")}</div><p class="demo-result">请选择开始日期</p>`,
    "expand-0":`<button class="pill-toggle" type="button"><i></i><span>已保存</span></button>`,
    "expand-1":`<div class="accordion-demo"><button class="accordion-head">订单明细 <b>⌄</b></button><div class="accordion-body"><p>商品金额　¥ 1,280</p><p>优惠金额　− ¥ 80</p></div></div>`,
    "expand-2":`<div class="push-stack"><div class="push-card"><button>查看详情</button><div class="push-detail">本月转化率提升 12%，主要来自自然流量。</div></div><div class="push-card muted-card">下一项内容</div></div>`,
    "expand-3":`<button class="reveal-trigger">展开成员</button><div class="reveal-list"><span>林晓 · 产品</span><span>陈晨 · 设计</span><span>周可 · 数据</span></div>`,
    "drag-0":`<div class="sortable-list"><button>⠿　需求评审</button><button>⠿　交互设计</button><button>⠿　开发排期</button></div><p class="demo-result">拖动条目调整顺序</p>`,
    "drag-1":`<div class="transfer-board"><div class="dropzone"><b>待处理</b><button class="move-card">用户反馈 #42</button></div><div class="dropzone"><b>处理中</b></div><div class="dropzone"><b>已完成</b></div></div>`,
    "drag-2":`<div class="free-canvas"><span class="guide-x"></span><span class="guide-y"></span><button class="free-node">指标卡</button><button class="fixed-node">趋势图</button></div>`,
    "drag-3":`<div class="resize-box"><b>可调整卡片</b><span class="size-label">180 × 100</span><button class="resize-handle" aria-label="调整尺寸"></button></div>`,
    "panel-0":`<div class="tooltip-stage"><button class="info-target">?</button><div class="tooltip-bubble">统计周期内的去重用户数</div></div>`,
    "panel-1":`<div class="popover-stage"><button class="avatar">YC</button><div class="popover-card"><b>言川</b><button>查看资料</button><button>发送消息</button></div></div>`,
    "panel-2":`<div class="mini-page"><button class="open-layer">查看详情</button></div><div class="drawer-layer"><button class="close-layer">×</button><b>项目详情</b><p>负责人　林晓</p><p>状态　进行中</p></div>`,
    "panel-3":`<div class="mini-page"><button class="open-layer">筛选</button></div><div class="sheet-layer"><i></i><b>选择筛选条件</b><button>仅看进行中</button><button>仅看我负责</button></div>`,
    "panel-4":`<div class="mini-page"><button class="open-layer danger">删除项目</button></div><div class="modal-mask"><div class="modal-card"><b>确认删除？</b><p>删除后无法恢复。</p><button class="cancel">取消</button><button class="confirm">确认删除</button></div></div>`,
    "nav-0":`<div class="tabs-demo"><div><button class="active">概览</button><button>数据</button><button>成员</button></div><p>概览内容</p></div>`,
    "nav-1":`<div class="stepper-demo"><ol><li class="done">1 基本信息</li><li class="current">2 配置权限</li><li>3 完成</li></ol><button>下一步</button></div>`,
    "nav-2":`<nav class="crumb-demo"><button>首页</button><i>›</i><button>项目</button><i>›</i><b>销售看板</b></nav><p class="demo-result">销售看板</p>`,
    "nav-3":`<div class="collapse-nav"><button class="nav-toggle">☰</button><button><i>⌂</i><span>概览</span></button><button><i>▥</i><span>数据分析</span></button><button><i>⚙</i><span>设置</span></button></div><div class="nav-main">内容区域</div>`,
    "nav-4":`<div class="anchor-page"><div><section>01 概览</section><section>02 趋势</section><section>03 明细</section></div><nav><button class="active">概览</button><button>趋势</button><button>明细</button></nav></div>`,
    "loading-0":`<div class="skeleton-card"><div class="sk-title"></div><div class="sk-number"></div><div class="sk-chart"></div><div class="loaded-content"><span>本月收入</span><b>¥ 128,600</b><i></i></div></div>`,
    "loading-1":`<div class="progress-demo"><b>正在导入数据</b><div><i></i></div><span>0%</span><button>重新播放</button></div>`,
    "loading-2":`<button class="loading-button"><i></i><span>提交报表</span></button><p class="demo-result">点击按钮提交</p>`,
    "loading-3":`<div class="inline-layout"><div class="filter-row"><button>近 30 天</button><button>全部渠道</button></div><div class="inline-card"><svg viewBox="0 0 240 80"><path d="M5 65L55 42L105 53L155 20L235 32"/></svg><div class="inline-loader">加载中…</div></div></div>`,
    "chart-0":chartMarkup("line"),
    "chart-1":`<div class="bar-chart"><button style="--h:45%" data-value="一月 · 42 万"></button><button style="--h:72%" data-value="二月 · 68 万"></button><button style="--h:58%" data-value="三月 · 55 万"></button><div class="chart-tip">二月 · 68 万</div></div>`,
    "chart-2":`<div class="legend-demo"><div class="legend-row"><button data-series="a">● 订单量</button><button data-series="b">● 成交额</button></div><svg viewBox="0 0 300 130"><path class="series-a" d="M10 95L65 65L120 78L180 32L235 55L290 20"/><path class="series-b" d="M10 110L65 90L120 48L180 72L235 38L290 58"/></svg></div>`,
    "chart-3":`<div class="brush-demo"><svg viewBox="0 0 300 130"><path d="M8 100L50 84L92 92L134 45L176 68L218 35L292 52"/></svg><div class="brush-range"></div><button>恢复全部</button></div>`,
    "chart-4":`<div class="drill-demo"><div class="drill-crumb"><button>全国</button><span></span></div><div class="drill-bars"><button data-region="华东" style="--h:82%">华东</button><button data-region="华南" style="--h:64%">华南</button><button data-region="华北" style="--h:48%">华北</button></div></div>`,
    "dashboard-0":`<div class="minimal-dash"><header>业务概览 <button>近 30 天⌄</button></header><div><article><span>成交额</span><b>¥ 2.86M</b><em>+12.4%</em></article><article><span>订单量</span><b>18,492</b><em>+6.8%</em></article></div><svg viewBox="0 0 300 70"><path d="M5 62L55 50L105 55L155 28L205 38L250 12L295 22"/></svg></div>`,
    "dashboard-1":`<div class="bento-dash"><button class="wide">核心指标<b>¥ 2.86M</b></button><button>转化率<b>6.8%</b></button><button>用户数<b>42K</b></button><button class="long">趋势分析</button></div>`,
    "dashboard-2":`<div class="ops-dash"><header>实时监控 <i></i></header><div><button>服务可用率<b>99.98%</b></button><button class="alert">异常任务<b>3</b></button></div><p>流量 1,248 req/s　 延迟 32ms</p></div>`,
    "dashboard-3":`<div class="dense-dash"><div class="dense-filters"><button>渠道：全部</button><button>地区：全国</button></div><table><thead><tr><th>业务线</th><th>收入</th><th>同比</th></tr></thead><tbody><tr><td>电商</td><td>286万</td><td>+12%</td></tr><tr><td>广告</td><td>192万</td><td>+8%</td></tr><tr><td>服务</td><td>86万</td><td>−2%</td></tr></tbody></table></div>`
  };
  return `<div class="demo component-demo" data-demo="${key}"><div class="demo-scene">${demos[key]}</div></div>`;
}

function chartMarkup(){
  return `<div class="cross-chart"><svg viewBox="0 0 300 150"><path class="chart-grid" d="M10 35H290M10 75H290M10 115H290"/><path class="chart-line" d="M10 118L65 90L120 102L180 48L235 70L290 28"/><circle cx="180" cy="48" r="5"/></svg><i class="cross-x"></i><i class="cross-y"></i><div class="cross-tip">4月 · 82万</div></div>`;
}

function render() {
  categoryGrid.innerHTML = groups.map((group,index)=>`<div class="category-group"><button class="category" type="button" data-group="${index}" aria-selected="${index===currentGroup}" aria-expanded="${index===currentGroup}"><span>${String(index+1).padStart(2,"0")}</span><strong>${group.name}</strong></button>${index===currentGroup?`<div class="subnav" aria-label="${group.name}组件">${group.items.map((item,itemIndex)=>`<button class="item" type="button" data-item="${itemIndex}" aria-selected="${itemIndex===currentItem}">${item[0]}</button>`).join("")}</div>`:""}</div>`).join("");
  const group=groups[currentGroup];
  document.querySelector("#section-kicker").textContent=group.id.toUpperCase();
  document.querySelector("#section-title").textContent=group.name;
  document.querySelector("#section-hint").textContent=group.hint;
  const [name,en,when,effect,prompt]=group.items[currentItem];
  detail.innerHTML=`<div class="detail-copy"><p class="detail-kicker">${en.toUpperCase()}</p><h3>${name}</h3><p class="summary">${when}</p><div class="keyline"><b>效果</b><span>${effect}</span></div><div class="prompt-box"><span>AI 指令 <button class="copy" type="button">复制</button></span><p>${prompt}</p></div></div><div class="demo-wrap"><div class="demo-label"><span>效果预览</span><div class="demo-switch"><button type="button" data-mode="auto" aria-selected="true">动画演示</button><button type="button" data-mode="manual" aria-selected="false">自己试试</button></div></div><div class="demo-slot">${demo(group.id,currentItem)}</div><p class="manual-tip">正在自动演示这个组件的核心动作</p></div>`;
  categoryGrid.querySelectorAll(".category").forEach(button=>button.addEventListener("click",()=>{currentGroup=Number(button.dataset.group);currentItem=0;render();}));
  categoryGrid.querySelectorAll(".item").forEach(button=>button.addEventListener("click",()=>{currentItem=Number(button.dataset.item);render();}));
  detail.querySelector(".copy").addEventListener("click",()=>copyText(prompt));
  detail.querySelectorAll("[data-mode]").forEach(button=>button.addEventListener("click",()=>setDemoMode(button.dataset.mode)));
}

function setDemoMode(mode){
  detail.querySelectorAll("[data-mode]").forEach(button=>button.setAttribute("aria-selected",String(button.dataset.mode===mode)));
  const slot=detail.querySelector(".demo-slot"), type=groups[currentGroup].id;
  slot.innerHTML=demo(type,currentItem);
  const demoEl=slot.querySelector(".demo"), tip=detail.querySelector(".manual-tip"), key=demoEl.dataset.demo;
  if(mode==="auto"){tip.textContent="正在自动演示这个组件的核心动作";return;}
  demoEl.classList.add("manual-demo");
  bindManualDemo(demoEl,key,tip);
}

function bindManualDemo(root,key,tip){
  const $=selector=>root.querySelector(selector), $$=selector=>[...root.querySelectorAll(selector)];
  const say=text=>tip.textContent=text;
  const toggle=(selector,className="open")=>$(selector)?.classList.toggle(className);
  const instructions={select:["点击下拉框选择地区","输入城市名称筛选结果","依次点击省、市、区","点击选项添加或取消多选","点击开始日和结束日"],expand:["点击圆点展开状态","点击标题展开或收起正文","点击查看详情，观察下方内容被推开","点击按钮，查看列表依次进入"],drag:["拖动条目调整顺序","把卡片拖到另一列，也可以直接点目标列","拖动画布中的指标卡","拖动右下角把手调整大小"],panel:["悬停或点击问号查看提示","点击头像打开操作气泡","点击查看详情打开右侧抽屉","点击筛选打开底部面板","点击删除项目打开确认弹窗"],nav:["点击标签切换同级内容","点击下一步推进流程","点击前级面包屑返回","点击菜单按钮收起或展开侧栏","点击目录定位章节"],loading:["点击卡片切换加载与完成状态","点击重新播放进度","点击按钮模拟提交","点击图表区域局部刷新"],chart:["在图表内移动鼠标读取数值","悬停或点击柱子查看数值","点击图例隐藏或恢复数据系列","在图表中横向拖动框选范围","点击地区进入下一层明细"],dashboard:["点击指标查看重点状态","点击卡片切换重点模块","点击异常任务查看告警状态","点击筛选器切换分析范围"]};
  const [type,indexText]=key.split("-"), index=Number(indexText); say(instructions[type][index]);

  if(key==="select-0"){$(".trigger").onclick=()=>toggle(".ui-menu");$$('.ui-menu button').forEach(b=>b.onclick=()=>{$('.trigger').firstChild.textContent=`${b.textContent} `;toggle('.ui-menu');say(`已选择：${b.textContent}`);});}
  if(key==="select-1"){const input=$("input");input.oninput=()=>{let count=0;$$('.search-options button').forEach(b=>{const show=b.textContent.includes(input.value);b.hidden=!show;if(show)count++;});$('.empty').style.display=count?'none':'block';say(count?`找到 ${count} 个结果`:'没有匹配项');};$$('.search-options button').forEach(b=>b.onclick=()=>{input.value=b.textContent;say(`已选择：${b.textContent}`);});input.focus();}
  if(key==="select-2"){$$('.cascader button').forEach(b=>b.onclick=()=>{b.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('chosen'));b.classList.add('chosen');$('.demo-result').textContent=`当前选择：${b.textContent.replace(' ›','')}`;});}
  if(key==="select-3"){$$('.check-list button').forEach(b=>b.onclick=()=>{b.classList.toggle('checked');b.textContent=(b.classList.contains('checked')?'✓ ':'')+b.textContent.replace('✓ ','');const n=$$('.check-list .checked').length;$('.multi-field b').textContent=`已选 ${n} 项`;say(`当前已选 ${n} 项`);});}
  if(key==="select-4"){let start=null;$$('.calendar button').forEach(b=>b.onclick=()=>{const day=Number(b.textContent);if(start===null){start=day;$$('.calendar button').forEach(x=>x.classList.remove('range','edge'));b.classList.add('edge');$('.demo-result').textContent=`开始日：${day} 日，请选择结束日`;}else{const a=Math.min(start,day),z=Math.max(start,day);$$('.calendar button').forEach(x=>{const n=Number(x.textContent);x.classList.toggle('range',n>=a&&n<=z);x.classList.toggle('edge',n===a||n===z);});$('.demo-result').textContent=`已选择：${a} 日 — ${z} 日`;say(`已选择 ${z-a+1} 天`);start=null;}});$$('.quick-range button').forEach(b=>b.onclick=()=>say(`已选择：${b.textContent}`));}
  if(key==="expand-0"){$('.pill-toggle').onclick=()=>{toggle('.pill-toggle','open');say($('.pill-toggle').classList.contains('open')?'状态已展开':'状态已收起');};}
  if(key==="expand-1"){$('.accordion-head').onclick=()=>{toggle('.accordion-demo');say($('.accordion-demo').classList.contains('open')?'订单明细已展开':'订单明细已收起');};}
  if(key==="expand-2"){$('.push-card button').onclick=()=>{toggle('.push-stack');say($('.push-stack').classList.contains('open')?'详情已展开，下方内容被推开':'详情已收起');};}
  if(key==="expand-3"){$('.reveal-trigger').onclick=()=>{toggle('.reveal-list','open');say($('.reveal-list').classList.contains('open')?'成员已依次展开':'成员已收起');};}
  if(key==="drag-0") makeSortable($('.sortable-list'),say);
  if(key==="drag-1"){const card=$('.move-card');makeDraggable(card,root,(x)=>{const zones=$$('.dropzone');const zone=zones.find(z=>{const r=z.getBoundingClientRect();return x>=r.left&&x<=r.right;});if(zone){zone.append(card);say(`已移动到：${zone.querySelector('b').textContent}`);}});$$('.dropzone').forEach(z=>z.onclick=e=>{if(e.target===z||e.target.tagName==='B'){z.append(card);say(`已移动到：${z.querySelector('b').textContent}`);}});}
  if(key==="drag-2") makeFreeMove($('.free-node'),$('.free-canvas'),say);
  if(key==="drag-3") makeResize($('.resize-box'),$('.resize-handle'),say);
  if(key==="panel-0"){$('.info-target').onclick=()=>toggle('.tooltip-stage');}
  if(key==="panel-1"){$('.avatar').onclick=()=>toggle('.popover-stage');}
  if(type==="panel"&&index>=2){$('.open-layer').onclick=()=>{root.classList.add('open');say('已打开，可点击关闭或完成操作');};$('.close-layer')?.addEventListener('click',()=>root.classList.remove('open'));$('.cancel')?.addEventListener('click',()=>root.classList.remove('open'));$('.confirm')?.addEventListener('click',()=>{root.classList.remove('open');say('项目已删除（演示）');});$('.sheet-layer')?.addEventListener('click',()=>root.classList.remove('open'));}
  if(key==="nav-0"){$$('.tabs-demo button').forEach(b=>b.onclick=()=>{$$('.tabs-demo button').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('.tabs-demo p').textContent=`${b.textContent}内容`;say(`已切换到：${b.textContent}`);});}
  if(key==="nav-1"){let step=2;$('.stepper-demo button').onclick=()=>{step=step===3?1:step+1;$$('.stepper-demo li').forEach((li,i)=>{li.className=i+1<step?'done':i+1===step?'current':'';});say(`当前第 ${step} 步`);};}
  if(key==="nav-2"){$$('.crumb-demo button').forEach(b=>b.onclick=()=>{$('.demo-result').textContent=b.textContent;say(`已返回：${b.textContent}`);});}
  if(key==="nav-3"){$('.nav-toggle').onclick=()=>{toggle('.collapse-nav','collapsed');say($('.collapse-nav').classList.contains('collapsed')?'侧栏已收起':'侧栏已展开');};}
  if(key==="nav-4"){$$('.anchor-page nav button').forEach((b,i)=>b.onclick=()=>{$$('.anchor-page nav button').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('.anchor-page section').parentElement.style.transform=`translateY(-${i*72}px)`;say(`已定位到：${b.textContent}`);});}
  if(key==="loading-0"){$('.skeleton-card').onclick=()=>{toggle('.skeleton-card','complete');say($('.skeleton-card').classList.contains('complete')?'真实内容已淡入':'重新显示骨架结构');};}
  if(key==="loading-1"){$('.progress-demo button').onclick=()=>runProgress(root,say);}
  if(key==="loading-2"){$('.loading-button').onclick=()=>{const b=$('.loading-button');if(b.classList.contains('loading'))return;b.classList.add('loading');b.querySelector('span').textContent='提交中';say('正在提交，请稍候…');setTimeout(()=>{b.classList.remove('loading');b.classList.add('success');b.querySelector('span').textContent='提交成功';say('提交成功');},900);};}
  if(key==="loading-3"){$('.inline-card').onclick=()=>{$('.inline-loader').classList.add('show');say('只刷新当前图表，筛选仍可操作');setTimeout(()=>{$('.inline-loader').classList.remove('show');say('图表刷新完成');},900);};}
  if(key==="chart-0"){const chart=$('.cross-chart');chart.onpointermove=e=>{const r=chart.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;root.style.setProperty('--mx',`${x}px`);root.style.setProperty('--my',`${y}px`);root.classList.add('tracking');$('.cross-tip').textContent=`${Math.max(1,Math.round(x/r.width*12))}月 · ${Math.round((1-y/r.height)*90+20)}万`;};chart.onpointerleave=()=>root.classList.remove('tracking');}
  if(key==="chart-1"){$$('.bar-chart button').forEach(b=>{const show=()=>{$('.chart-tip').textContent=b.dataset.value;$('.chart-tip').style.left=`${b.offsetLeft+b.offsetWidth/2}px`;};b.onpointerenter=show;b.onclick=show;});}
  if(key==="chart-2"){$$('.legend-row button').forEach(b=>b.onclick=()=>{b.classList.toggle('off');root.classList.toggle(`hide-${b.dataset.series}`);say(`${b.textContent.replace('● ','')}已${b.classList.contains('off')?'隐藏':'恢复'}`);});}
  if(key==="chart-3") makeBrush($('.brush-demo'),say);
  if(key==="chart-4"){$$('.drill-bars button').forEach(b=>b.onclick=()=>drill(root,b.dataset.region,say));$('.drill-crumb button').onclick=()=>setDemoMode('manual');}
  if(type==="dashboard"){$$('button').forEach(b=>b.onclick=()=>{root.querySelectorAll('.focused').forEach(x=>x.classList.remove('focused'));b.classList.add('focused');say(`已聚焦：${b.textContent.trim()}`);});}
}

function makeDraggable(el,bounds,onDrop){let startX=0,startY=0;el.onpointerdown=e=>{e.preventDefault();startX=e.clientX;startY=e.clientY;el.setPointerCapture(e.pointerId);el.classList.add('dragging');};el.onpointermove=e=>{if(!el.hasPointerCapture(e.pointerId))return;el.style.transform=`translate(${e.clientX-startX}px,${e.clientY-startY}px)`;};el.onpointerup=e=>{if(!el.hasPointerCapture(e.pointerId))return;el.releasePointerCapture(e.pointerId);el.classList.remove('dragging');el.style.transform='';onDrop(e.clientX,e.clientY);};}
function makeSortable(list,say){let dragged=null;[...list.children].forEach(item=>{item.onpointerdown=e=>{dragged=item;item.setPointerCapture(e.pointerId);item.classList.add('dragging');};item.onpointermove=e=>{if(!dragged)return;const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('.sortable-list button');if(target&&target!==dragged)list.insertBefore(dragged,e.clientY<target.getBoundingClientRect().top+target.offsetHeight/2?target:target.nextSibling);};item.onpointerup=e=>{item.releasePointerCapture(e.pointerId);item.classList.remove('dragging');dragged=null;say('顺序已更新，可继续拖动');};});}
function makeFreeMove(node,canvas,say){node.onpointerdown=e=>{node.setPointerCapture(e.pointerId);node.dataset.dx=e.clientX-node.offsetLeft;node.dataset.dy=e.clientY-node.offsetTop;};node.onpointermove=e=>{if(!node.hasPointerCapture(e.pointerId))return;const x=Math.max(0,Math.min(canvas.clientWidth-node.offsetWidth,e.clientX-Number(node.dataset.dx))),y=Math.max(0,Math.min(canvas.clientHeight-node.offsetHeight,e.clientY-Number(node.dataset.dy)));node.style.left=`${x}px`;node.style.top=`${y}px`;canvas.classList.toggle('aligned',Math.abs(x-(canvas.clientWidth-node.offsetWidth)/2)<12);};node.onpointerup=e=>{node.releasePointerCapture(e.pointerId);say(canvas.classList.contains('aligned')?'已吸附到中心参考线':'节点位置已更新');};}
function makeResize(box,handle,say){handle.onpointerdown=e=>{e.preventDefault();handle.setPointerCapture(e.pointerId);handle.dataset.x=e.clientX;handle.dataset.y=e.clientY;handle.dataset.w=box.offsetWidth;handle.dataset.h=box.offsetHeight;};handle.onpointermove=e=>{if(!handle.hasPointerCapture(e.pointerId))return;const w=Math.max(140,Math.min(260,Number(handle.dataset.w)+e.clientX-Number(handle.dataset.x))),h=Math.max(80,Math.min(160,Number(handle.dataset.h)+e.clientY-Number(handle.dataset.y)));box.style.width=`${w}px`;box.style.height=`${h}px`;box.querySelector('.size-label').textContent=`${Math.round(w)} × ${Math.round(h)}`;};handle.onpointerup=e=>{handle.releasePointerCapture(e.pointerId);say(`尺寸已调整为 ${box.querySelector('.size-label').textContent}`);};}
function runProgress(root,say){const bar=root.querySelector('.progress-demo i'),label=root.querySelector('.progress-demo span');bar.style.width='0';let n=0;const timer=setInterval(()=>{n+=4;bar.style.width=`${n}%`;label.textContent=`${n}%`;if(n>=100){clearInterval(timer);say('导入完成');}},35);}
function makeBrush(chart,say){let start=0;const range=chart.querySelector('.brush-range');chart.onpointerdown=e=>{const r=chart.getBoundingClientRect();start=e.clientX-r.left;chart.setPointerCapture(e.pointerId);range.style.left=`${start}px`;range.style.width='0';};chart.onpointermove=e=>{if(!chart.hasPointerCapture(e.pointerId))return;const x=e.clientX-chart.getBoundingClientRect().left;range.style.left=`${Math.min(start,x)}px`;range.style.width=`${Math.abs(x-start)}px`;};chart.onpointerup=e=>{chart.releasePointerCapture(e.pointerId);say('已放大所选时间范围');};chart.querySelector('button').onclick=()=>{range.style.width='0';say('已恢复全部范围');};}
function drill(root,region,say){root.querySelector('.drill-crumb span').textContent=`› ${region}`;const names=region==='华东'?['上海','浙江','江苏']:region==='华南'?['广东','福建','海南']:['北京','河北','山东'];root.querySelector('.drill-bars').innerHTML=names.map((name,i)=>`<button style="--h:${75-i*15}%">${name}</button>`).join('');say(`已下钻到：${region}`);}

function copyText(text){navigator.clipboard?.writeText(text).then(showToast).catch(()=>{const input=document.createElement("textarea");input.value=text;document.body.append(input);input.select();document.execCommand("copy");input.remove();showToast();});}
function showToast(){const toast=document.querySelector("#toast");toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),1300);}
document.querySelectorAll("[data-copy]").forEach(button=>button.addEventListener("click",()=>copyText(button.dataset.copy)));
render();
