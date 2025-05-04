import type {Request, Response} from 'express'
import {urlModel} from '../models/urls.models'
import {analytics} from '../models/analytics.models'

async function handleGetURLS(req : Request ,res : Response){

    const allURLS = await urlModel.find({});

    return res.status(200).json(allURLS);

}


async function handleRedirectUrl(req : Request ,res : Response){

    const shorturl = req.params.shortURL;

    if(shorturl){

        const findURL = await urlModel.findOne(urlModel.where({shorternedURL:shorturl }))

   
        if(findURL){
            
            // TODO: Create / Fetch and Update Analytics
            
            res.redirect(findURL.shortenedURL);
        }
        else{
            res.status(404).json({error: "URL Not Found!"})
        }

    }
    else{
        res.status(400).json({error: "Shorterned URL Required!"})
    }
}


async function handleCreateShortyUrl(req : Request ,res : Response){

    const urlBody = req.body

    if(!urlBody.orignalURL){
        res.status(400).json({error: "All fields required!"})
    }

    const newURL = await urlModel.create({ orignalURL: urlBody.orignalURL}).then(() => {
        console.log(newURL);
        res.status(200).json({success: true})
    }).catch((error) => console.log("Error occurredd when creating newURL: ", error))

}

export { handleCreateShortyUrl, handleGetURLS, handleRedirectUrl}