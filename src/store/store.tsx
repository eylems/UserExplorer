import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PhotoParams } from "../pages/AlbumDetailPage";

interface StoreParams {
  favorites: PhotoParams[];
  addFavorite: (photo: PhotoParams) => void;
  removeFavorite: (id: number) => void;
}

export const useStore = create<StoreParams>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (photo) => 
        set((state) => ({
          favorites: [...state.favorites, photo],
        })),
      removeFavorite: (id: number) => 
        set((state) => ({
        favorites: state.favorites.filter((photo) => photo.id !== id)
      })),
    }),
    {
      name: "favorite-storage",
    }
  )
)