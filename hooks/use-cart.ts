import { create } from "zustand";
import { Product } from "@/types";
import { createJSONStorage, persist } from "zustand/middleware";
import toast from "react-hot-toast";


interface CartStore {
    items: Product[];
    addItem: (item: Product) => void;
    removeItem: (id: string) => void;
    removeAllItems: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItems = currentItems.find((item) => item.id === data.id, currentItems);

            if (existingItems) {
                return toast.error("Producto ya agregado al carrito.");
            }
            set({ items: [...currentItems, data] });
            toast.success("Producto agregado al carrito.");
        },
        removeItem: (id: string) => {
            const currentItems = get().items;
            set({ items: currentItems.filter((item) => item.id !== id) });
            toast.success("Producto eliminado del carrito.");
        },
        removeAllItems: () => {
            set({ items: [] });
        }
    }), {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
    })
)

export default useCart;