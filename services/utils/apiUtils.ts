import { del, get, post, put } from '../mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export const apiMethods = (req: NextApiRequest, res: NextApiResponse, collection: string) => {
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
