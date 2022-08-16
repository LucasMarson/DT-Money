import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/transactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  // reduce e um metodo que nos permite percorrer um array e reduzir esse array a alguma nova estrutura de dados
  // neste caso eu quero converter meu array de transactions em um objeto que vai seguir a seguinte estutura
  // { income: 0, outcome: 0, total: 0} ou seja quero reduzir meu array de transactions a essa estrutura de dados
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
