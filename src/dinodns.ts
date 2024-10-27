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
        new DNSOverTCP("0.0.0.0", 5353),
        new DNSOverUDP("0.0.0.0", 5353),
    ]
});

server.handle('0.0.0.0', (req, res) => {
  const { type } = req.packet.questions[0];
  switch (type) {
    case 'TXT':
      return res.answer({
        name: 'example.com',
        type: 'TXT',
        class: 'IN',
        ttl: 300,
        data: 'Hello, World!',
      });
    default:
      return res.errors.notImplemented();
  }
});

server.start(() => {
  console.log('Server started');
});
