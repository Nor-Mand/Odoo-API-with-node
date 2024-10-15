const express = require('express');
const router = express.Router();

// Database Connection
const client = require('../../db/conn');

/**
* @swagger

*  /api/contacts:

*  get:

*    summary: Retrieve a list of users

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
router.get('/', async (req, res) =>{
    try {
        // Basic Fields
        const allContacts = await client.query(
            // Remove or add more columns
            "SELECT rp.id, rp.name, rp.phone, rp.mobile, rp.email, rp.website, rp.vat, rc.name->'en_US' as Country\
             FROM res_partner rp\
              INNER JOIN res_country rc\
                    ON rc.id = rp.country_id"
        )
        res.json(allContacts.rows)
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;