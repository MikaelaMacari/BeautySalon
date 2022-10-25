import React from "react";
import { PageLayout } from "../../ts/enum";

export const LayoutType = {
  default: React.lazy(() => import("../../layouts/default")),
} as any;

interface LayoutProps {
  route: any;
  children: JSX.Element;
}
export const Layout = (props: LayoutProps) => {
  const layoutName = props.route.layout || PageLayout.Default;
  const Default = LayoutType[layoutName];
  return <Default>{props.children}</Default>;
};
