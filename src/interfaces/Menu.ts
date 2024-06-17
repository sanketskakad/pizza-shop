export interface Menu {
  itemName: string;
  description: string;
  category: string;
  basePrice: string;
  sizes: Size[];
  extraIngredients: Ingredients[];
}

export interface Size {
  name: string;
  extraPrice: number;
}

export interface Ingredients {
  name: string;
  extraPrice: number;
}
