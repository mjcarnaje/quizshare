export type INavigation = {
  name: string;
  href: string;
  icon: (Props: SVGProps<SVGSVGElement>) => JSX.Element;
  activeIcon: (Props: SVGProps<SVGSVGElement>) => JSX.Element;
}[];
