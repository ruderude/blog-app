interface Props {
  color: string
  title: string
  number: number
  openTab: number
  setOpen: (e: any) => void
}

export const TabTitle: React.FC<Props> = (tab) => {
  const { color, title, number, openTab, setOpen } = tab;

  return (<>
    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
      <a
        className={
          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
          (openTab === number
            ? "text-white bg-" + color + "-600"
            : "text-" + color + "-600 bg-white")
        }
        onClick={e => {
          e.preventDefault();
          setOpen(number);
        }}
        data-toggle="tab"
        href="#link1"
        role="tablist"
      >
        {title}
      </a>
    </li>
  </>)
}