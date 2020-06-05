export interface ITeamInitialState {
  dogs: IDogTeam[];
  breeds: any;
}

export interface IDogTeam {
  breed: string;
  image: string;
}
