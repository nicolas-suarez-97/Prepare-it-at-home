// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {CourseType} from "../../types";
import { apiMethods } from '../../services/utils/apiUtils'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<CourseType>
) {
    const collection = "landing"
    return apiMethods(req, res, collection);
}