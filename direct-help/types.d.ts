type LayoutProps =  {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}

type PageProps = Omit<LayoutProps, 'children'>;
