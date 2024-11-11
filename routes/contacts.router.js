const express = require('express');
const router = express.Router();

// Database Connection
const client = require('../db/conn');

// GET ALL CONTACTS
router.get('/', async (req, res) =>{
    try {
        const allContacts = await client.query(
            // Basic Fields
            // Remove or add more columns
            "SELECT rp.id, rp.create_date,rp.name, rp.phone, rp.mobile, rp.email, rp.website, rp.vat, rc.name->'en_US' as Country\
             FROM res_partner rp\
              INNER JOIN res_country rc\
                    ON rc.id = rp.country_id"
        )
        res.json(allContacts.rows)
        
    } catch (error) {
        console.log(error.message);
    }
});

// GET CONTACT BY RANGE OF DATE
router.get('/test', async (req,res) => {

    const {start_date, end_date} = req.query

    try {
        const getContactByDate = await client.query (
        "SELECT rp.id, rp.create_date,rp.name, rp.phone, rp.mobile, rp.email, rp.website, rp.vat, rc.name->'en_US' as Country\
             FROM res_partner rp\
              INNER JOIN res_country rc\
                    ON rc.id = rp.country_id\
            WHERE rp.create_date between $1 and $2",[start_date,end_date]
        )
        res.json(getContactByDate.rows)

    } catch (error) {
        console.log(error.message);
    }
})


//GET CONTACT BY ID
router.get('/:id', async(req, res) => {
    
    const {id} = req.params;
    
    try {
        const getContactById = await client.query(
            "SELECT rp.id, rp.create_date,rp.name, rp.phone, rp.mobile, rp.email, rp.website, rp.vat, rc.name->'en_US' as Country\
             FROM res_partner rp\
              INNER JOIN res_country rc\
                    ON rc.id = rp.country_id\
            WHERE rp.id =$1",[id]
        )
        res.json(getContactById.rows)
        
    } catch (error) {
        console.log(error.message);
    }
})


module.exports = router;
