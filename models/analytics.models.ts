import { Schema, model, Types} from 'mongoose'

interface IAnalytics {
    
    visits : number;
    urlID : Types.ObjectId;
}

const analyticSchema = new Schema<IAnalytics>({
    visits : {type: Number, required: true },
    urlID : { type: Schema.Types.ObjectId, ref: 'Urlss', required: true}
}, {timestamps : true})


const analytics = model<IAnalytics>('Analytic', analyticSchema);


export { analytics}