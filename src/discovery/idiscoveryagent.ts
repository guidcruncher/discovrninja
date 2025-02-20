import { ServiceDefinition } from "@data/dto/servicedefinition.dto";

/**
 * Represents a Service discovery agent
 */
interface IDiscoveryAgent {
  /**
   * Scan function
   */
  scan(): Promise<ServiceDefinition[]>;
}

export { IDiscoveryAgent };
