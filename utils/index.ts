import type { Response } from "express";

import dfnsTzFormat from "date-fns-tz/format";
import dfnsParseISO from "date-fns/parseISO";
import { Locale } from "date-fns";

export type ValidDateFnsDate = number | Date;
export type InternalDate = string | ValidDateFnsDate;

const toInternalDate = (date: InternalDate): ValidDateFnsDate => {
  if (typeof date === "string") {
    return dfnsParseISO(date);
  }
  return date;
};

type Options = {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  additionalDigits?: 0 | 1 | 2;
  timeZone?: string;
  locale?: Locale;
  includeSeconds?: boolean;
  addSuffix?: boolean;
  unit?: "second" | "minute" | "hour" | "day" | "month" | "year";
  roundingMethod?: "floor" | "ceil" | "round";
  awareOfUnicodeTokens?: boolean;
};

/**
 * Formats a date with the given `formatStr` using the local system timezone, or
 * the timezone passed through via the `options` parameter
 *
 * If you don't need to use timezone tokens (z...zzz), use the `format` function instead
 *
 * @example
 * // returns Mar 30, 2021 08:47AM PDT
 * formatWithTimezone(new Date(), 'MMM d, yyyy hh:mma z')
 */
const formatWithTimezone = (
  date: InternalDate,
  formatStr: string,
  options?: Options
): string => dfnsTzFormat(toInternalDate(date), formatStr, options);

/**
 * Helper function to send an error to the CLIENT.
 *
 * @function
 * @param err - error message
 * @param statusCode - status code error
 * @param res - res object
 * @returns Response
 */
const sendError = (
  err: Error,
  statusCode: number,
  res: Response
): Response<any, Record<string, any>> | void =>
  res.status(statusCode).render("error", { error: err.toString() });

export { formatWithTimezone, sendError };
