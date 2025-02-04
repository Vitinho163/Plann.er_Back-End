import fastify from "fastify"
import cors from '@fastify/cors'
import fastifyStatic from "@fastify/static"
import path from "path"
import { createTrip } from "./routes/create-trip"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"
import { confirmTrip } from "./routes/confirm-trip"
import { confirmParticipants } from "./routes/confirm-participant"
import { createActivity } from "./routes/create-activity"
import { getActivities } from "./routes/get-activities"
import { createLink } from "./routes/create-link"
import { getLinks } from "./routes/get-links"
import { getParticipants } from "./routes/get-participants"
import { createInvite } from "./routes/create-invite"
import { updateTrip } from "./routes/update-trip"
import { getTripDetails } from "./routes/get-trip-details"
import { getParticipant } from "./routes/get-participant"
import { errorHandler } from "./error-handler"
import { env } from "./env"

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(fastifyStatic, {
  root: path.join(__dirname, 'documentation'), // Diretório raiz do arquivo swagger.json
  prefix: '/documentation', // Prefixo da URL para servir o arquivo
});

app.register(require('@scalar/fastify-api-reference'), {
  routePrefix: '/reference',
  configuration: {
    title: 'Documentation Plann.er',
    spec: {
      url: '/documentation/swagger.json',
    },
    theme: 'Default',
  },
  metaData: {
    title: 'Documentation Plann.er'
  }
})

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)
app.register(getParticipants)
app.register(createInvite)
app.register(updateTrip)
app.register(getTripDetails)
app.register(getParticipant)

const PORT = env.PORT || 3333;
app.listen({ port: PORT, host: '0.0.0.0' }).then(() => {
  console.log(`Server is running on ${PORT}`)
})