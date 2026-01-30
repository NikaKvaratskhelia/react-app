import CartItem from "./CartItem";

export default function Table(props: any) {
  return (
    <table>
      <thead>
        <tr className="grid grid-cols-6 max-w-205 w-full bg-[#F9F1E7] align-center p-4 mb-5">
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      
      <tbody>
        {props.cartItems.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          props.cartItems.map((item: any) => (
            <CartItem
              key={item.id}
              removeFromCart={props.removeFromCart}
              product={item}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
