# 📘 Blockchain – Documentação de Endpoints

**Formato de Resposta:** JSON  

---
- [X] Finalizado
## HTTP

### GET `/block`
Pegar todos os blocos da blockchaim

**Resposta:** `200`
```json
[
    {
        "block_height": "number", 
        "block_hash": "string",
        "previous_block_hash": "string", 
        "merkle_root": "string", 
        "timestamp": "string", 
        "difficulty": "number", 
        "nonce": "number", 
        "version": "number",
        "size": "number",
        "transaction": "Transaction[]",
    }
]
```

---
- [X] Finalizado
### GET `/block/last`
Pegar ultimo o bloco gerado da blockchaim

**Resposta:**
```json
{
    "block_height": "number", 
    "block_hash": "string",
    "previous_block_hash": "string", 
    "merkle_root": "string", 
    "timestamp": "string", 
    "difficulty": "number", 
    "nonce": "number", 
    "version": "number",
    "size": "number",
    "transaction": "Transaction[]",
}
```

---
- [X] Finalizado
### GET `/block/:quantity`
Pegar a quantidade de blocos da blockchaim em relação ao ultimo gerado

**Resposta:**
```json
[
    {
        "block_height": "number", 
        "block_hash": "string",
        "previous_block_hash": "string", 
        "merkle_root": "string", 
        "timestamp": "string", 
        "difficulty": "number", 
        "nonce": "number", 
        "version": "number",
        "size": "number",
        "transaction": "Transaction[]",
    }
]
```

---
- [X] Finalizado
### POST `/transaction`
Pegar ultimo o bloco gerado da blockchaim

**Resposta:**
```json
{
    "outputs": "TransactionType[]",
    "inputs": "TransactionType[]",
    "publicKey": "string", 
    "txid": "string",
    "timestamp": "number",
    "signature": "string"
}
```

---
- [] Finalizado
### GET `/asset/:publicKey`
Pegar saldo da blockchaim

**Resposta:**
```json
[
    {
        "category": [
            {"asset": "string", "quantity": "number", "average": "number"}
            "..."
        ]
    }
    "..."
]
```