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
const itemList = document.querySelector("#subnav");
const detail = document.querySelector("#detail");

function demo(type) {
  if(type==="select") return '<div class="demo select-demo"><div class="field">请选择地区</div><div class="menu"><span>北京市</span><span>上海市</span><span>广东省</span></div><i class="cursor"></i></div>';
  if(type==="expand") return '<div class="demo expand-demo"><div class="bar"><i class="dot"></i></div><i class="cursor"></i></div>';
  if(type==="drag") return '<div class="demo drag-demo"><span class="slot">位置 1</span><span class="slot">放置区域</span><span class="slot">位置 3</span><span class="card">拖动卡片</span><i class="cursor"></i></div>';
  if(type==="panel") return '<div class="demo panel-demo"><div class="page">当前页面<i></i><i></i><i></i></div><div class="panel"><b>详情面板</b><p>在不离开当前页面的情况下查看和编辑内容。</p></div><i class="cursor"></i></div>';
  if(type==="nav") return '<div class="demo nav-demo"><div class="side"><span>概览</span><span>数据分析</span><span>成员管理</span><span>设置</span></div><div class="content">内容区域<i></i><i></i><i></i></div><i class="cursor"></i></div>';
  if(type==="loading") return '<div class="demo load-demo"><i></i><i></i><i></i></div>';
  if(type==="dashboard") return '<div class="demo dashboard-demo"><i></i><i></i><i></i><i></i></div>';
  return '<div class="demo chart-demo"><svg viewBox="0 0 360 190"><path class="grid" d="M20 45H340M20 95H340M20 145H340"/><path class="line" d="M20 145L85 120L150 132L215 70L280 92L340 35"/><circle class="point" cx="85" cy="120" r="5"/><circle class="point" cx="215" cy="70" r="5"/><path class="guide" d="M85 20V165"/></svg><i class="cursor"></i></div>';
}

function render() {
  categoryGrid.innerHTML = groups.map((group,index)=>`<button class="category" type="button" data-group="${index}" aria-selected="${index===currentGroup}"><span>${String(index+1).padStart(2,"0")}</span><strong>${group.name}</strong></button>`).join("");
  const group=groups[currentGroup];
  document.querySelector("#section-kicker").textContent=group.id.toUpperCase();
  document.querySelector("#section-title").textContent=group.name;
  document.querySelector("#section-hint").textContent=group.hint;
  itemList.innerHTML=group.items.map((item,index)=>`<button class="item" type="button" data-item="${index}" aria-selected="${index===currentItem}">${item[0]}</button>`).join("");
  const [name,en,when,effect,prompt]=group.items[currentItem];
  detail.innerHTML=`<div class="detail-copy"><p class="detail-kicker">${en.toUpperCase()}</p><h3>${name}</h3><p class="summary">${when}</p><div class="keyline"><b>效果</b><span>${effect}</span></div><div class="prompt-box"><span>AI 指令 <button class="copy" type="button">复制</button></span><p>${prompt}</p></div></div><div class="demo-wrap"><div class="demo-label"><span>效果预览</span><div class="demo-switch"><button type="button" data-mode="auto" aria-selected="true">动画演示</button><button type="button" data-mode="manual" aria-selected="false">自己试试</button></div></div>${demo(group.id)}<p class="manual-tip">动画会自动循环播放</p></div>`;
  categoryGrid.querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{currentGroup=Number(button.dataset.group);currentItem=0;render();}));
  itemList.querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{currentItem=Number(button.dataset.item);render();}));
  detail.querySelector(".copy").addEventListener("click",()=>copyText(prompt));
  detail.querySelectorAll("[data-mode]").forEach(button=>button.addEventListener("click",()=>setDemoMode(button.dataset.mode)));
}

function setDemoMode(mode){
  const demoEl=detail.querySelector(".demo"), tip=detail.querySelector(".manual-tip");
  detail.querySelectorAll("[data-mode]").forEach(button=>button.setAttribute("aria-selected",String(button.dataset.mode===mode)));
  demoEl.className=demoEl.className.replace(/ manual-demo| paused| open| active| loaded/g,"");
  if(mode==="auto"){tip.textContent="动画会自动循环播放";return;}
  demoEl.classList.add("manual-demo");
  const type=groups[currentGroup].id;
  if(type==="select"){tip.textContent="点击输入框，再点击一个选项";const field=demoEl.querySelector(".field");field.addEventListener("click",()=>demoEl.classList.toggle("open"));demoEl.querySelectorAll(".menu span").forEach(option=>option.addEventListener("click",()=>{field.firstChild.textContent=option.textContent;demoEl.classList.remove("open");tip.textContent=`已选择：${option.textContent}`;}));}
  if(type==="expand"){tip.textContent="点击圆点，展开或收起状态";demoEl.querySelector(".bar").addEventListener("click",()=>demoEl.classList.toggle("active"));}
  if(type==="drag"){tip.textContent="拖动卡片，或点击卡片模拟移动";const card=demoEl.querySelector(".card");card.draggable=true;card.addEventListener("dragstart",()=>card.classList.add("dragged"));card.addEventListener("click",()=>{card.classList.toggle("dragged");tip.textContent=card.classList.contains("dragged")?"已移动到新位置":"已回到原位置";});demoEl.querySelectorAll(".slot").forEach(slot=>{slot.addEventListener("dragover",event=>event.preventDefault());slot.addEventListener("drop",()=>{card.classList.add("dragged");tip.textContent="已移动到新位置";});});}
  if(type==="panel"){tip.textContent="点击页面打开抽屉，点击抽屉关闭";demoEl.addEventListener("click",()=>demoEl.classList.toggle("open"));}
  if(type==="nav"){tip.textContent="点击左侧导航，展开或收起";demoEl.querySelector(".side").addEventListener("click",()=>demoEl.classList.toggle("open"));}
  if(type==="loading"){tip.textContent="点击区域，模拟加载完成或重新加载";demoEl.addEventListener("click",()=>{demoEl.classList.toggle("loaded");tip.textContent=demoEl.classList.contains("loaded")?"加载完成":"正在重新加载…";});}
  if(type==="chart"){tip.textContent="在图表中移动鼠标，查看十字线";const guide=demoEl.querySelector(".guide");demoEl.addEventListener("pointermove",event=>{const rect=demoEl.getBoundingClientRect(),x=Math.max(0,Math.min(170,(event.clientX-rect.left)/rect.width*320-65));guide.style.display="block";demoEl.style.setProperty("--chart-x",`${x}px`);});}
  if(type==="dashboard"){tip.textContent="点击卡片，切换重点区域";demoEl.addEventListener("click",()=>demoEl.classList.toggle("active"));}
}

function copyText(text){navigator.clipboard?.writeText(text).then(showToast).catch(()=>{const input=document.createElement("textarea");input.value=text;document.body.append(input);input.select();document.execCommand("copy");input.remove();showToast();});}
function showToast(){const toast=document.querySelector("#toast");toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),1300);}
document.querySelectorAll("[data-copy]").forEach(button=>button.addEventListener("click",()=>copyText(button.dataset.copy)));
render();
