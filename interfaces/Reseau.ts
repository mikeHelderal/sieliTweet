/* V1
interface Todo {
email: string,
password: string,
}*/

// V2 
export interface Reseaux {
userId: number;
token: string,
}


export type RootState = {
  todo: {
    data: Reseaux[]
  }
}