import Vue from 'vue'
import {
 Form, FormItem, Input, Button, Message, Container, Header, Aside, Main, Submenu, MenuItem,
  Menu, MenuItemGroup, Breadcrumb, BreadcrumbItem, Card, Row, Col, Table, TableColumn, Switch,
  tooltip, Pagination, Dialog, MessageBox, Select, Option, Tag
} from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tag)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
