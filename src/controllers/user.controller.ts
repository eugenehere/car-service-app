export default class UserController {
  static async getById(req: any, res: any) {
    const { user } = req;
    console.log(user);
    res.status(200).json({ user });
  }

  static async create() {}
  static async update() {}
  static async delete() {}
}
