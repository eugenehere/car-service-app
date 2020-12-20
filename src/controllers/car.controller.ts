import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getRepository } from 'typeorm';
import User from '../entities/user.entity';
import Car from '../entities/car.entity';
import { TCarState, TCarStateResult } from '../types';

export default class CarController {
  static async get(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const userRepository = getRepository(User);
    const carRepository = getRepository(Car);
    
  }

  static async create(req: Request, res: Response, next: NextFunction) {}
  static async update(req: Request, res: Response, next: NextFunction) {}
  static async delete(req: Request, res: Response, next: NextFunction) {}

  static async diagnostics(req: Request, res: Response, next: NextFunction) {
    const { state } = req.body;

    try {
        validationResult(req).throw();
    } catch (error) {
        return res.status(400).json({ ok: 0, validation: error.mapped() });
    }

    try {
        const result: TCarStateResult = {
            tirePressure: true,
            petrol: true,
            ignition: false,
        };
        res.status(200).json({ ok: 1, result });
    } catch (error) {
        
    }
  }
}
