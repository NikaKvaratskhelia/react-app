import { useEffect, useState } from "react";

export default function Pagination(props: any) {
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    if (!props.showQty) return;
    setPageCount(Math.ceil(props.dbLength / props.showQty));
  }, [props.dbLength, props.showQty]);

  return (
    <div className="flex items-center justify-end gap-3 max-w-300 w-full px-10 mx-auto mt-10">
      {Array.from({ length: pageCount }, (_, i) => {
        const page = i + 1;
        const isActive = page === props.currentPage;

        return (
          <button
            key={page}
            onClick={() => props.onPageChange(page)}
            disabled={isActive}
            className="w-10 h-10 py-1.5 px-3 rounded-[10px]"
            style={{
              padding: "6px 12px",
              cursor: isActive ? "default" : "pointer",
              background: isActive ? "#B88E2F" : "#F9F1E7",
              color: isActive ? "#fff" : "#000",
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
