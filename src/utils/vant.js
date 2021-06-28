import Vue from "vue";

import {
  Button,
  Search,
  Stepper,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Image,
  Popup,
  // IndexBar,
  // IndexAnchor,
  Dialog,
  Loading,
  Lazyload,
  DatetimePicker,
  Toast,
  Empty,
  Skeleton,
  Divider,
  // Icon,
  NoticeBar,
  Overlay,
  Tab,
  Tabs,
  // Field,
  Cell,
  CellGroup,
  List,
  CountDown,
  Sticky,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  TreeSelect,
  // Collapse,
  // CollapseItem,
  // DropdownMenu,
  // DropdownItem,
  // Switch,
  Sidebar,
  SidebarItem,
  Swipe,
  SwipeItem,
  PullRefresh,
  ActionSheet,
  // Picker,
  SwipeCell
} from "vant";
Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Search);
Vue.use(Stepper);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Image);
Vue.use(Popup);
// Vue.use(IndexBar);
// Vue.use(IndexAnchor);
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(Lazyload);
Vue.use(DatetimePicker);
Vue.use(Toast);
// Vue.use(Icon);
Vue.use(NoticeBar);
Vue.use(Overlay);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Empty);
Vue.use(Skeleton);
Vue.use(Divider);
// Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(List);
Vue.use(CountDown);
Vue.use(Sticky);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(TreeSelect);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Switch);

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(PullRefresh);
Vue.use(ActionSheet);
// Vue.use(Picker);
// 将所有 Toast 的展示时长设置为 1000 毫秒
Toast.setDefaultOptions({ duration: 1000 });

// 将所有 loading Toast 设置为背景不可点击
Toast.setDefaultOptions("loading", { forbidClick: true });
