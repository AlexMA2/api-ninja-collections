import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function loggingInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
    const apiKey = 'NxFKyTHqnnzwIO9Ye1aIdA==SWeIYtlhmep2Rvln';
    const baseUrl = 'https://api.api-ninjas.com/v1';

    const apiUrl = concatBaseUrl(baseUrl, req.url);

    const clonedRequest = req.clone({
        url: apiUrl,
        headers: req.headers.set('X-API-KEY', apiKey),
    });

    return next(clonedRequest);
}

function concatBaseUrl(baseUrl: string, url: string): string {
    if (url.startsWith('http')) {
        return url;
    }

    if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
    }

    return `${baseUrl}/${url}`;
}
