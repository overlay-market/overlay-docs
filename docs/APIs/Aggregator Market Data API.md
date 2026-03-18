---
slug: /api/aggregator-market-data
sidebar_position: 1
---

# Aggregator Market Data API

Overlay exposes public JSON endpoints for third-party market aggregators and listing services such as CoinGecko and CoinMarketCap.

These endpoints are served under the `/api/aggregator` path and return one row per enabled market deployment.

## Base Path

The aggregator endpoints are exposed under:

```text
https://api.overlay.market/data/api/aggregator
```

Examples:

- `https://api.overlay.market/data/api/aggregator/contracts`
- `https://api.overlay.market/data/api/aggregator/contract_specs`

The endpoints are public and do not require authentication.

## `GET /contracts`

Returns the full market data payload for each enabled derivative market.

### Example Request

```bash
curl https://api.overlay.market/data/api/aggregator/contracts
```

### Example Response

```json
[
  {
    "ticker_id": "BTC-USD-PERP",
    "contract_type": "vanilla",
    "contract_price_currency": "USD",
    "base_currency": "BTC",
    "target_currency": "USD",
    "last_price": 72345.1234,
    "base_volume": 0.5393,
    "target_volume": 39017.23,
    "bid": 72344.8,
    "ask": 72345.4,
    "high": 74337.787264,
    "low": 71384.273231,
    "product_type": "perpetual",
    "open_interest": 13.3857,
    "open_interest_usd": 968349.55,
    "index_price": 72345.1234,
    "index_name": "Overlay BTC/USD",
    "index_currency": "USD",
    "start_timestamp": 1761222440,
    "end_timestamp": 1773676310,
    "funding_rate": -0.0004626,
    "next_funding_rate": -0.0004626,
    "next_funding_rate_timestamp": 1773676310
  }
]
```

### Field Reference

| Field | Type | Description |
| --- | --- | --- |
| `ticker_id` | `string` | Stable identifier for the market, for example `BTC-USD-PERP`. |
| `contract_type` | `string` | Contract pricing type. Overlay currently reports `vanilla`. |
| `contract_price_currency` | `string` | Quote currency the contract is priced in. |
| `contract_price` | `decimal` | Optional. Omitted when it is the same as `last_price`. |
| `base_currency` | `string` | Base asset symbol. |
| `target_currency` | `string` | Quote asset symbol. |
| `last_price` | `decimal` | Current market mid price in quote units. |
| `base_volume` | `decimal` | Rolling 24-hour single-sided volume in base units. |
| `target_volume` | `decimal` | Rolling 24-hour single-sided volume in quote units. |
| `bid` | `decimal` | Current highest bid price. |
| `ask` | `decimal` | Current lowest ask price. |
| `high` | `decimal` | Rolling 24-hour highest transaction price. |
| `low` | `decimal` | Rolling 24-hour lowest transaction price. |
| `product_type` | `string` | Product type. Overlay currently reports `perpetual`. |
| `open_interest` | `decimal` | Current total open interest in base units. |
| `open_interest_usd` | `decimal` | Current total open interest converted to USD. |
| `index_price` | `decimal` | Current underlying index price. |
| `index_name` | `string` | Optional human-readable index name. |
| `index_currency` | `string` | Currency of the reported index. |
| `start_timestamp` | `integer` | Market start timestamp. |
| `end_timestamp` | `integer` | Response timestamp. This value is cached together with the payload. |
| `funding_rate` | `decimal` | Daily funding rate as a decimal value. Multiply by `100` for percent per day. |
| `next_funding_rate` | `decimal` | Next daily funding rate as a decimal value. Overlay updates funding every block, so this mirrors `funding_rate`. |
| `next_funding_rate_timestamp` | `integer` | Current timestamp for the funding-rate snapshot. |

## `GET /contract_specs`

Returns the contract-specification subset for each enabled market. The same fields are also included in `/contracts`.

### Example Request

```bash
curl https://api.overlay.market/data/api/aggregator/contract_specs
```

### Example Response

```json
[
  {
    "ticker_id": "BTC-USD-PERP",
    "contract_type": "vanilla",
    "contract_price_currency": "USD"
  }
]
```

## Calculation Notes

### Volumes

- `base_volume` and `target_volume` are rolling 24-hour values.
- The source notional comes from hourly `marketHourDatas.volume` buckets in the market subgraph.
- The current bucket is fully included.
- The oldest boundary bucket is fractionally included so the total stays on an exact rolling 24-hour window.

### Open Interest

- `open_interest` is the current total open interest snapshot from the state contract.
- `open_interest_usd` converts that snapshot into USD using the current market price and the current quote-to-USD conversion.

### Funding

- `funding_rate` and `next_funding_rate` are dailyized values.
- The underlying on-chain funding value is a signed fixed-point rate. The API converts it to a decimal number and multiplies by `86400`.
- Example: `-0.0004626` means `-0.04626%` daily funding.

## Availability and Errors

- Responses are cached for 60 seconds.
- If one enabled market cannot be resolved, it is omitted from the payload and the other rows are still returned.
- If all enabled markets fail and there is no stale cache available, the API returns `503`.

<p style={{textAlign: 'right'}}>
<em>Last updated on <strong>Mar 18, 2026</strong></em>
</p>
