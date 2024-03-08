export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  PersonalTraining = "personaltraining",
  Contacts = "contacts",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface TrainingsType {
  name: string;
  description?: string ;
  image: string;
}
