export class ContainerStatsDto {
  name: string;

  created: Date;

  expireAt: Date;

  cpuPercent: number;

  memoryUsage: number;

  memoryFreePercent: number;

  memoryLimit: number;
}
