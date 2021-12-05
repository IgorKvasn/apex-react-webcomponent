export const apex: Apex;

type ItemType = string | number;

class Apex {
  item: (itemName: string) => {
    setValue: (value: ItemType) => void;
    getValue: () => ItemType;
  };
}
