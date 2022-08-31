export interface RouteInterface {
  path: string;
  element: React.FC<React.FC<() => JSX.Element>>;
}
