export class ServiceDefinitionDto {
  name: string;

  containerName: string;

  hostname: string;

  ipaddress: string;

  iconSlug: string;

  iconCatalog: string;

  iconUrl: string;

  project: string;

  firstSeen: Date;

  proxy: string;

  public: string;

  created: Date;

  updated: Date;

  lastSeen: Date;

  lastPolled: Date;

  downtime: number;

  available: boolean;

  edited: boolean;

  archived: boolean;
}
