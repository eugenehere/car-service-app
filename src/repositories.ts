import { getConnection } from "typeorm";
import User from "./entities/user.entity";

const connection = getConnection();

export default {
  user: connection.getRepository(User),
};
