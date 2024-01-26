const translation = {
  title: '工具',
  createCustomTool: '创建自定义工具',
  type: {
    all: '全部',
    builtIn: '内置',
    custom: '自定义',
  },
  contribute: {
    line1: '我有兴趣为 ',
    line2: 'BaizeAI 贡献工具。',
    viewGuide: '查看指南',
  },
  author: '作者',
  auth: {
    unauthorized: '去授权',
    authorized: '已授权',
    setup: '要使用请先授权',
    setupModalTitle: '设置授权',
    setupModalTitleDescription: '配置凭据后，工作区中的所有成员都可以在编排应用程序时使用此工具。',
  },
  includeToolNum: '包含 {{num}} 个工具',
  addTool: '添加工具',
  createTool: {
    title: '创建自定义工具',
    editAction: '编辑',
    editTitle: '编辑自定义工具',
    name: '名称',
    toolNamePlaceHolder: '输入工具名称',
    schema: 'Schema',
    schemaPlaceHolder: '在此处输入您的 OpenAPI schema',
    viewSchemaSpec: '查看 OpenAPI-Swagger 规范',
    importFromUrl: '从 URL 中导入',
    importFromUrlPlaceHolder: 'https://...',
    urlError: '请输入有效的 URL',
    examples: '例子',
    exampleOptions: {
      json: '天气(JSON)',
      yaml: '宠物商店(YAML)',
      blankTemplate: '空白模版',
    },
    availableTools: {
      title: '可用工具',
      name: '名称',
      description: '描述',
      method: '方法',
      path: '路径',
      action: '操作',
      test: '测试',
    },
    authMethod: {
      title: '鉴权方法',
      type: '鉴权类型',
      types: {
        none: '无',
        api_key: 'API Key',
      },
      key: '键',
      value: '值',
    },
    privacyPolicy: '隐私协议',
    privacyPolicyPlaceholder: '请输入隐私协议',
  },
  thought: {
    using: '正在使用',
    used: '已使用',
    requestTitle: '请求来自',
    responseTitle: '响应来自',
  },
  setBuiltInTools: {
    info: '信息',
    setting: '设置',
    toolDescription: '工具描述',
    parameters: '参数',
    string: '字符串',
    number: '数字',
    required: '必填',
    infoAndSetting: '信息和设置',
  },
  noCustomTool: {
    title: '没有自定义工具!',
    content: '在此统一添加和管理你的自定义工具，方便构建应用时使用。',
    createTool: '创建工具',
  },
  noSearchRes: {
    title: '抱歉，没有结果！',
    content: '我们找不到任何与您的搜索相匹配的工具。',
    reset: '重置搜索',
  },
  builtInPromptTitle: '提示词',
  toolRemoved: '工具已被移除',
  notAuthorized: '工具未授权',
}

export default translation
