"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/app/context/CartContext";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <CartProvider>
        {/* <Toaster /> */}
        {children}
      </CartProvider>
    </Provider>
  );
}
