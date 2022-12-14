export const host = 'http://localhost:3000';

const Default = {
  title: 'テストサイト',
  description: 'テストサイトテストサイトテストサイトテストサイト',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: `${host}`,
    site_name: 'BLOG',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}

export default Default;