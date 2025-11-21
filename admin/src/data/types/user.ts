export interface AuthLoginType {
    email_address: string
    password: string
}

export interface AuthLogoutType {
    jwt_id: string | null
}

export interface ContributorCreateType {
    first_name: string
    last_name: string
    middle_name: string | null
    email_address: string
    password: string
}

export interface ContributorType {
    id: string
    first_name: string
    last_name: string
    middle_name: string | null
    email_address: string
    password: string
    secret_key: string
    api_key: string
    account_status: string
    account_verified: boolean
    role: string
    created_at: string
    updated_at: string | null
}

export interface allContributorType {
    code: number,
    code_message: string,
    data: ContributorType[]
}

export interface oneContributorType {
    code: number,
    code_message: string,
    data: ContributorType
}

export interface countContributorType {
    code: number,
    code_message: string,
    data: number
}

export interface DeveloperCreateType {
    first_name: string
    last_name: string
    middle_name: string | null
    email_address: string
    password: string
}

export interface DeveloperType {
    id: string
    first_name: string
    last_name: string
    middle_name: string | null
    email_address: string
    password: string
    api_key: string
    account_status: string
    account_verified: boolean
    role: string
    created_at: string
    updated_at: string | null
}

export interface oneDeveloperType {
    code: number,
    code_message: string,
    data: DeveloperType
}

export interface countDeveloperType {
    code: number,
    code_message: string,
    data: number
}


export interface DeveloperAPIKeyUpdateType {
    api_key: string | null
}
