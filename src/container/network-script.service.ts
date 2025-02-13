import { StringBuilder } from "@customtypes/stringbuilder";
import { Network } from "@data/dto/network.dto";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class NetworkScriptService {
  private readonly logger = new Logger(NetworkScriptService.name);

  constructor(private configService: ConfigService) {}

  public getAttach(net: Network) {
    const result = [];
    net.AttachedContainers.forEach((c) => {
      result.push("docker network connect " + net.Name + " " + c);
    });
    return result.sort();
  }

  public getDetach(net: Network) {
    const result = [];
    net.AttachedContainers.forEach((c) => {
      result.push("docker network disconnect --force " + net.Name + " " + c);
    });
    return result.sort();
  }

  public getDelete(net: Network) {
    const result = [];
    result.push("docker network rm " + net.Name + " --force");
    return result;
  }

  public getCreate(net: Network) {
    const sb: StringBuilder = new StringBuilder();
    sb.appendFormat("docker network create --driver {0} ", net.Driver);

    sb.appendFormat("    --scope {0}", net.Scope);

    for (const item in net.Options) {
      sb.appendFormat("    --opt {0}={1}", item, net.Options[item]);
    }

    sb.appendFormat("    --ipam-driver {0}", net.IPAM.Driver);

    if (net.EnableIPv6) {
      sb.append("    --ip6");
    }
    if (net.Ingress) {
      sb.append("    --ingress");
    }
    if (net.Internal) {
      sb.append("    --internal");
    }
    if (net.Attachable) {
      sb.append("    --attachable");
    }
    for (const item in net.IPAM.Options) {
      sb.appendFormat("    --ipam-opt {0}={1}", item, net.IPAM.Options[item]);
    }

    if (net.IPAM.Config) {
      net.IPAM.Config.forEach((cfg) => {
        if (cfg.IPRange && cfg.IPRange != "") {sb.appendFormat("    --ip-range {0}", cfg.IPRange);}
        if (cfg.Subnet && cfg.Subnet != "") {sb.appendFormat("    --subnet {0}", cfg.Subnet);}
        if (cfg.Gateway && cfg.Gateway != "") {sb.appendFormat("    --gateway {0}", cfg.Gateway);}
      });
    }

    for (const item in net.Labels) {
      sb.appendFormat("    --label {0}={1}", item, net.Labels[item]);
    }

    sb.append("    " + net.Name);
    return sb.toArray();
  }
}
