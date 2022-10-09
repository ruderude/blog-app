import React from "react"
import { TabTitle } from './TabTitle'
import { TabDetail } from './TabDetail'

// interface Props {
//   color: string
//   titles: Array<string> 
//   posts: any
// }

export const Tabs: React.FC<any> = ({ color, titles, posts }) => {
  // console.log("Tabs");
  // console.log(posts);
  const [openTab, setOpenTab] = React.useState(1);

  const setOpen = (e: any) => {
    setOpenTab((prev) => e);
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">

          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {titles.map((title, index) => {
              const number = index + 1;
              return <TabTitle
                color={color}
                title={title}
                number={number}
                openTab={openTab}
                setOpen={setOpen}
                key={number}
              ></TabTitle>
            })}
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {titles.map((title, index) => {
                  const number = index + 1;
                  let blogs = []
                  for (const key in posts) {
                    if (key === title) {
                      blogs = posts[key]
                    }
                  }

                  // 日付が新しいものからソート
                  const sortedBlogs = blogs.sort((postA, postB) =>
                    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
                  );

                  return <TabDetail
                    title={title}
                    blogs={sortedBlogs}
                    number={number}
                    openTab={openTab}
                    key={number}
                  ></TabDetail>
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};