import { useMediaQuery } from 'react-responsive';

const useMediaScreens = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1400px)' });
  const isDesktop = useMediaQuery({
    query: '(min-width:1200px) and (max-width: 1399.98px)',
  });
  const isTabletLandscape = useMediaQuery({
    query: '(min-width:992px) and (max-width: 1199.98px)',
  });
  const isTabletPortrait = useMediaQuery({
    query: '(min-width:768px) and (max-width: 991.98px)',
  });
  const isMobileLandscape = useMediaQuery({
    query: '(min-width:576px) and (max-width: 767.98px)',
  });
  const isMobilePortrait = useMediaQuery({ query: '(max-width: 575.98px)' });

  return {
    isLargeScreen,
    isDesktop,
    isTablet: {
      landscape: isTabletLandscape,
      portrait: isTabletPortrait,
    },
    isMobile: {
      landscape: isMobileLandscape,
      portrait: isMobilePortrait,
    },
  };
};

export default useMediaScreens;
