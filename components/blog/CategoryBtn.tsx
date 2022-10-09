interface Props {
  onClick: (e) => void
  children: string
}

export const CategoryBtn: React.FC<Props> = ({ onClick, children }) => {
  return (<>
    <button
      className="bg-orange-600 hover:bg-orange-500 text-white rounded px-4 py-2 mx-1"
      onClick={onClick}
    >{children}</button>
  </>)
}