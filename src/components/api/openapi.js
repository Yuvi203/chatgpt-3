import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey:"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"
})

export const openai = new OpenAIApi(configuration)