import { ParsedNameValue } from "./ParsedNameValue";

export abstract class URLOperation
{
    static getQuery(query?: { [name: string]: ParsedNameValue }): string
    {
        let ans = "";
        let first = true;
        if (query)
            for (const key of Object.keys(query))
            {
                let value = query[key];
                if (value != null)
                {
                    if (first)
                        ans += "?";
                    else
                        ans += "&";
                    if (Array.isArray(value))
                        value = value.join(",");
                    ans += `${key}=${value}`;
                    first = false;
                }
            }
        return ans;
    }
    static merge(...urlParts: string[]): string
    {
        let ans = "";
        for (let part of urlParts)
        {
            if (part)
            {
                if (ans)
                {
                    if (part.startsWith('/'))
                        part = part.substring(1);
                    ans += "/";
                }
                ans += part;
                if (ans.endsWith('/'))
                    ans = ans.substring(0, ans.length - 1);
            }
        }
        return ans;
    }
    static getSub(sub: string, query?: { [name: string]: ParsedNameValue }): string
    {
        return this.merge(sub, this.getQuery(query));
    }
    static getLink(domain: string, sub: string, query?: { [name: string]: ParsedNameValue }): string
    {
        return this.merge(domain, this.getSub(sub, query));
    }
}