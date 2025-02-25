import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Connection } from "mongoose";

import { NetworkContainer, Network } from "./dto/network.dto";

@Injectable()
export class NetworkService {
  private readonly logger = new Logger(NetworkService.name);

  constructor(
    private configService: ConfigService,
    @InjectConnection() private connection: Connection,
    @InjectModel(Network.name)
    private networkModel: Model<Network>,
  ) {}

  public deleteNetwork(name) {
    return new Promise((resolve, reject) => {
      this.networkModel
        .deleteOne({ $or: [{ Id: name }, { Name: name }] })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error in deleteNetwork", err);
          reject(err);
        });
    });
  }

  public async save(data: Network): Promise<any> {
    return new Promise((resolve, reject) => {
      this.networkModel
        .findOneAndUpdate({ Name: data.Name }, data, { upsert: true })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          this.logger.error("Error saving network", err);
          reject(err);
        });
    });
  }

  public async get(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const old = this.networkModel
        .findOne({ $or: [{ Id: name }, { Name: name }] })
        .lean()
        .exec()
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          this.logger.error("Error retrieving network for " + name, err);
          reject(err);
        });
    });
  }

  public async all(): Promise<any> {
    return new Promise((resolve, reject) => {
      const filter = {};

      this.connection.getClient().connect(); //this.configService.get("host.mongo.url") + "discovrninja");

      const old = this.networkModel
        .find(filter)
        .lean()
        .exec()
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          this.logger.error("Error retrieving all networks", err);
          reject(err);
        });
    });
  }
}
