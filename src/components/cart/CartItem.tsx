import trashBin from "../../assets/images/trashBin.png";

export default function CartItem(props: any) {
  return (
    <tr className="grid grid-cols-6 max-w-205 items-center justify-center gap-9 mb-5">
      <td>
        <img
          src="https://picsum.photos/300/300"
          alt="Product img"
          className="w-26.25 h-26.25 rounded-[10px]"
        />
      </td>
      <td className="text-center">{props.product?.title}</td>
      <td className="text-center">
        {
          +(
            (props.product.price / 100) *
            (100 - props.product.discount)
          ).toFixed(2)
        }
        $
      </td>
      <td>
        <p className="w-8 h-8 mx-auto flex items-center justify-center border border-[#9F9F9F] rounded-[5px]">
          {props.product?.qty}
        </p>
      </td>
      <td className="text-center">
        {+(
          (props.product.price / 100) *
          (100 - props.product.discount)
        ).toFixed(2) * props.product?.qty}
        $
      </td>
      <td>
        <img
          src={trashBin}
          alt="Trash bin"
          className="w-5 h-5 cursor-pointer"
          onClick={() => props.removeFromCart(props.product)}
        />
      </td>
    </tr>
  );
}
