import type { NextPage } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import { Blogs } from '../../components/blog/Blogs';

interface Props {
  dir: Array<object> 
}

// interface Props {
//   dir: [
//     {
//       frontMatter: {
//         data: string
//         content: string
//       },
//       slug: string,
//     }
//   ]  
// }

export const getStaticProps = () => {
  const dirList = fs.readdirSync('posts');
  // console.log('dirList:', dirList);
  //ディレクトリのリストに絞る
  // const dirList = alls.filter((file) => {
  //   return fs.statSync(path.join('posts', file)).isDirectory()
  // })


  let posts = []
  for (let i = 0; i < dirList.length; i++) {
    const files = fs.readdirSync(`posts/${dirList[i]}`);

    const blogs = files.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fileContent = fs.readFileSync(`posts/${dirList[i]}/${fileName}`, 'utf-8');
      const { data, content } = matter(fileContent);
      // console.log('slug:', slug);
      // console.log('data:', data);
      // console.log('content:', content);
      return {
        frontMatter: data,
        content: content,
        slug: slug,
      };
    });

    posts[dirList[i]] = blogs;
  }

  return {
    props: {
      titles: dirList.reverse(),
      posts: posts
    },
  };
};

const Blog: NextPage<any> = ({ titles, posts }) => {
  // console.log("posts");
  // console.log(posts);
  return (
    <div>

      {/* <div className="text-pink-600 bg-pink-600">Text</div> // なぜかコレを書いてからTailWindCSSが効いた */}

      <main>
        <h1>Blog</h1>
        <Blogs titles={titles} posts={posts}></Blogs>
      </main>
    </div>
  )
}

export default Blog;
