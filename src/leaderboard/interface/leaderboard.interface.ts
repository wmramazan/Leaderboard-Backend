import { User } from "src/schema/user.schema";

export interface Leaderboard {
  numberOfPlayers: number
  players: User[]
}