import Redis from 'redis';

export async function connectRedis() {
    const redisClient = Redis.createClient(6379);
    return redisClient;
}
export async function disconnectRedis(redisClient: Redis.RedisClient) {
    redisClient.end(true);
}
