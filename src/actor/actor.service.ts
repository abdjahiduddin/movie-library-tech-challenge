import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Actor } from 'src/models/actor.model';
import { ActorInput } from './dto/actor.input';
import { nanoid } from 'nanoid';

@Injectable()
export class ActorService {
  constructor(
    @InjectModel(Actor)
    private readonly actorModel: typeof Actor,
  ) {}

  async getAll(): Promise<Actor[]> {
    return this.actorModel.findAll();
  }

  async getOne(id: string): Promise<Actor> {
    return this.actorModel.findOne({
      where: {
        id,
      },
    });
  }

  async addActor(actorInput: ActorInput): Promise<Actor> {
    const { act_name } = actorInput;
    const act_id = nanoid();
    return this.actorModel.create({ act_id, act_name });
  }

  async updateActor(id: string, actorInput: ActorInput): Promise<Actor> {
    const { act_name } = actorInput;
    const actor = await this.getOne(id);

    if (!actor) {
      throw new NotFoundException(`Actor with ID ${id} not found`);
    }

    actor.act_name = act_name;

    await actor.save();
    return actor;
  }

  async deleteActor(id: string): Promise<{ id: string; message: string }> {
    const result = await this.actorModel.destroy({ where: { act_id: id } });
    if (result === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return {
      id,
      message: 'Successfully deleted actor',
    };
  }
}
