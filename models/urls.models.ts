import { Schema, model} from 'mongoose'

interface IUrl {
    
    orignalURL : string;
    shortenedURL : string;
    isExpired : boolean;
    expiryDate? : Date;
}

interface IUrlMethods {
    generateShortUrl() : void;
}

const urlSchema = new Schema<IUrl, {}, IUrlMethods>({

    orignalURL : {
        type: String,
        required: true
    },
    shortenedURL : {
        type: String,
        required: true,
        unique: true
    },
    isExpired : {
        type: Boolean,
        default: false,
    },
    expiryDate : {
        type: Date,
        default: null
    }
}, {timestamps: true})


function generateShortyURL() : string {

    const num = new Number(Math.random);
    return num.toString(36).slice(2);

}


urlSchema.methods.generateShortUrl = function() : void {

    this.shortenedURL = generateShortyURL();

}


// generate shorteneredURL
urlSchema.pre('save',function(next){
    this.generateShortUrl();
    next();
})


// TODO: Generate Analytic Hook

const urlModel = model<IUrl>("Url", urlSchema)





export { urlModel }