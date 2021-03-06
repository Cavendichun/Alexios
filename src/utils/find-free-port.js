const net = require("net");

function findFreePort(beg, ...rest) {
  const p = rest.slice(0, rest.length - 1);
  const cb = rest[rest.length - 1];

  let [end, ip, cnt] = Array.from(p);

  if (!ip && end && !/^\d+$/.test(end)) {
    ip = end;
    end = 65534;
  } else {
    if (end == null) {
      end = 65534;
    }
  }

  if (cnt == null) {
    cnt = 1;
  }

  const retcb = cb;
  const res = [];

  const probe = function (ip, port, cb) {
    const s = net.createConnection({ port, host: ip });

    s.on("connect", () => {
      s.end();
      cb(null, port + 1);
    });

    s.on("error", () => {
      cb(port);
    });
  };

  const onprobe = function (port, nextPort) {
    if (port) {
      res.push(port);

      if (res.length >= cnt) {
        retcb(null, ...res);
      } else {
        setImmediate(() => probe(ip, port + 1, onprobe));
      }
    } else {
      if (nextPort >= end) {
        retcb(new Error("No available ports"));
      } else {
        setImmediate(() => probe(ip, nextPort, onprobe));
      }
    }
  };
  return probe(ip, beg, onprobe);
}

function findFreePortPmfy(beg, ...rest) {
  const last = rest[rest.length - 1];

  if (typeof last === "function") {
    findFreePort(beg, ...rest);
  } else {
    return new Promise((resolve, reject) => {
      findFreePort(beg, ...rest, (err, ...ports) => {
        if (err) reject(err);
        else resolve(ports);
      });
    });
  }
}

export default findFreePortPmfy;
