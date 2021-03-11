import { Interest } from "./interest";
import { Location } from "./location";

export class User {
  id: number;
  name: string;
  gender: string;
  age: number;
  photo: string;
  description: string;
  location: Location = new Location();
  interests: Interest[] = [new Interest()];
}
