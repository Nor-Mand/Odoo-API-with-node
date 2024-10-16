const express = require('express');
const router = express.Router();

// Database Connection
const client = require('../../db/conn');

//------------> Get all records
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