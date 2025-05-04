import type {Request, Response} from 'express'
import {analytics} from '../models/analytics.models'

async function handleGetAllAnalytics(req : Request ,res : Response){

    const allAnalytics = await analytics.find({});

    return res.status(200).json(allAnalytics);

}

async function handleGetURLAnalytics(req : Request ,res : Response){

    const id = req.params.urlid

    const urlAnalysis = await analytics.findOne({urlid: id});

    if(!urlAnalysis){
        return res.status(400).json({
            message: "URL not found!",
          });
    }

    return res.status(200).json(urlAnalysis);
}

export { handleGetAllAnalytics, handleGetURLAnalytics}