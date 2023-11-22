import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Sintomas do Covid-19',
    message: `Quais são os sintomas do Covid-19?`
  },
  {
    heading: 'Sintomas da Dengue',
    message: 'Quais são os sintomas da Dengue?'
  },
  {
    heading: 'O que corresponde aos sintomas',
    message: `Descreve seus sintomas: \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Bem vindo(a) ao AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          Você pode iniciar uma conversa aqui ou tentar os seguintes exemplos:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
