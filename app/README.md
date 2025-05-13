## Last Block ("lastBlock")

 - Reponse

```JSON
    {
        block_height: number,
        block_hash: string,
        previous_block_hash: string,
        merkle_root: string,
        timestamp: string,
        difficulty: number,
        nonce: number,
        version: number,
        size: number,
        transaction: any[],
    }
```

## Blocks ("blocks")

 - Response

```JSON
    [
        {
            block_height: number,
            block_hash: string,
            previous_block_hash: string,
            merkle_root: string,
            timestamp: string,
            difficulty: number,
            nonce: number,
            version: number,
            size: number,
            transaction: any[],
        }
        ...
    ]
```

##