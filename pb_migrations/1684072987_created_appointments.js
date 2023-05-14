migrate((db) => {
  const collection = new Collection({
    "id": "1rlqhoq8g8uxbyn",
    "created": "2023-05-14 14:03:07.667Z",
    "updated": "2023-05-14 14:03:07.667Z",
    "name": "appointments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tzh7al8x",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pmp7fr7p",
        "name": "start",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "pssy7izl",
        "name": "end",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "tga4aiun",
        "name": "customer",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "kaaw4f6mtkgtbax",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1rlqhoq8g8uxbyn");

  return dao.deleteCollection(collection);
})
