---
title: '222222Next.jsでmarkdownブログを構築'
date: '2022-010-19'
description: '2222Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。'
image: img/1645370534692.jpg
categories: ['react', 'vue']
---

## 目次

222222Next.js を使って Markdown のブログサイトの構築を一から行なっていきます。

## Next.js の準備

### プロジェクトの作成
aaaaaaaaaaaaaaaaaaa

aaaaaaaaaaaaaaaaaaaaa

aaaaaaaaaaaaaaaaaaaaaaa

## Next.js の準備2

![猫1](http://localhost:3000/img/shutterstock_259729697.jpg)

![猫2](http://localhost:3000/img/neko1.jpeg)

aaaaaaaaaaa

aaaaaaaaaaaaaa

aaaaaaaaaaaaaaaaaa

### プロジェクトの作成2

## Next.js の準備3

aaaaaaaaaaa

aaaaaaaaaaaaaa

aaaaaaaaaaaaaaaaaa

aaaaaaaaaaa

```js[class="line-numbers"]
import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/prism.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

aaaaaaaaaaaaaa

aaaaaaaaaaaaaaaaaa

aaaaaaaaaaa

aaaaaaaaaaaaaa

aaaaaaaaaaaaaaaaaa

### プロジェクトの作成3

aaaaaaaaaaa

[記事一覧](/blog)

[333333](/blog/2022_next-js-markdown-blog3)

[グーグル](https://www.google.co.jp/)

aaaaaaaaaaaaaa

aaaaaaaaaaaaaaaaaa

aaaaaaaaaaa

aaaaaaaaaaaaaa

aaaaaaaaaaaaaaaaaa

## Next.js の準備4

### プロジェクトの作成4

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。