export type ScreenRouteProp = {
  navigate: (SCREEN: string, items?: object) => void;
  goBack: () => void;
};
