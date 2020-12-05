import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/schema/user.schema";

export class Leaderboard {
  @ApiProperty()
  numberOfPlayers: number;
  @ApiProperty()
  players: User[];
}