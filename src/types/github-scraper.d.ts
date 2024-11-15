declare module "github-scraper" {
  // Add the specific types here if you know them. For now, 'any' will silence the error.
  const gs: (url: string, callback: (err: any, data: any) => void) => void;
  export default gs;
}
