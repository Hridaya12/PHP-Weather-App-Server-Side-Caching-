This README provides an overview of the server-side caching architecture for the PHP Weather App. 
Caching is implemented to improve the performance and efficiency of the application by reducing the load on external APIs and enhancing the overall user experience.

Caching Strategy
Key-Value Storage: Weather data fetched from external APIs is stored in Redis as key-value pairs, where the key represents the location or query parameters, and the value is the corresponding weather data.
Expiration: Cached weather data is assigned a time-to-live (TTL) value based on the configured expiration policy. When the TTL expires, the cached data is considered stale and will be refreshed upon the next request.
Cache Invalidation: Cached weather data is invalidated and refreshed when it expires or when new data becomes available from the external API.
