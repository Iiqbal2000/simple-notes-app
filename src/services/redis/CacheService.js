const redis = require('redis');

class CacheService {
  constructor() {
    this._client = redis.createClient({
      host: process.env.REDIS_SERVER,
    });

    this._client.on('error', (error) => console.error(error));
  }

  // method untuk menyimpan cache di dlm Redis
  set(key, value, expirationInSecond = 3600) {
    return new Promise((resolve, reject) => {
      this._client.set(key, value, 'EX', expirationInSecond, (err, ok) => {
        if (err) reject(err);

        return resolve(ok);
      });
    });
  }

  // method untuk mendapatkan cache dari Redis
  get(key) {
    return new Promise((resolve, reject) => {
      this._client.get(key, (err, reply) => {
        if (err) reject(err);

        if (!reply) {
          return reject(new Error('Cache tidak ditemukan'));
        }

        return resolve(reply.toString());
      });
    });
  }

  // method untuk menghapus cache dari Redis
  delete(key) {
    return new Promise((resolve, reject) => {
      this._client.del(key, (err, count) => {
        if (err) reject(err);

        return resolve(count);
      });
    });
  }
}

module.exports = CacheService;
