export class BaseUrl {
    static addParams(url: string, params: Record<string, string>): string {
        const settedParams = url.split('?')[1];
        console.log('🚀 ~ BaseUrl ~ addParams ~ settedParams:', settedParams);

        if (settedParams === undefined) {
            url += '?';
        }

        for (const key in params) {
            url += `${key}=${params[key]}&`;
        }

        console.log('🚀 ~ BaseUrl ~ addParams ~ url:', url);
        return url.slice(0, -1);
    }
}
