/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import zhLocale from 'element-plus/lib/locale/lang/zh-cn';

const cn = {
  [zhLocale.name]: {
    el: zhLocale.el,
    about: {
      'line-2': '关于我们',
      'line-3': 'IotDB的可视化管理工具',
      'line-4': 'IotDB Admin是IotDB的可视化管理工具，可对IotDB的数据进行增删改查、权限控制等，简化IotDB的使用及学习成本。',
      'line-5': `在我们心中IotDB是最棒的时序数据库之一，我们将一直不遗余力地推动国产时序数据库IotDB的应用和发展，为本土开源能力的提高、开源生态的发展，贡献自己的力量，欢迎大家加入IotDB
      Admin的开发及维护，期待你的加入：`,
      'line-6-text': '微信扫一扫',
      'line-7': '版本号: V0.12',
      'back-btn': '返回工作页面',
    },
    common: {
      submit: '确定',
      cancel: '取消',
      detail: '查看',
      edit: '编辑',
      delete: '删除',
      operation: '操作',
      save: '保存',
      clear: '清空',
    },
    databasem: {
      newStoreGroup: '新建存储组',
      query: '查询',
      newDevice: '新建实体',
      newQuery: '新建查询',
    },
    rootPage: {
      chinalang: '中文',
      englishlang: '英文',
      loginoutText: '退出登录',
      about: '关于我们',
      help: '帮助手册',
      databaseManagement: '数据库管理',
      dataList: '数据列表',
      newdatasource: '新建数据连接',
      nodatasource: '目前还没有数据连接，请',
      newQueryWindow: '新建查询窗口',
    },
    loginPage: {
      account: '账号',
      password: '密码',
      placeholderAccount: '请输入账号',
      placeholderPassword: '请输入密码',
      forgetPassWord: '忘记密码',
      signIn: '登录',
      forgetPassword: '忘记密码',
      forgetPasswordTip: '请联系系统管理员',
      accountEmptyTip: '账号不能为空',
      accountContentTip: '用户名必须由字母、数字、下划线组成，不能以数字和下划线开始',
      accountLengthTip: '用户名必须大于等于3个字符，小于等于32字符',
      passwordEmptyTip: '密码不能为空',
      passwordLenghtTip: '密码必须大于等于6位，请检查密码位数',
      welcomeLogin: '欢迎登录IotDB数据库管理系统',
      loginErrorTip: '用户名或密码不正确，请重新输入',
    },

    sourcePage: {
      alias: '数据连接名称',
      host: 'IP地址',
      port: '端口',
      storageNum: '存储组数量',
      entityNum: '实体数量',
      physicalNum: '物理量数量',
      dataNum: '数据总量',
      username: '用户名',
      password: '密码',
      addDialogTitle: '新建数据连接',
      editDialogTitle: '编辑数据连接',
      eg: '示例:127.0.0.1',
      aliasEmptyTip: '请输入数据连接名称',
      hostEmptyTip: '请输入IP地址',
      hostErrorTip: '请正确填写IP地址',
      portErrorTip: '请正确填写端口号',
      portEmptyTip: '端口号不能为空',
      newUserEmptyTip: '请输入账号名称',
      newUserErrorTip: '请输入正确格式',
      newUserErrorTip1: '用户名必须大于等于4个字符，小于等于255字符',
      aliasErrorTip: '数据连接名称必须大于等于3个字符，小于等于100个字符',
      newpasswordErrorTip1: '密码必须大于等于4个字符，小于等于255字符',
      newPasswordTip: '请输入密码',
      usernameEmptyTip: '请输入数据连接用户名',
      passwordEmptyTip: '请输入数据源连接密码',
      userAccount: '用户账号',
      newAccount: '新增账号',
      baseConfig: '基本配置',
      accountPermit: '数据管理权限',
      permitPermission: '权限管理权限',
      permitTips: '注：勾选用户/角色的【查看】权限后，相关创建、删除、修改能权限才能生效',
      dataModel: '数据模型',
      accountPermitLabel: '账号权限',
      accountRole: '用户角色',
      userNameTitle: '账号',
      passwordTitle: '密码',
      checkedList: '已选角色',
      roleTitle: '账号角色',
      roleList: '角色列表',
      groupInfo: '存储组信息',
      groupName: '存储组名称',
      description: '描述',
      line: '实体数量',
      path: '数据粒度',
      range: '数据范围',
      func: '权限名称',
      selectPermissions: '选择权限',
      selectAlias: '数据连接',
      selectGroup: '存储组',
      selectDevice: '实体',
      selectTime: '物理量',
      createGroup: '创建存储组',
      createUser: '创建用户',
      deleteUser: '删除用户',
      editPassword: '修改密码',
      listUser: '查看用户',
      listRole: '查看角色',
      deleteRole: '删除角色',
      createRole: '创建角色',
      grantRolePrivilege: '赋予角色权限',
      revertRolePrivilege: '撤销角色权限',
      grantPrivilege: '赋予用户权限',
      revertPrivilege: '撤销用户权限',
      revokeUserRole: '撤销用户角色',
      grantUserRole: '赋予用户角色',
      createTimeSeries: '创建时间序列',
      insertTimeSeries: '插入数据',
      readTimeSeries: '查询数据',
      deleteTimeSeries: '删除数据或时间序列',
      createTrigger: '创建触发器',
      uninstallTrigger: '卸载触发器',
      startTrigger: '启动触发器',
      stopTrigger: '停止触发器',
      createFunction: '注册UDF',
      uninstallFunction: '卸载UDF',
      test: '测试连通性',
      testBtnLabel: '连接测试',
      testResult: '连接测试通过',
      noAuthTip: '您当前没有权限操作',
      successDeleteLabel: '删除连接成功',
      addAuthBtn: '添加权限',
      modifySuccessLabel: '修改用户密码成功',
      addSuccessLabel: '新建用户成功',
      editSuccessLabel: '编辑用户成功',
      deleteUserSuccessLabel: '删除用户成功',
      addFirstLabel: '请先完成当前新增账号的操作',
      deleteAuthLabel: '删除权限成功',
      operateAuthLabel: '操作权限成功',
      deleteGroupLabel: '删除存储组成功',
      newGroupSuccessLabel: '新增或编辑存储组成功',
      deleteAuthConfirm: '是否确定删除该权限?',
      deleteSourceConfirm: '是否确认删除该数据连接?',
      deleteUserConfirm: '是否确认删除该用户?',
      newSourceSuccessLabel: '新增或编辑数据连接成功',
      addAuthFirstLabel: '请先完成当前权限的添加',
      authTips: '勾选【查看用户】权限后，【创建用户】、【删除用户】、【修改密码】、【用户赋权】、【撤销赋权】才能在数据管理权限模块生效',
      submitRangeTips: '范围选项必选',
      submitTypeTips: '权限粒度选项必选',
      submitPrivilegesTips: '功能选项必选',
      groupNameLabel: '存储组:',
      deviceNameLabel: '实体:',
      timeNameLabel: '物理量:',
      ttlErrorTips: '存活时间只能为正整数',
      addRole: '添加角色',
      dataManagePrivilege: '数据管理权限',
      roleName: '角色名称',
      roleDescription: '角色描述',
      grantUserPrivilege: '赋予用户',
      addUser: '添加用户',
      inputRoleNameTip: '请输入4字以上的角色名称',
      inputRoleDescTip: '请输入角色描述',
      roleNameLengthError: '角色长度不够',
      roleNameExistError: '角色已存在',
      grantUser: '授权用户',
      userList: '用户列表',
      selectedUser: '已选用户',
      showMore: '查看更多',
      nextPage: '下一页',
      prePage: '上一页',
      successEditPermit: '修改权限管理权限成功',
    },
    storagePage: {
      alias: '数据连接',
      creator: '创建人',
      createTime: '创建时间:',
      ttl: '存活时间:',
      description: '存储组描述',
      deviceName: '实体名称:',
      newDevice: '新建实体',
      line: '物理量',
      operation: '操作',
      secondLabel: '秒',
      minuteLabel: '分',
      hourLabel: '小时',
      dayLabel: '天',
      weekLabel: '周',
      monthLabel: '月',
      yearLabel: '年',
      groupName: '存储组名称:',
      groupDescription: '存储组描述:',
      tips: '注:不填代表无限大',
      ttlErrTips: '存活时间和存活时间单位必须同时填写',
      groupNamePlaceholder: '请输入存储组名称，例如:factory.robotA',
      groupNameLengthTips: '存储组名称必须大于等于0个字符，小于等于255字符',
      descriptionLengthTips: '存储组描述长度大于等于0个字符，小于等于100字符',
      deleteGroupConfirm: '是否确认删除该存储组?',
      deleteDeviceConfirm: '你确定要删除该实体吗?删除后,该实体的数据会丢失,不可恢复。',
    },
    device: {
      serchPy: '请输入物理量名称',
      dataconnection: '数据连接',
      selectdataconnection: '请选择存储组',
      selectdataconnections: '请选择数据连接',
      devicename: '实体名称',
      description: '实体描述',
      selectp: '请选择实体',
      group: '所属存储组',
      physical: '实体物理量',
      addphysical: '添加物理量',
      delete: '删除',
      creator: '创建人',
      createTime: '创建时间',
      newValue: '最新值',
      deletecontent1: '您确定要删除',
      deletecontent2: '删除后，该数据将会丢失，不可恢复',
      cencel: '取消',
      ok: '确定',
      physicalname: '物理量名称',
      datatype: '数据类型',
      codingmode: '编码方式',
      physicaldescr: '物理量描述',
      action: '操作',
      datatrends: '数据趋势',
      datatrend: '物理量数据趋势',
      time: '时间',
      look: '查看',
      inputdevice: '请输入实体名称',
      inputdecr: '请输入实体描述',
      pyname: '物理量必须由字⺟、数字、下划线组成',
      pynamel: '物理量必须⼤于0⼤字符，⼩于255个字符',
      pynamecopy: '物理量重名，请修改',
      deletetitle: '删除成功',
      canceldeletion: '取消删除',
      addpydataa: '最多添加2000条数据',
      tips: '提示',
      pleaseinput: '请填写物理量名称',
      selectdata: '物理量必须选择数据类型',
      savesuccess: '保存成功',
      minphysical: '物理量不能为0',
      must: '数据格式填写错误',
      newquery: '新建查询',
      inputfunction: '请输入函数名称',
      deleteSuccess: '删除成功',
      selectdatatype: '请选择数据类型',
    },
    sqlserch: {
      Aggregate: '聚合函数',
      math: '数学函数',
      string: '字符串函数',
      select: '选择函数',
      sum: '趋势计算函数',
      date: '时间函数',
      count: '统计时间序列的个数',
      avg: '时间序列数据的平均值',
      sum1: '时间序列数据的和',
      fristvalue: '首次插入的数据值',
      lastvalue: '最新一次插入的数据值',
      minvalue: '最小的数据值',
      maxvalue: '最大的数据值',
      mintime: '最小的时间戳',
      maxtime: '最大的时间戳',
      sin: '正弦函数',
      cos: '余弦函数',
      tan: '正切函数',
      asin: '反正弦函数',
      acos: '反余弦函数',
      atan: '反正切函数',
      degress: '转角度',
      randians: '转弧度',
      sing: '符号函数',
      ceil: '向上取整',
      floor: '向下取整',
      round: '四舍五入',
      exp: '以e为底的指数',
      ln: '以e为底的对数',
      log10: '以10为底的对数',
      sqrt: '求平方根',
      abs: '求绝对值',
      string_cont: '用于判断字符串中是否存在字符串s',
      string_mat: '用于判断字符串是否能够被正则表达式regex匹配',
      tok: '返回某时间序列中值最大的k个数据点',
      bottomk: '返回某时间序列中值最小的k个数据点',
      time_d: '统计序列中某数据点的时间戳与前一数据点时间戳的差',
      diff: '统计序列中某数据点的值与前一数据点的值的差',
      non: '统计序列中某数据点的值与前一数据点的值的差的绝对值',
      deriv: '统计序列中某数据点相对于前一数据点的变化率',
      non_n: '统计序列中某数据点相对于前一数据点的变化率的绝对值',
      now: '表示当前时间',
      save: '保存',
      run: '运行',
      stop: '暂停',
      sqlserchText: '执行成功,该查询语句无数据返回',
      sqlrun: '查询正在运行中，请勿重复操作',
    },
    standTable: {
      export: '批量导出',
      running: '运行结果',
      download: '下载',
      maxdownload: '最多下载10万条数据',
      serchtime: '查询时间',
      queryline: '查询行数',
      function: '函数',
      data: '数据',
      savequery: '保存查询',
      queryname: '查询名称',
      deleteArry: '批量删除',
    },
  },
};

export default cn;
