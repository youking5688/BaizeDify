const translation = {
  api: {
    success: 'Sucesso',
    actionSuccess: 'Ação bem-sucedida',
    saved: 'Salvo',
    create: 'Criado',
    remove: 'Removido',
  },
  operation: {
    create: 'Criar',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    clear: 'Limpar',
    save: 'Salvar',
    edit: 'Editar',
    add: 'Adicionar',
    added: 'Adicionado',
    refresh: 'Reiniciar',
    reset: 'Redefinir',
    search: 'Buscar',
    change: 'Alterar',
    remove: 'Remover',
    send: 'Enviar',
    copy: 'Copiar',
    lineBreak: 'Quebra de linha',
    sure: 'Tenho certeza',
    download: 'Baixar',
    delete: 'Excluir',
    settings: 'Configurações',
    setup: 'Configuração',
    getForFree: 'Obter gratuitamente',
    reload: 'Recarregar',
    ok: 'OK',
    log: 'Log',
    learnMore: 'Saiba Mais',
    params: 'Parâmetros',
    duplicate: 'Duplicada',
    rename: 'Renomear',
  },
  placeholder: {
    input: 'Por favor, insira',
    select: 'Por favor, selecione',
  },
  voice: {
    language: {
      zhHans: 'Chinês',
      zhHant: 'Chinês Tradicional',
      enUS: 'Inglês',
      deDE: 'Alemão',
      frFR: 'Francês',
      esES: 'Espanhol',
      itIT: 'Italiano',
      thTH: 'Tailandês',
      idID: 'Indonésio',
      jaJP: 'Japonês',
      koKR: 'Coreano',
      ptBR: 'Português',
      ruRU: 'Russo',
      ukUA: 'Ucraniano',
      viVN: 'Vietnamita',
    },
  },
  unit: {
    char: 'caracteres',
  },
  actionMsg: {
    noModification: 'Sem modificações no momento.',
    modifiedSuccessfully: 'Modificado com sucesso',
    modifiedUnsuccessfully: 'Modificado sem sucesso',
    copySuccessfully: 'Copiado com sucesso',
    paySucceeded: 'Pagamento realizado com sucesso',
    payCancelled: 'Pagamento cancelado',
    generatedSuccessfully: 'Gerado com sucesso',
    generatedUnsuccessfully: 'Geração sem sucesso',
  },
  model: {
    params: {
      temperature: 'Temperatura',
      temperatureTip:
        'Controla a aleatoriedade: Diminuir resulta em conclusões menos aleatórias. À medida que a temperatura se aproxima de zero, o modelo se tornará determinístico e repetitivo.',
      top_p: 'Top P',
      top_pTip:
        'Controla a diversidade via amostragem de núcleo: 0.5 significa que metade de todas as opções ponderadas por probabilidade são consideradas.',
      presence_penalty: 'Penalidade de presença',
      presence_penaltyTip:
        'Quanto penalizar novos tokens com base em se eles aparecem no texto até agora.\nAumenta a probabilidade do modelo de falar sobre novos tópicos.',
      frequency_penalty: 'Penalidade de frequência',
      frequency_penaltyTip:
        'Quanto penalizar novos tokens com base em sua frequência existente no texto até agora.\nDiminui a probabilidade do modelo de repetir a mesma linha textualmente.',
      max_tokens: 'Máximo de tokens',
      max_tokensTip:
        'Usado para limitar o comprimento máximo da resposta, em tokens. \nValores maiores podem limitar o espaço restante para palavras de prompt, registros de bate-papo e Conhecimento. \nRecomenda-se defini-lo abaixo de dois terços\ngpt-4-1106-preview, gpt-4-vision-preview max token (entrada 128k saída 4k)',
      maxTokenSettingTip: 'Sua configuração máxima de token é alta, limitando potencialmente o espaço para palavras de prompt, consultas e dados. Considere definir abaixo de 2/3.',
      setToCurrentModelMaxTokenTip: 'O máximo de tokens é atualizado para 80% do máximo de token do modelo atual {{maxToken}}.',
      stop_sequences: 'Sequências de parada',
      stop_sequencesTip: 'Até quatro sequências onde a API irá parar de gerar mais tokens. O texto retornado não conterá a sequência de parada.',
      stop_sequencesPlaceholder: 'Digite a sequência e pressione Tab',
    },
    tone: {
      Creative: 'Criativo',
      Balanced: 'Equilibrado',
      Precise: 'Preciso',
      Custom: 'Personalizado',
    },
    addMoreModel: 'Vá para configurações para adicionar mais modelos',
  },
  menus: {
    status: 'beta',
    explore: 'Explorar',
    apps: 'Estúdio',
    plugins: 'Plugins',
    pluginsTips: 'Integre plugins de terceiros ou crie plugins de IA compatíveis com o ChatGPT.',
    datasets: 'Conhecimento',
    datasetsTips: 'EM BREVE: Importe seus próprios dados de texto ou escreva dados em tempo real via Webhook para aprimoramento do contexto LLM.',
    newApp: 'Novo App',
    newDataset: 'Criar Conhecimento',
    tools: 'Ferramentas',
  },
  userProfile: {
    settings: 'Configurações',
    workspace: 'Espaço de trabalho',
    createWorkspace: 'Criar Espaço de Trabalho',
    helpCenter: 'Ajuda',
    roadmapAndFeedback: 'Feedback',
    community: 'Comunidade',
    about: 'Sobre',
    logout: 'Sair',
  },
  settings: {
    accountGroup: 'CONTA',
    workplaceGroup: 'ESPAÇO DE TRABALHO',
    account: 'Minha conta',
    members: 'Membros',
    billing: 'Faturamento',
    integrations: 'Integrações',
    language: 'Idioma',
    provider: 'Fornecedor de modelo',
    dataSource: 'Fonte de dados',
    plugin: 'Plugins',
    apiBasedExtension: 'Extensão baseada em API',
  },
  account: {
    avatar: 'Avatar',
    name: 'Nome',
    email: 'E-mail',
    password: 'Senha',
    passwordTip: 'Você pode definir uma senha permanente se não quiser usar códigos de login temporários',
    setPassword: 'Definir uma senha',
    resetPassword: 'Redefinir senha',
    currentPassword: 'Senha atual',
    newPassword: 'Nova senha',
    confirmPassword: 'Confirmar senha',
    notEqual: 'As duas senhas são diferentes.',
    langGeniusAccount: 'Conta Dify',
    langGeniusAccountTip: 'Sua conta Dify e dados de usuário associados.',
    editName: 'Editar Nome',
    showAppLength: 'Mostrar {{length}} apps',
  },
  members: {
    team: 'Equipe',
    invite: 'Adicionar',
    name: 'NOME',
    lastActive: 'ÚLTIMA ATIVIDADE',
    role: 'FUNÇÕES',
    pending: 'Pendente...',
    owner: 'Proprietário',
    admin: 'Admin',
    adminTip: 'Pode criar aplicativos e gerenciar configurações da equipe',
    normal: 'Normal',
    normalTip: 'Só pode usar aplicativos, não pode criar aplicativos',
    inviteTeamMember: 'Adicionar membro da equipe',
    inviteTeamMemberTip: 'Eles podem acessar os dados da sua equipe diretamente após fazer login.',
    email: 'E-mail',
    emailInvalid: 'Formato de e-mail inválido',
    emailPlaceholder: 'Por favor, insira e-mails',
    sendInvite: 'Enviar Convite',
    invitedAsRole: 'Convidado como usuário {{role}}',
    invitationSent: 'Convite enviado',
    invitationSentTip: 'Convite enviado e eles podem fazer login no Dify para acessar os dados da sua equipe.',
    invitationLink: 'Link do Convite',
    failedinvitationEmails: 'Os seguintes usuários não foram convidados com sucesso',
    ok: 'OK',
    removeFromTeam: 'Remover da equipe',
    removeFromTeamTip: 'Removerá o acesso da equipe',
    setAdmin: 'Definir como administrador',
    setMember: 'Definir como membro comum',
    disinvite: 'Cancelar o convite',
    deleteMember: 'Excluir Membro',
    you: '(Você)',
  },
  integrations: {
    connected: 'Conectado',
    google: 'Google',
    googleAccount: 'Faça login com a conta do Google',
    github: 'GitHub',
    githubAccount: 'Faça login com a conta do GitHub',
    connect: 'Conectar',
  },
  language: {
    displayLanguage: 'Idioma de exibição',
    timezone: 'Fuso horário',
  },
  provider: {
    apiKey: 'Chave da API',
    enterYourKey: 'Insira sua chave da API aqui',
    invalidKey: 'Chave da API OpenAI inválida',
    validatedError: 'Falha na validação: ',
    validating: 'Validando chave...',
    saveFailed: 'Falha ao salvar a chave da API',
    apiKeyExceedBill: 'Esta CHAVE DE API não tem quota disponível, por favor, leia',
    addKey: 'Adicionar Chave',
    comingSoon: 'Em breve',
    editKey: 'Editar',
    invalidApiKey: 'Chave da API inválida',
    azure: {
      apiBase: 'Base da API',
      apiBasePlaceholder: 'A URL base da API do seu ponto de extremidade Azure OpenAI.',
      apiKey: 'Chave da API',
      apiKeyPlaceholder: 'Insira sua chave da API aqui',
      helpTip: 'Saiba mais sobre o Serviço Azure OpenAI',
    },
    openaiHosted: {
      openaiHosted: 'OpenAI Hospedado',
      onTrial: 'EM TESTE',
      exhausted: 'COTA ESGOTADA',
      desc: 'O serviço de hospedagem OpenAI fornecido pela BaizeAI permite que você use modelos como o GPT-3.5. Antes que sua cota de teste seja esgotada, você precisa configurar outros provedores de modelo.',
      callTimes: 'Número de chamadas',
      usedUp: 'Cota de teste esgotada. Adicione seu próprio provedor de modelo.',
      useYourModel: 'Atualmente usando seu próprio provedor de modelo.',
      close: 'Fechar',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'EM TESTE',
      exhausted: 'COTA ESGOTADA',
      desc: 'Modelo poderoso, que se destaca em uma ampla gama de tarefas, desde diálogos sofisticados e geração de conteúdo criativo até instruções detalhadas.',
      callTimes: 'Chamadas',
      usedUp: 'Cota de teste esgotada. Adicione seu próprio Fornecedor de Modelo.',
      useYourModel: 'Atualmente usando seu próprio Fornecedor de Modelo.',
      close: 'Fechar',
    },
    anthropic: {
      using: 'A capacidade de incorporação está sendo utilizada',
      enableTip: 'Para habilitar o modelo da Anthropic, você precisa vincular ao OpenAI ou ao Azure OpenAI Service primeiro.',
      notEnabled: 'Não habilitado',
      keyFrom: 'Obtenha sua chave da API da Anthropic',
    },
    encrypted: {
      front: 'Sua CHAVE DA API será criptografada e armazenada usando',
      back: ' tecnologia.',
    },
  },
  modelProvider: {
    notConfigured: 'O modelo do sistema ainda não foi totalmente configurado e algumas funções podem estar indisponíveis.',
    systemModelSettings: 'Configurações do Modelo do Sistema',
    systemModelSettingsLink: 'Por que é necessário configurar um modelo do sistema?',
    selectModel: 'Selecione seu modelo',
    setupModelFirst: 'Por favor, configure seu modelo primeiro',
    systemReasoningModel: {
      key: 'Modelo de Raciocínio do Sistema',
      tip: 'Defina o modelo de inferência padrão a ser usado para criar aplicativos, bem como recursos como geração de nomes de diálogo e sugestão de próxima pergunta também usarão o modelo de inferência padrão.',
    },
    embeddingModel: {
      key: 'Modelo de Incorporação',
      tip: 'Defina o modelo padrão para o processamento de incorporação de documentos do Conhecimento, tanto a recuperação quanto a importação do Conhecimento usam este modelo de Incorporação para processamento de vetorização. Alterar causará inconsistência na dimensão do vetor entre o Conhecimento importado e a pergunta, resultando em falha na recuperação. Para evitar falhas na recuperação, não altere este modelo indiscriminadamente.',
      required: 'O modelo de Incorporação é obrigatório',
    },
    speechToTextModel: {
      key: 'Modelo de Fala para Texto',
      tip: 'Defina o modelo padrão para entrada de fala para texto na conversa.',
    },
    ttsModel: {
      key: 'Modelo de Texto para Fala',
      tip: 'Defina o modelo padrão para entrada de texto para fala na conversa.',
    },
    rerankModel: {
      key: 'Modelo de Reordenação',
      tip: 'O modelo de reordenaenação reorganizará a lista de documentos candidatos com base na correspondência semântica com a consulta do usuário, melhorando os resultados da classificação semântica',
    },
    quota: 'Quota',
    searchModel: 'Modelo de pesquisa',
    noModelFound: 'Nenhum modelo encontrado para {{model}}',
    models: 'Modelos',
    showMoreModelProvider: 'Mostrar mais provedor de modelo',
    selector: {
      tip: 'Este modelo foi removido. Adicione um modelo ou selecione outro modelo.',
      emptyTip: 'Nenhum modelo disponível',
      emptySetting: 'Por favor, vá para configurações para configurar',
      rerankTip: 'Por favor, configure o modelo de reordenação',
    },
    card: {
      quota: 'QUOTA',
      onTrial: 'Em Teste',
      paid: 'Pago',
      quotaExhausted: 'Quota esgotada',
      callTimes: 'Chamadas',
      tokens: 'Tokens',
      buyQuota: 'Comprar Quota',
      priorityUse: 'Uso prioritário',
      removeKey: 'Remover Chave da API',
      tip: 'A prioridade será dada à quota paga. A quota de teste será usada após a quota paga ser esgotada.',
    },
    item: {
      deleteDesc: '{{modelName}} está sendo usado como modelos de raciocínio do sistema. Algumas funções não estarão disponíveis após a remoção. Por favor, confirme.',
      freeQuota: 'QUOTA GRATUITA',
    },
    addApiKey: 'Adicionar sua chave da API',
    invalidApiKey: 'Chave da API inválida',
    encrypted: {
      front: 'Sua CHAVE DA API será criptografada e armazenada usando',
      back: ' tecnologia.',
    },
    freeQuota: {
      howToEarn: 'Como ganhar',
    },
    addMoreModelProvider: 'ADICIONAR MAIS FORNECEDOR DE MODELO',
    addModel: 'Adicionar Modelo',
    modelsNum: '{{num}} Modelos',
    showModels: 'Mostrar Modelos',
    showModelsNum: 'Mostrar {{num}} Modelos',
    collapse: 'Recolher',
    config: 'Configuração',
    modelAndParameters: 'Modelo e Parâmetros',
    model: 'Modelo',
    featureSupported: '{{feature}} suportado',
    callTimes: 'Chamadas',
    credits: 'Créditos de Mensagem',
    buyQuota: 'Comprar Quota',
    getFreeTokens: 'Obter Tokens Gratuitos',
    priorityUsing: 'Uso prioritário',
    deprecated: 'Obsoleto',
    confirmDelete: 'confirmar exclusão?',
    quotaTip: 'Tokens gratuitos disponíveis restantes',
    loadPresets: 'Carregar Predefinições',
    parameters: 'PARÂMETROS',
  },
  dataSource: {
    add: 'Adicionar uma fonte de dados',
    connect: 'Conectar',
    notion: {
      title: 'Notion',
      description: 'Usando o Notion como fonte de dados para o Conhecimento.',
      connectedWorkspace: 'Espaço de trabalho conectado',
      addWorkspace: 'Adicionar espaço de trabalho',
      connected: 'Conectado',
      disconnected: 'Desconectado',
      changeAuthorizedPages: 'Alterar páginas autorizadas',
      pagesAuthorized: 'Páginas autorizadas',
      sync: 'Sincronizar',
      remove: 'Remover',
      selector: {
        pageSelected: 'Páginas Selecionadas',
        searchPages: 'Pesquisar páginas...',
        noSearchResult: 'Nenhum resultado de pesquisa',
        addPages: 'Adicionar páginas',
        preview: 'PRÉ-VISUALIZAÇÃO',
      },
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'Chave da API',
      apiKeyPlaceholder: 'Insira sua chave da API',
      keyFrom: 'Obtenha sua chave da SerpAPI na página da conta da SerpAPI',
    },
  },
  apiBasedExtension: {
    title: 'As extensões de API fornecem gerenciamento centralizado de API, simplificando a configuração para uso fácil em todos os aplicativos da Dify.',
    link: 'Saiba como desenvolver sua própria Extensão de API.',
    linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
    add: 'Adicionar Extensão de API',
    selector: {
      title: 'Extensão de API',
      placeholder: 'Por favor, selecione a extensão de API',
      manage: 'Gerenciar Extensão de API',
    },
    modal: {
      title: 'Adicionar Extensão de API',
      editTitle: 'Editar Extensão de API',
      name: {
        title: 'Nome',
        placeholder: 'Por favor, insira o nome',
      },
      apiEndpoint: {
        title: 'Endpoint da API',
        placeholder: 'Por favor, insira o endpoint da API',
      },
      apiKey: {
        title: 'Chave da API',
        placeholder: 'Por favor, insira a chave da API',
        lengthError: 'O comprimento da chave da API não pode ser inferior a 5 caracteres',
      },
    },
    type: 'Tipo',
  },
  about: {
    changeLog: 'Registro de Alterações',
    updateNow: 'Atualizar agora',
    nowAvailable: 'Dify {{version}} já está disponível.',
    latestAvailable: 'Dify {{version}} é a última versão disponível.',
  },
  appMenus: {
    overview: 'Visão Geral',
    promptEng: 'Orquestrar',
    apiAccess: 'Acesso à API',
    logAndAnn: 'Logs e Anúncios',
    logs: 'Logs',
  },
  environment: {
    testing: 'TESTE',
    development: 'DESENVOLVIMENTO',
  },
  appModes: {
    completionApp: 'Gerador de Texto',
    chatApp: 'Aplicativo de Bate-papo',
  },
  datasetMenus: {
    documents: 'Documentos',
    hitTesting: 'Teste de Recuperação',
    settings: 'Configurações',
    emptyTip: 'O Conhecimento não foi associado, por favor, vá para o aplicativo ou plug-in para completar a associação.',
    viewDoc: 'Ver documentação',
    relatedApp: 'aplicativos relacionados',
  },
  voiceInput: {
    speaking: 'Fale agora...',
    converting: 'Convertendo para texto...',
    notAllow: 'microfone não autorizado',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Texto-Davinci-003',
    'text-embedding-ada-002': 'Texto-Embutimento-Ada-002',
    'whisper-1': 'Sussurro-1',
    'claude-instant-1': 'Claude-Instantâneo',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Renomear Conversa',
    conversationName: 'Nome da conversa',
    conversationNamePlaceholder: 'Por favor, insira o nome da conversa',
    conversationNameCanNotEmpty: 'Nome da conversa obrigatório',
    citation: {
      title: 'CITAÇÕES',
      linkToDataset: 'Link para Conhecimento',
      characters: 'Personagens:',
      hitCount: 'Contagem de recuperação:',
      vectorHash: 'Hash de vetor:',
      hitScore: 'Pontuação de recuperação:',
    },
  },
  promptEditor: {
    placeholder: 'Escreva sua palavra de incentivo aqui, digite \'{\' para inserir uma variável, digite \'/\' para inserir um bloco de conteúdo de incentivo',
    context: {
      item: {
        title: 'Contexto',
        desc: 'Inserir modelo de contexto',
      },
      modal: {
        title: '{{num}} Conhecimentos no Contexto',
        add: 'Adicionar Contexto',
        footer: 'Você pode gerenciar contextos na seção Contexto abaixo.',
      },
    },
    history: {
      item: {
        title: 'Histórico de Conversas',
        desc: 'Inserir modelo de mensagem histórica',
      },
      modal: {
        title: 'EXEMPLO',
        user: 'Olá',
        assistant: 'Olá! Como posso ajudar hoje?',
        edit: 'Editar Nomes de Função da Conversa',
      },
    },
    variable: {
      item: {
        title: 'Variáveis e Ferramentas Externas',
        desc: 'Inserir Variáveis e Ferramentas Externas',
      },
      outputToolDisabledItem: {
        title: 'Variáveis',
        desc: 'Inserir variáveis',
      },
      modal: {
        add: 'Nova variável',
        addTool: 'Nova ferramenta',
      },
    },
    query: {
      item: {
        title: 'Consulta',
        desc: 'Inserir modelo de consulta do usuário',
      },
    },
    existed: 'Já existe no incentivo',
  },
  imageUploader: {
    uploadFromComputer: 'Enviar do Computador',
    uploadFromComputerReadError: 'Falha ao ler a imagem, por favor, tente novamente.',
    uploadFromComputerUploadError: 'Falha ao enviar a imagem, por favor, envie novamente.',
    uploadFromComputerLimit: 'As imagens enviadas não podem exceder {{size}} MB',
    pasteImageLink: 'Colar link da imagem',
    pasteImageLinkInputPlaceholder: 'Cole o link da imagem aqui',
    pasteImageLinkInvalid: 'Link da imagem inválido',
    imageUpload: 'Enviar Imagem',
  },
  tag: {
    placeholder: 'Todas as tags',
    addNew: 'Adicionar nova tag',
    noTag: 'Sem tags',
    noTagYet: 'Nenhuma tag ainda',
    addTag: 'adicionar etiqueta',
    editTag: 'Editar tags',
    manageTags: 'Gerenciar tags',
    selectorPlaceholder: 'Digite para pesquisar ou criar',
    create: 'Criar',
    delete: 'Excluir etiqueta',
    deleteTip: 'A tag está sendo usada, excluí-la?',
    created: 'Tag criada com sucesso',
    failed: 'Falha na criação da tag',
  },
}

export default translation
