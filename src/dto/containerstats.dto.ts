export class ContainerStatsDto {
  name: string;

  created: Date;

  cpuPercent: number;

  memoryUsage: number;

  memoryFreePercent: number;

  memoryLimit: number;
}
