/* SystemJS module definition */
declare var module: {
  id: string;
};

declare module "jwt-decode" {
    function decode(token: string): any;
    namespace decode { }
    export = decode;
}
