// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {get, post, put, del} from "../../services/mongodb";
import {LandingsType} from "../../types";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<LandingsType>
) {
    const collection = "landing"
    switch (req.method) {
        case 'GET': {
            return get(req, res, collection, req.query);
        }

        case 'POST': {
            return post(req, res, collection);
        }

        case 'PUT': {
            return put(req, res, collection);
        }

        case 'DELETE': {
            return del(req, res, collection);
        }
    }
}