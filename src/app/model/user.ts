import { Interest } from "./interest";
import { Location } from "./location";

export class User {
  id: number;
  name: string;
  gender: string;
  age: number;
  photo: string;
  description: string;
  locationID: number;
  location: Location = new Location();
  interestsID: number;
  interests: Interest[] = [new Interest()];
  like: boolean;
}
