const generateImgPath = (path: string): string => {
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? `/book${ path }` : path;
};

export default generateImgPath;
