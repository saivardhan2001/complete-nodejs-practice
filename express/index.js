const express=require('express');
const app=express();
app.get('/verintPTO', (req, res) => {
    const jsonReq = {};
    if (req.query.date) {
        jsonReq.date = req.query.date
    }
    verintService.readCsvFile(jsonReq).then(result => {
        logger.info(`verintPTO success with result ${result.length}`);
        sendVerintEmailStatus(result,jsonReq);
        res.send(result);
    }).catch(error => {
        if ( !error['fileCount'] > 0 ){
            // sendVerintFailureStatus(error,jsonReq);
        }
        logger.error(error)
        res.send(error);
    });
})
app.listen(8080,()=>{console.log("iam listening");});