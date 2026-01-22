import compareIcon from "../assets/images/compareIcon.png";
import likeIcon from "../assets/images/likeWhiteIcon.png";

export default function ProductCard(props: any) {
  const isNewProduct = () => {
    const createdAt = new Date(props.product.createdAt);
    const now = new Date();
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
    return createdAt >= threeDaysAgo;
  };

  return (
    <div className="flex flex-col items-start max-w-71.25 w-full cursor-pointer relative">
      <img src={"https://picsum.photos/300/300"} alt={props.product.title} />
      <div className="flex flex-col items-start gap-2 py-4 px-5 bg-[#F4F5F7] w-full">
        <h3 className="text-[#3A3A3A] text-[24px] font-semibold">
          {props.product.title}
        </h3>
        <p className="text-[#898989] font-medium text-[16px]">
          {props.product.shortDesc}
        </p>

        {props.product.discountPercentage === 0 ? (
          <span>${props.product.price}</span>
        ) : (
          <div className="flex gap-2">
            <span className="text-[20px] font-semibold">
              $
              {(
                (props.product.price / 100) *
                (100 - props.product.discountPercentage)
              ).toFixed(2)}
            </span>
            <span className="line-through text-[#B0B0B0]">
              ${props.product.price}
            </span>
          </div>
        )}
      </div>

      {props.product.discountPercentage !== 0 && (
        <div className="flex bg-[#E97171] items-center justify-center rounded-[50%] text-white w-9 h-9 absolute right-2 top-2">
          {props.product.discountPercentage}%
        </div>
      )}

      {isNewProduct() && (
        <div className="flex bg-[#2EC1AC] items-center justify-center rounded-sm text-white px-2 py-1 absolute left-2 top-2 text-xs font-semibold">
          New
        </div>
      )}

      <div className="opacity-0 absolute inset-0 z-3 cursor-default bg-[#3a3a3a8e] flex flex-col gap-4 items-center justify-center transition-all duration-500 hover:opacity-100">
        <button
          className="bg-white text-[#B88E2F] font-semibold max-w-50 w-full py-3 cursor-pointer"
          onClick={() => props.addToCart(props.product)}
        >
          Add To Cart
        </button>

        <div className="flex gap-4 items-center justify-center">
          <div className="flex gap-1 items-center justify-center cursor-pointer">
            <img src={compareIcon} alt="compare icon" className="w-4 h-4" />
            <p className="text-white font-semibold">Compare</p>
          </div>
          <div className="flex gap-1 items-center justify-center cursor-pointer">
            <img src={likeIcon} alt="like icon" className="w-4 h-4" />
            <p className="text-white font-semibold">Like</p>
          </div>
        </div>
      </div>
    </div>
  );
}
