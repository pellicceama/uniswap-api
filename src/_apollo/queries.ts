import gql from 'graphql-tag'

export const STATUS = gql`
  query uniswaps {
    uniswaps(where: { id: "1" }) {
      id
    }
  }
`

export const ALL_PAIRS = gql`
  query exchanges {
    exchanges(where: { ethBalance_gte: "0.1" }, orderBy: ethBalance, orderDirection: desc) {
      tokenAddress
    }
  }
`

export const PAIR_HISTORICAL_DATA = gql`
  query exchangeHistoricalDatas($tokenAddress: String!, $timestamp: Int!) {
    exchanges(where: { tokenAddress: $tokenAddress }) {
      tokenName
      tokenSymbol

      ethBalance
      price

      tradeVolumeEth
      tradeVolumeToken
    }

    exchangeHistoricalDatas(
      where: { tokenAddress: $tokenAddress, timestamp_lt: $timestamp }
      first: 1
      orderBy: timestamp
      orderDirection: desc
    ) {
      tradeVolumeEth
      tradeVolumeToken
    }
  }
`
