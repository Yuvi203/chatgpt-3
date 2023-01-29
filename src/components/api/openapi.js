import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey:"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"
})

export const openai = new OpenAIApi(configuration)