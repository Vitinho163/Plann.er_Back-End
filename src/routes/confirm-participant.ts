import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from 'zod'
import { prisma } from "../lib/prisma";
import { ClientError } from "../errors/client-error";
import { env } from "../env";

export async function confirmParticipants(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().patch('/participants/:participantId/confirm', {
    schema: {
      params: z.object({
        participantId: z.string().uuid(),
      }),
      body: z.object({
        name: z.string(),
        email: z.string().email(),
        tripId: z.string().uuid(),
      })
    }
  }, async (request, reply) => {
    const { participantId } = request.params
    const { name, email, tripId } = request.body

    const participant = await prisma.participant.findUnique({
      where: {
        id: participantId,
        trip_id: tripId
      }
    })

    if (!participant) {
      throw new ClientError('Participant not found.')
    }

    if (participant.is_confirmed) {
      return reply.code(200).send({})
    }

    await prisma.participant.update({
      where: { id: participantId },
      data: { is_confirmed: true, name, email }
    })

    return reply.code(200).send({})
  })
}