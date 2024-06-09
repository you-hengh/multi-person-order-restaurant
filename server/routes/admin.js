import fastifyPlugin from 'fastify-plugin';
import { server } from '../server.js';
const admin = async fastify => {
  fastify.post('/restaurant/allTableStatus', (request, reply) => {
    console.log(server.tableStatusCache);
    reply.send(JSON.stringify(server.tableStatusCache));
  });
};

export default fastifyPlugin(admin);
