export interface RouteInterface {
  public?: boolean;
  path: string;
  element: React.FC<React.FC<() => JSX.Element>>;
  layout?: string;
}
