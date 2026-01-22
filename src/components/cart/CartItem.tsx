import xBtn from "../../assets/images/xBtn.png";

export default function cartItem(props: any) {
  const product = props.product;
  return (
    <div className="flex items-center justify-between">
      <img
        src="https://picsum.photos/300/300"
        alt="Product img"
        className="w-26.25 h-26.25 rounded-[10px]"
      />
      <div className="flex flex-col gap-2 mr-auto ml-8">
        <p>{product?.title}</p>
        <p>
          {product?.qty} X{" "}
          {product.discount === 0 ? (
            <span>${product.price}</span>
          ) : (
            <div className="flex gap-2">
              <span className="text-[20px] font-semibold">
                $
                {+((product.price / 100) * (100 - product.discount)).toFixed(2)}
              </span>
              <span className="line-through text-[#B0B0B0]">
                ${product.price}
              </span>
            </div>
          )}
        </p>
      </div>

      <img
        src={xBtn}
        alt="x button"
        className="w-5 h-5 cursor-pointer"
        onClick={() => props.removeFromCart(props.product)}
      />
    </div>
  );
}
