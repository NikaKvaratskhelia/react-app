import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface CartItem {
  id: number;
  title: string;
  shortDesc: string;
  discount: number;
  price: number;
  qty: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (item: CartItem) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  const [total, setTotal] = useState(0);

  const calculateTotal = (items: CartItem[]) => {
    let total = 0;
    items.forEach((item) => {
      const discountedPrice = item.price * (1 - item.discount / 100);
      total += discountedPrice * item.qty;
    });
    return +total.toFixed(2);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setTotal(calculateTotal(cartItems));
  }, [cartItems]);

  const addToCart = (product: any) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          shortDesc: product.shortDesc,
          discount: product.discountPercentage,
          price: product.price,
          qty: 1,
        },
      ];
    });
  };

  const removeFromCart = (item: CartItem) => {
    setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
