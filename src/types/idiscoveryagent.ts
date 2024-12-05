import { ServiceDefinitionList } from "@customtypes/servicedefinition";

/**
 * Represents a Service discovery agent
 */
interface IDiscoveryAgent {
  /**
   * Scan function
   */
  scan(): Promise<ServiceDefinitionList>;
}

export { IDiscoveryAgent };
