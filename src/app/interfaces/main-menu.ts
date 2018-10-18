export interface IMainMenu {
  id: number;
  title: string;
  sid: string;
  imgIcon: string;
  items: [
    {
      title: string;
      sid: string;
    }
  ];
}
