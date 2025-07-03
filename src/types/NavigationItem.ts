// types/NavigationItem.ts
export interface NavigationItem {
  label: string;
  href?: string;
  items?: NavigationItem[];
}
