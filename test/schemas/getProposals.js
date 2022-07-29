const validSchemaGetProposals = {
  "type": "object",
  "properties": {
    "groupTitle": {"type": "string"},
    "threshold": {"type": "integer"},
    "proposals": {
      "type": "array",
      "items":[{
        "type": "object",
        "properties": {
          "id": {"type": "integer"},
          "nonce": {"type": "integer"},
          "type": {"type": "string"},
          "confirmations": {"type": "integer"},
          "dateCreated": {"type": "integer"},
          "confirmedByUser": {"type": "boolean"},
          "canBeExecuted": {"type": "boolean"},
          // "user": {
          //   "type": "object",
          //   "properties": {
          //     "username": {"type": "string"},
          //   }
          // },
          "address": {"type": "string"},
          // "amountOfFunds": {"type": "string"},
          // "tokenSymbol": {"type": "string"},
        },
      }],
    },
  },
  "required": ["groupTitle", "threshold", "proposals"],
};
module.exports = { validSchemaGetProposals }
