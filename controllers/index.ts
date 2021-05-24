import type { Request, Response } from "express";
import { formatWithTimezone, sendError } from "~utils";

/**
 * Gets current or specified date.
 *
 * @param req - express `Request`
 * @param res - express `Response`
 * @returns {Response} date
 * @throws {ResponseError}
 */
const getDate = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const responseDate = formatWithTimezone(
      (id as string) || new Date(),
      "MMM d, yyyy hh:mma z"
    );

    return res.status(200).send(responseDate);
  } catch (err) {
    return sendError(err, 400, res);
  }
};

export { getDate };
