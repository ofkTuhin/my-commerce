export interface ICartItem {
  id: string;
  title: string;
  price: number | null;
  stock: number | null;
  quantity: number | null;
  thumbnail: string;
}
