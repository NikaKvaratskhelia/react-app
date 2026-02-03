export default function CartItem(props: any) {
  return (
    <div className="flex justify-between items-center w-full">
      <p className="text-[12px] font-medium flex items-center gap-2">
        <span className="text-[#9F9F9F] text-[16px] font-regular">{props.item.title}</span> X {props.item.qty}
      </p>

      {props.item.discount === 0 ? (
        <p>${props.item.price}</p>
      ) : (
        <div className="flex gap-2">
          <p className="text-[16px] font-light">
            $
            {((props.item.price / 100) * (100 - props.item.discount)).toFixed(
              2,
            )}
          </p>
          <p className="line-through text-[#B0B0B0]">${props.item.price}</p>
        </div>
      )}
    </div>
  );
}
