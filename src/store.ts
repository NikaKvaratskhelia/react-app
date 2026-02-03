import { create } from "zustand";

interface CartItem {
  id: number;
  title: string;
  shortDesc: string;
  discountPercentage: number;
  price: number;
  qty: number;
}

type CartStore = {
  cartItems: CartItem[];
  addToCart: (product: CartItem, qty?: number) => void;
  removeFromCart: (id: number) => void;
  total: number;
};

const getStoredCart = (): CartItem[] => {
  const stored = localStorage.getItem("cartItems");
  return stored ? JSON.parse(stored) : [];
};

const calculateTotal = (items: CartItem[]) => {
  let total = 0;
  items.forEach((item) => {
    const discountedPrice = item.price * (1 - item.discountPercentage / 100);
    total += discountedPrice * item.qty;
  });

  return +total.toFixed(2);
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: getStoredCart(),

  addToCart: (product, qty = 1) => {  
    set((state) => {
      const existing = state.cartItems.find((p) => p.id === product.id);

      const updatedCartItems = existing
        ? state.cartItems.map((p) =>
            p.id === product.id ? { ...p, qty: p.qty + qty } : p,
          )
        : [...state.cartItems, { ...product, qty }];

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return { cartItems: updatedCartItems };
    });
  },

  removeFromCart: (id) => {
    set((state) => {
      const updatedCartItems = state.cartItems.filter((i) => i.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return { cartItems: updatedCartItems };
    });
  },
  total: calculateTotal(getStoredCart()),
}));
