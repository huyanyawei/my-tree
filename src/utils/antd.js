import Vue from "vue";
import {
  ConfigProvider,
  message,
  notification,
  Modal,
  Spin,
  Button,
  Input,
  Pagination,
  DatePicker,
  Select,
  TreeSelect,
  Upload,
  Radio,
  Checkbox,
  Dropdown,
  Menu,
  Form,
  Card,
  Tree,
  Drawer,
  Tabs,
  Popover,
  Progress,
  Icon,
  Tooltip,
  Layout,
  Switch,
  FormModel,
  Cascader,
  Table,
  Alert,
  Popconfirm,
  Col,
  Row
} from "ant-design-vue";
// import 'ant-design-vue/dist/antd.less';
// tslint:disable-next-line
export const zhCN = require("ant-design-vue/lib/locale-provider/zh_CN.js")
  .default;
export const $message = message;
export const $confirm = Modal.confirm;
export const $error = Modal.error;
export const $warning = Modal.warning;
export const $notification = notification;
export const $Modal = Modal;

export default {
  install(vue) {
    vue.prototype.$message = message;
    vue.prototype.$notification = notification;
    vue.prototype.$info = Modal.info;
    vue.prototype.$success = Modal.success;
    vue.prototype.$error = Modal.error;
    vue.prototype.$warning = Modal.warning;
    vue.prototype.$confirm = Modal.confirm;

    Vue.use(Modal);
    Vue.component(Col.name, Col);
    Vue.component(Popconfirm.name, Popconfirm);
    vue.component(Alert.name, Alert);
    Vue.component(Table.name, Table);
    Vue.component(Switch.name, Switch),
      Vue.component(FormModel.name, FormModel);
    Vue.component(Cascader.name, Cascader);
    Vue.component(Row.name, Row);

    Vue.component(Layout.name, Layout);
    Vue.component(Layout.Sider.name, Layout);
    Vue.component(Layout.Content.name, Layout);
    // vue.component(Modal.name, Modal);
    vue.component(Button.name, Button);
    vue.component(Spin.name, Spin);
    vue.component(Input.name, Input);
    Vue.component(Input.TextArea.name, Input.TextArea);
    Vue.component(Input.Search.name, Input.Search);
    Vue.component(Pagination.name, Pagination);
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
    Vue.component(Select.name, Select);
    Vue.component(Select.Option.name, Select.Option);
    Vue.component(TreeSelect.name, TreeSelect);
    Vue.component(Upload.name, Upload);
    Vue.component(Radio.name, Radio);
    Vue.component(Radio.Group.name, Radio.Group);
    Vue.component(Radio.Button.name, Radio.Button);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(Checkbox.Group.name, Checkbox.Group);
    Vue.component(Dropdown.name, Dropdown);
    Vue.component(Dropdown.Button.name, Dropdown.Button);
    Vue.component(Menu.name, Menu);
    Vue.component(Menu.Item.name, Menu.Item);
    Vue.component(Menu.SubMenu.name, Menu.SubMenu);
    Vue.component(Form.name, Form);
    Vue.component(Form.Item.name, Form.Item);
    Vue.component(Card.name, Card);
    Vue.component(Tree.name, Tree);
    Vue.component(Drawer.name, Drawer);
    Vue.component(Tabs.name, Tabs);
    Vue.component(Tabs.TabPane.name, Tabs.TabPane);
    Vue.component(Popover.name, Popover);
    Vue.component(ConfigProvider.name, ConfigProvider);
    Vue.component(Progress.name, Progress);
    Vue.component(Icon.name, Icon);
    Vue.component(Tooltip.name, Tooltip);
  }
};
