import { DinoDNS } from  "dinodns";
import { DefaultStore } from "dinodns/plugins/storage";
import { DefaultCache } from "dinodns/plugins/cache";
import { ConsoleLogger } from "dinodns/plugins/logging";
import { DNSOverTCP, DNSOverUDP } from "dinodns/networks";

const store = new DefaultStore();
const cache = new DefaultCache();
const logger = new ConsoleLogger();

const server = new DinoDNS({
    storage: store,
    cache: cache,
    logger: logger,
    networks: [
        new DNSOverTCP("localhost", 1053),
        new DNSOverUDP("localhost", 1053),
    ]
});
