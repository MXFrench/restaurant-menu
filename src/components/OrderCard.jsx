
export const OrderCard = ({ item }) => {
  return (
    <div className="shadow-main rounded-lg border-2 border-accent-2 bg-base p-1">
      <div className="w-full h-full rounded-sm border-2 border-accent-1">
        {item.name}
      </div>
    </div>
  )
}
