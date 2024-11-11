/**
* @swagger
*  /api/contacts:
*  get:
*    summary: Retrieve a list of contacts
*    tags:
*    - Contacts
*    responses:
*      200:
*        description: A list of users
*        content:
*          application/json:
*            schema:
*              type: array
*              items:
*                type: object
*                properties:
*                  id:
*                    type: integer
*                    example: 1
*                  name:
*                    type: string
*                    example: John Doe
*/
/**
* @swagger
*   /api/contacts/{id}:
*   get:
*       summary: Retrieve contact by id
*       tags:
*           - Contacts
*       responses:
*           200:
*               description: get on contact
*           409:
*               description: Conflict
*           404:
*               description: Not Found
*           500:
*               description: Server Error
*       parameters:
*           - in: path
*             name: id
*             type: integer
*             required: true
*       content:
*          application/json:
*            schema:
*              type: object
*              items:
*                type: object

*/