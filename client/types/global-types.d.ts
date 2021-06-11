export type INavigation = {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  activeIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}[];
