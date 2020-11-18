import {NextApiRequest, NextApiResponse} from "next";

import auth0 from "utils/auth0";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleLogin(req, res);
  } catch (e) {
    console.error(e);
    res.status(e.status || 400).end(e.message);
  }
}