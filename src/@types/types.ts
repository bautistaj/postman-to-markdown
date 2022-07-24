/* eslint-disable  @typescript-eslint/no-explicit-any */
export type jsonDocument = {
    info: {
        description: string;
        name: string;
    };
    item: any[];
};

export type jsonAuth = {
    type: any; 
    bearer: any[];
}

export type jsonRequest = {
    header: any[];
    key: string;
    value: string;
    description: string;
}

export type jsonQuery = {
    query: any[];
}

export type jsonBody = {
    key: string;
    value: string;
    type: string;
    mode: string;
    raw: any;
    formdata: any[];
}

export type jsonResponse = {
    length: number;
    responses: any[];
}

export type jsonMethod = {
    name: any;
    request: {
        description: any;
        method?: any;
        url?: any;
        body?: any;
        auth?: any;
        header?: any[];
        key?: string;
        value?: string;
    };
    response: string | any[];
}

