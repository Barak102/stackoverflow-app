export interface IProvider {
    name: string;
    getUrl(param: string): string;
    mapHandling(obj: any);
}