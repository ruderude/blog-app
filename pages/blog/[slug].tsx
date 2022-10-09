import React, { createElement, Fragment } from 'react';
import type { NextPage } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import remarkPrism from 'remark-prism';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import remarkUnwrapImages from 'remark-unwrap-images';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { host } from '../../next-seo.config';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  console.log('params:', params);
  const pathData = params.slug;
  const [dir, slug] = pathData.split('_', 2);
  // console.log('dir:', dir);
  // console.log('slug:', slug);
  const file = fs.readFileSync(`posts/${dir}/${slug}.md`, 'utf-8');
  const { data, content } = matter(file);
  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism, {
      plugins: ['line-numbers'],
    })
    .use(remarkToc, {
      heading: '目次',
      tight: true,
    })
    .use(remarkUnwrapImages)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);
  // console.log('html:', result.toString());
  return { props: { frontMatter: data, content: result.toString(), dir: dir, slug: slug } };
}

export async function getStaticPaths({ params }) {

  const dirList = fs.readdirSync('posts');
  let pathList = []
  for (let i = 0; i < dirList.length; i++) {
    const files = fs.readdirSync(`posts/${dirList[i]}`);
    const pathsData = files.map((fileName) => dirList[i] + '_' + fileName.replace(/\.md$/, ''))
    pathList = pathList.concat(pathsData);
  }
  // console.log('pathList:', pathList);
  const paths = pathList.map((fileName) => ({
    params: {
      slug: fileName,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

const toReactNode = (content) => {
  return unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        a: MyLink,
        img: MyImage,
      },
    })
    .processSync(content).result;
};

const MyLink = ({ children, href }) => {
  if (href === '') href = '/';
  return href.startsWith('/') || href.startsWith('#') ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const MyImage = ({ src, alt }) => {
  return (
    <div className="relative max-w-full h-96">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
};

const Blog: NextPage<any> = ({ frontMatter, content, dir, slug }) => {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: 'website',
          url: `${host}/blog/${dir}_${slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `${host}/${frontMatter.image}`,
              width: 1200,
              height: 700,
              alt: frontMatter.title,
            },
          ],
        }}
      />

      <main className='container'>
        <div className="prose prose-lg max-w-none mx-auto">
          <div className="my-5">
            <Image
              src={`/${frontMatter.image}`}
              width={1200}
              height={700}
              objectFit="contain"
              alt={frontMatter.title}
            />
          </div>
          <h1>{frontMatter.title}</h1>
          <span>{frontMatter.date}</span>
          <div className="space-x-2">
            {frontMatter.categories.map((category) => (
              <span className='bg-orange-500 text-white rounded px-2' key={category}>
                <Link href={`/categories/${category}`}>
                  <a className='text-white'>{category}</a>
                </Link>
              </span>
            ))}
          </div>
          {toReactNode(content)}
          {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
        </div>
      </main>
    </>
  );
};

export default Blog;