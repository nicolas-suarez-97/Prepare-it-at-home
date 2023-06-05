// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiMethods } from '../../services/utils/apiUtils'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const collection = "blog"

  return apiMethods(req, res, collection);
}