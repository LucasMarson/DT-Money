import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryConatiner } from './styles'

export function Summary() {
  /* 
posso tanto deixar dentro da minha aplicacao quanto criar um hook para isso

   const { transactions } = useContext(TransactionsContext);


    //reduce e um metodo que nos permite percorrer um array e reduzir esse array a alguma nova estrutura de dados 
    // neste caso eu quero converter meu array de transactions em um objeto que vai seguir a seguinte estutura
    // { income: 0, outcome: 0, total: 0} ou seja quero reduzir meu array de transactions a essa estrutura de dados
    const summary = transactions.reduce(
        (acc, transaction) => {
            if(transaction.type === 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }

            return acc;
        }, 
        {  
            income: 0, 
            outcome: 0, 
            total: 0
        }
    )
*/
  const summary = useSummary()

  return (
    <SummaryConatiner>
      <SummaryCard>
        <header>
          <span>Entadas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard varient="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryConatiner>
  )
}
