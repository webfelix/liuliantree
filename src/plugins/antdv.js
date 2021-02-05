/*
 * @Description:antd组件引入
 * @Date: 2021-02-04 13:30:48
 */

import { Layout } from 'ant-design-vue';
import { Menu } from 'ant-design-vue';
import { Spin } from 'ant-design-vue';
import { Button } from 'ant-design-vue';
import { Input } from 'ant-design-vue';
import { Checkbox } from 'ant-design-vue';
import { Radio } from 'ant-design-vue';
import { Table } from 'ant-design-vue';
import { Modal } from 'ant-design-vue';
import { Pagination } from 'ant-design-vue';
import { Upload } from 'ant-design-vue';
import { Divider } from 'ant-design-vue';
import { Popconfirm } from 'ant-design-vue';
import { Icon } from 'ant-design-vue';
import { Tooltip } from 'ant-design-vue';
import { Cascader } from 'ant-design-vue';
import { Select } from 'ant-design-vue';
import { message } from 'ant-design-vue';
import { Col } from 'ant-design-vue';
import { Row } from 'ant-design-vue';
import { Switch } from 'ant-design-vue';
import { InputNumber } from 'ant-design-vue';
import { Tree } from 'ant-design-vue';
import { Form } from 'ant-design-vue';
import { FormModel } from 'ant-design-vue';
import { ConfigProvider } from 'ant-design-vue';
import { Anchor } from 'ant-design-vue';
import { Tabs } from 'ant-design-vue';
import { DatePicker } from 'ant-design-vue';
import { Avatar } from 'ant-design-vue';
import { Breadcrumb } from 'ant-design-vue';
import { Transfer } from 'ant-design-vue';
import { Dropdown } from 'ant-design-vue';
import { TreeSelect } from 'ant-design-vue';
import { Tag } from 'ant-design-vue';
import { Statistic } from 'ant-design-vue';

import { Descriptions } from 'ant-design-vue';

import { Progress } from 'ant-design-vue';
import { Drawer } from 'ant-design-vue';
import { Steps } from 'ant-design-vue';
const { RangePicker } = DatePicker;

// 设置DatePicker日期控件中文显示
import moment from 'moment';
import 'moment/locale/zh-cn';

export default {
    install(Vue, options) {
        Vue.use(Layout);
        Vue.use(Menu);
        Vue.use(Spin);
        Vue.use(Button);
        Vue.use(Input);
        Vue.use(InputNumber);
        Vue.use(Checkbox);
        Vue.use(Radio);
        Vue.use(Table);
        Vue.use(Modal);
        Vue.use(Pagination);
        Vue.use(Upload);
        Vue.use(Divider);
        Vue.use(Popconfirm);
        Vue.use(Icon);
        Vue.use(Tooltip);
        Vue.use(Cascader);
        Vue.use(Select);
        Vue.use(message);
        Vue.use(Tree);
        Vue.use(Form);
        Vue.use(FormModel);
        Vue.use(ConfigProvider);
        Vue.use(Anchor);
        Vue.use(Tabs);
        Vue.use(DatePicker);
        Vue.use(RangePicker);
        Vue.use(Col);
        Vue.use(Row);
        Vue.use(Avatar);
        Vue.use(Breadcrumb);
        Vue.use(Switch);
        Vue.use(Descriptions);
        Vue.use(Transfer);
        Vue.use(Dropdown);
        Vue.use(Progress);
        Vue.use(Drawer);
        Vue.use(Steps);
        Vue.use(TreeSelect);
        Vue.use(Tag);
        Vue.use(Statistic);
        // Vue.use(RangePicker)
        moment.locale('zh-cn');
    }
};

export const antdMessage = message;
export const antdConfirm = Modal.confirm;
