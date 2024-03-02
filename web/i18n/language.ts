export type Item = {
  value: number | string
  name: string
  example: string
}

export type I18nText = {
  'en-US': string
  'zh-Hans': string
  'pt-BR': string
  'es-ES': string
  'fr-FR': string
  'de-DE': string
  'ja-JP': string
  'ko-KR': string
  'ru-RU': string
  'it-IT': string
  'uk-UA': string
}

export const languages = [
  {
    value: 'en-US',
    name: 'English(United States)',
    example: 'Hello, BaizeAI!',
    supported: true,
  },
  {
    value: 'zh-Hans',
    name: '简体中文',
    example: '你好，白泽AI！',
    supported: true,
  },
  {
    value: 'pt-BR',
    name: 'Português(Brasil)',
    example: 'Olá, BaizeAI!',
    supported: true,
  },
  {
    value: 'es-ES',
    name: 'Español(España)',
    example: 'Saluton, BaizeAI!',
    supported: false,
  },
  {
    value: 'fr-FR',
    name: 'Français(France)',
    example: 'Bonjour, BaizeAI!',
    supported: false,
  },
  {
    value: 'de-DE',
    name: 'Deutsch(Deutschland)',
    example: 'Hallo, BaizeAI!',
    supported: false,
  },
  {
    value: 'ja-JP',
    name: '日本語(日本)',
    example: 'こんにちは、BaizeAI!',
    supported: false,
  },
  {
    value: 'ko-KR',
    name: '한국어(대한민국)',
    example: '안녕, BaizeAI!',
    supported: false,
  },
  {
    value: 'ru-RU',
    name: 'Русский(Россия)',
    example: ' Привет, BaizeAI!',
    supported: false,
  },
  {
    value: 'it-IT',
    name: 'Italiano(Italia)',
    example: 'Ciao, BaizeAI!',
    supported: false,
  },
  {
    value: 'th-TH',
    name: 'ไทย(ประเทศไทย)',
    example: 'สวัสดี BaizeAI!',
    supported: false,
  },
  {
    value: 'id-ID',
    name: 'Bahasa Indonesia',
    example: 'Saluto, BaizeAI!',
    supported: false,
  },
  {
    value: 'uk-UA',
    name: 'Українська(Україна)',
    example: 'Привет, BaizeAI!',
    supported: true,
  },
]

export const LanguagesSupported = languages.filter(item => item.supported).map(item => item.value)

export const getLanguage = (locale: string) => {
  if (locale === 'zh-Hans')
    return locale.replace('-', '_')

  return LanguagesSupported[0].replace('-', '_')
}

export const NOTICE_I18N = {
  title: {
    en_US: 'Important Notice',
    zh_Hans: '重要公告',
    pt_BR: 'Aviso Importante',
    es_ES: 'Aviso Importante',
    fr_FR: 'Avis important',
    de_DE: 'Wichtiger Hinweis',
    ja_JP: '重要なお知らせ',
    ko_KR: '중요 공지',
    uk_UA: 'Важливе повідомлення',
  },
  desc: {
    en_US: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@baizeai.cc). We value your patience.',
    zh_Hans: '为了有效提升数据检索能力及稳定性，BaizeAI 将于 2023 年 8 月 29 日 03:00 至 08:00 期间进行服务升级，届时 BaizeAI 云端版及应用将无法访问。感谢您的耐心与支持。',
    pt_BR: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@baizeai.cc). We value your patience.',
    es_ES: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@baizeai.cc). We value your patience.',
    fr_FR: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@baizeai.cc). We value your patience.',
    de_DE: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@baizeai.cc). We value your patience.',
    ja_JP: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@baizeai.cc). We value your patience.',
    ko_KR: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@baizeai.cc). We value your patience.',
    uk_UA: 'Наша система буде недоступна з 19:00 до 24:00 UTC 28 серпня для оновлення. Якщо у вас виникнуть запитання, будь ласка, зв’яжіться з нашою службою підтримки (support@baizeai.cc). Дякуємо за терпіння.',
  },
  href: '#',
}
