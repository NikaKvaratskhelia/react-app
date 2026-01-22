export default function Filter(props: any) {
  return (
    <div className="w-full bg-[#F9F1E7] flex justify-end px-12 py-6">
      <div className="flex items-center gap-4">
        <span className="text-[18px] font-medium text-gray-700">
          Show
        </span>

        <div className="flex items-center bg-white rounded-full shadow-md select-none overflow-hidden">
          <button
            onClick={props.onDecrement}
            className="cursor-pointer w-11 h-11 flex items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition"
            aria-label="Decrease"
          >
            -
          </button>

          <span className="min-w-10 text-center text-[18px] font-semibold text-gray-800">
            {props.showQty}
          </span>

          <button
            onClick={props.onIncrement}
            className="cursor-pointer w-11 h-11 flex items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition"
            aria-label="Increase"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
